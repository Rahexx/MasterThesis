import React from 'react';
import { useSelector } from 'react-redux';
// import { API } from '../../config';
// eslint-disable-next-line no-undef
const Plot = createPlotlyComponent(Plotly);

export const Image3DView = () => {
  const { activeProject } = useSelector((state) => state.projects);
  // const pathToActiveProject = `${API}/${activeProject}`;

  return (
    <>
      <header>
        <h1 className='mainViewHeader'>Strona 3D</h1>
        <div className='mx-5 my-3'>
          {activeProject && <h2>{activeProject}</h2>}
          <Plot
            data={[
              {
                type: 'scatter3d',
                mode: 'markers',
                x: [1, 2, 3],
                y: [2, 6, 3],
                z: [1, 2, 4],
                marker: {
                  size: 12,
                  line: {
                    color: 'rgba(217, 217, 217, 0.14)',
                    width: 0.5,
                  },
                  opacity: 0.8,
                },
              },
            ]}
            layout={{
              height: 800,
              width: 1200,
              title: `3D Views`,
              scaleanchor: 'y',
            }}
            revision={0}
          />
        </div>
      </header>
    </>
  );
};
