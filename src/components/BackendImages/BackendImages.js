import React from 'react';

export const BackendImage = () => {
  const images = ['images1', 'images2, images3'];

  return (
    <div className='backendImageContainer'>
      {images.map(() => (
        <img
          src='#'
          className='backendImage'
          alt='live organisms under microscope'
        />
      ))}
    </div>
  );
};
