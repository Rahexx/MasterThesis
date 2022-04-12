import React, { useEffect, useState } from 'react';
import axios from 'axios';
import API from '../../config/index';

export const BackendImage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/fetchImages`)
      .then((res) => {
        setImages([...res.data.filesList]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='backendImageContainer'>
      {images.map((image) => {
        return (
          <img
            src={`${API}/${image}`}
            className='backendImage'
            alt='live organisms under microscope'
          />
        );
      })}
    </div>
  );
};
