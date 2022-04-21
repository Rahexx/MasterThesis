import React from 'react';
import { useSelector } from 'react-redux';
import { API } from '../../config/index';

export const Image3DView = () => {
  const { activeImage } = useSelector((state) => state.images);

  return (
    <>
      <header>
        <h1 className='mainViewHeader'>Strona 3D</h1>
        <div className='mx-5 my-3'>
          {activeImage && (
            <img
              src={`${API}/${activeImage}`}
              className='col-4 mx-auto d-block'
              alt='live organisms under microscope'
            />
          )}
        </div>
      </header>
    </>
  );
};
