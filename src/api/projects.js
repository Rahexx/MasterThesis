import axios from 'axios';
import { API } from '../config/index';
import { LocalAPI } from '../config';

export const fetchProjects = () => axios.get(`${LocalAPI}/fetchImages`);

export const deleteProject = (filename) =>
  axios.get(`${API}/deleteImage/${filename}`);

export const uploadProject = (formData) =>
  axios.post(`${LocalAPI}/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
