import React, { useState, useEffect } from 'react';

// eslint-disable-next-line no-undef
const Plot = createPlotlyComponent(Plotly);

export const PlotlyChart = ({ listOfTraces, projectName }) => {
  const [preparedPlotlyData, setPreparedPlotlyData] = useState(null);

  const prepareTraces = () => {
    const preparedTraces = listOfTraces.map((group) => ({
      type: 'scatter3d',
      mode: 'markers',
      x: group.xPosition,
      y: group.yPosition,
      z: group.zPosition,
      marker: {
        size: 10,
        line: {
          color: group.color,
          width: 0.5,
        },
        opacity: 1,
      },
    }));

    setPreparedPlotlyData(preparedTraces);
  };

  useEffect(() => {
    prepareTraces();
  }, []);

  return (
    <div className='d-flex justify-content-center mx-5 my-3'>
      {preparedPlotlyData && (
        <Plot
          data={preparedPlotlyData}
          layout={{
            height: 800,
            width: 1200,
            title: projectName,
            scaleanchor: 'y',
          }}
          revision={0}
        />
      )}
    </div>
  );
};
