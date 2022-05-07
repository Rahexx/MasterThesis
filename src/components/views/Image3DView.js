import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import { API } from '../../config';
import { LocalAPI } from '../../config';
import axios from 'axios';

// eslint-disable-next-line no-undef
const Plot = createPlotlyComponent(Plotly);

export const Image3DView = () => {
  const { activeProject } = useSelector((state) => state.projects);
  const [fetchData, setFetchData] = useState(null);
  // const pathToActiveProject = `${API}/${activeProject}`;
  const splitPathToActiveFile = activeProject.split('/');
  const fileNameWithExtension =
    splitPathToActiveFile[splitPathToActiveFile.length - 1];

  useEffect(() => {
    axios.get(`${LocalAPI}/fetchData/${fileNameWithExtension}`).then((res) => {
      setFetchData(res.data);
    });
  }, []);

  return (
    <>
      <header>
        <h1 className='mainViewHeader'>Strona 3D</h1>
        <div className='mx-5 my-3'>
          {activeProject && <h2>{activeProject}</h2>}
          {fetchData && (
            <Plot
              data={[
                {
                  type: 'scatter3d',
                  mode: 'markers',
                  x: fetchData.xPosition,
                  y: fetchData.yPosition,
                  z: fetchData.zPosition,
                  marker: {
                    size: 12,
                    line: {
                      color: [
                        'rgba(217, 217, 217, 0.14)',
                        'rgba(117, 217, 57, 0.14)',
                      ],
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
          )}
        </div>
      </header>
    </>
  );
};
