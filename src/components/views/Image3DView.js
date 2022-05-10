import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
// import { API } from '../../config';
import { LocalAPI } from '../../config';
import axios from 'axios';

// eslint-disable-next-line no-undef
const Plot = createPlotlyComponent(Plotly);

export const Image3DView = () => {
  const { activeProject } = useSelector((state) => state.projects);
  const [preparedData, setPreparedData] = useState(null);
  // const pathToActiveProject = `${API}/${activeProject}`;
  const splitPathToActiveFile = activeProject.split('/');
  const fileNameWithExtension =
    splitPathToActiveFile[splitPathToActiveFile.length - 1];

  const prepareTraces = (fetchData) => {
    const listOfTraces = fetchData.listOfTraces;

    const preparedTraces = listOfTraces.map((group) => ({
      type: 'scatter3d',
      mode: 'markers',
      x: group.xPosition,
      y: group.yPosition,
      z: group.zPosition,
      marker: {
        size: 12,
        line: {
          color: group.color,
          width: 0.5,
        },
        opacity: 1,
      },
    }));

    setPreparedData(preparedTraces);
  };

  useEffect(() => {
    axios.get(`${LocalAPI}/fetchData/${fileNameWithExtension}`).then((res) => {
      prepareTraces(res.data);
    });
  }, []);

  return (
    <>
      <header>
        <h1 className='mainViewHeader'>Strona 3D</h1>
        <div className='mx-5 my-3'>
          {activeProject && <h2>{activeProject}</h2>}
          {preparedData && (
            <Plot
              data={preparedData}
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
