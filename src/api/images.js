import axios from 'axios';
import { API } from '../config/index';

export const fetchImages = () => axios.get(`${API}/fetchImages`);

export const deleteImage = (filename) =>
  axios.get(`${API}/deleteImage/${filename}`);

export const uploadImage = (formData) =>
  axios.post(`${API}/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
