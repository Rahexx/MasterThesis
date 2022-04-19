import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { API } from '../../config/index';
import { Button, Stack } from 'react-bootstrap';
import {
  handleLoadImages,
  handleDeleteImage,
} from '../../actions/handleFetchImages';

export const BackendImage = () => {
  const dispatch = useDispatch();
  const { listImages } = useSelector((state) => state.images);

  useEffect(() => {
    dispatch(handleLoadImages());
  }, []);

  return (
    <Stack direction='horizontal' className='mx-5 my-3'>
      {listImages.map((image) => {
        return (
          <Stack gap={3} key={image.path}>
            <h3>{image.path}</h3>
            <img
              src={`${API}/${image.path}`}
              className='col-3'
              alt='live organisms under microscope'
            />
            <Button
              variant='danger'
              className='col-3'
              onClick={() => dispatch(handleDeleteImage(image.filename))}
            >
              Delete
            </Button>
          </Stack>
        );
      })}
    </Stack>
  );
};
