import { fetchProjects, deleteProject, uploadProject } from '../api/projects';
import { updateProjectsList } from '../slice/projectSlice';

export const handleLoadProjects = () => async (dispatch) => {
  const { data } = await fetchProjects();
  dispatch(updateProjectsList(data.filesList));
};

export const handleDeleteProject = (filename) => async (dispatch) => {
  const { data } = await deleteProject(filename);

  if (data.msg !== 'File not found') {
    dispatch(handleLoadProjects());
  }
};

export const handleUploadProject = (formData) => async (dispatch) => {
  const { data } = await uploadProject(formData);

  if (data.msg.includes('File was saved')) {
    dispatch(handleLoadProjects());
  }
};
