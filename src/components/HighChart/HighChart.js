import React, { useState, useEffect } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import highcharts3d from 'highcharts/highcharts-3d';
highcharts3d(Highcharts);

export const HighChart = ({ listOfTraces, projectName }) => {
  const [options, setOptions] = useState(null);

  const prepareTraces = () => {
    const preparedTraces = listOfTraces.map((group, index) => ({
      name: `Trace ${index}`,
      color: group.color,
      accessibility: {
        exposeAsGroupOnly: true,
      },
      data: prepareCoOrdinates(
        group.xPosition,
        group.yPosition,
        group.zPosition,
      ),
    }));

    const preparedChart = {
      chart: {
        renderTo: 'container',
        margin: 175,
        type: 'scatter3d',
        animation: true,
        height: '800px',
        options3d: {
          enabled: true,
          alpha: 15,
          beta: 20,
          depth: 350,
          viewDistance: 250,
          fitToPlot: false,
          frame: {
            bottom: { size: 1, color: 'rgba(0,0,0,0.02)' },
            back: { size: 1, color: 'rgba(0,0,0,0.04)' },
            side: { size: 1, color: 'rgba(0,0,0,0.06)' },
          },
        },
      },
      title: {
        text: projectName,
      },
      plotOptions: {
        scatter: {
          width: 10,
          height: 10,
          depth: 10,
        },
      },
      yAxis: {
        min: 0,
        max: 15,
        title: null,
      },
      xAxis: {
        min: 0,
        max: 15,
        gridLineWidth: 1,
      },
      zAxis: {
        min: 0,
        max: 15,
        showFirstLabel: false,
      },
      legend: {
        enabled: true,
      },
      series: preparedTraces,
    };

    setOptions(preparedChart);
  };

  const prepareCoOrdinates = (xPosition, yPosition, zPosition) => {
    const preparedPositions = [];
    for (let i = 0; i <= xPosition.length; i++) {
      const point = [xPosition[i], yPosition[i], zPosition[i]];
      preparedPositions.push(point);
    }

    return preparedPositions;
  };

  useEffect(() => {
    prepareTraces();
  }, []);

  return (
    <div className='d-flex justify-content-center'>
      <div className='highChartComponent'>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
};
