import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { fetchTraces } from '../../api/projects';
import { PlotlyChart } from '../PlotlyChart/PlotlyChart';
import { package3D } from '../../util/simpleTypes';

export const Image3DView = () => {
  const { activeProject, activePackage } = useSelector(
    (state) => state.projects,
  );
  const [preparedData, setPreparedData] = useState(null);
  const splitPathToActiveFile = activeProject.split('/');
  const fileNameWithExtension =
    splitPathToActiveFile[splitPathToActiveFile.length - 1];

  useEffect(() => {
    const loadTraces = async () => {
      const { data } = await fetchTraces(fileNameWithExtension);
      setPreparedData(data.listOfTraces);
    };

    loadTraces();
  }, []);

  return (
    <>
      <header>
        <h1 className='mainViewHeader'>{activePackage.toUpperCase()}</h1>
        <div className='mx-5 my-3'>
          {preparedData && activePackage === package3D.plotly && (
            <PlotlyChart
              listOfTraces={preparedData}
              projectName={fileNameWithExtension}
            />
          )}
        </div>
      </header>
    </>
  );
};
