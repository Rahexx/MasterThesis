import { fetchImages, deleteImage, uploadImage } from '../api/images';
import { updateImagesList } from '../slice/imageSlice';

export const handleLoadImages = () => async (dispatch) => {
  const { data } = await fetchImages();
  dispatch(updateImagesList(data.filesList));
};

export const handleDeleteImage = (filename) => async (dispatch) => {
  const { data } = await deleteImage(filename);

  if (data.msg !== 'File not found') {
    dispatch(handleLoadImages());
  }
};

export const handleUploadImage = (formData) => async (dispatch) => {
  const { data } = await uploadImage(formData);

  if (data.msg.includes('File was saved')) {
    dispatch(handleLoadImages());
  }
};
