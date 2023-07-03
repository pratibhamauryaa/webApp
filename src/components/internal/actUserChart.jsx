import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ActUserChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = {
      labels: ['Active', 'Inactive'],
      datasets: [
        {
          data: [70, 30], 
          backgroundColor: ['rgba(44, 207, 11, 0.6)', 'grey'],
          hoverBackgroundColor: ["rgba(44, 207, 11, 0.7)", 'grey'],
        },
      ],
    };

    const options = {
      cutoutPercentage: 70,
      legend: {
        display: true,
        position: 'bottom',
      },
    };

    const chart = new Chart(chartRef.current, {
      type: 'doughnut',
      data: data,
      options: options,
    });

    // Cleanup chart on component unmount
    return () => {
      chart.destroy();
    };
  }, []);

  return <div style={{ width: '200px', height: '200px', padding:"0px"}}>
  <canvas ref={chartRef} />
</div>;
};

export default ActUserChart;
