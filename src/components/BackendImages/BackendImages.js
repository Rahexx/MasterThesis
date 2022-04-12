import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const BackendImage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get('https://rahexx-api.herokuapp.com/fetchImages')
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
            src={image}
            className='backendImage'
            alt='live organisms under microscope'
          />
        );
      })}
    </div>
  );
};
