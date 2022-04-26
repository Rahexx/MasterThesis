import React from 'react';
import { useSelector } from 'react-redux';

export const Image3DView = () => {
  const { activeProject } = useSelector((state) => state.projects);
  console.log('ACTIVE PROJECT', activeProject);
  return (
    <>
      <header>
        <h1 className='mainViewHeader'>Strona 3D</h1>
        <div className='mx-5 my-3'>
          {activeProject && <h2>{activeProject}</h2>}
        </div>
      </header>
    </>
  );
};
