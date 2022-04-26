import axios from 'axios';
import { API } from '../config/index';

export const fetchProjects = () => axios.get(`${API}/fetchImages`);

export const deleteProject = (filename) =>
  axios.get(`${API}/deleteImage/${filename}`);

export const uploadProject = (formData) =>
  axios.post(`${API}/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
