import React from 'react';
import { Line } from 'react-chartjs-2';
import '../../../app/globals.css'
import '../../../styles/bootstrap.min.css';
import '../../../styles/dashboard.css';

const creditChart = () => {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Available Balance (Rupees)',
                data: [6000000, 5000000, 4500000, 4000000, 3000000, 2100000],
                fill: true,
                backgroundColor: " rgba(17, 7, 155, 0.4)",
                borderColor: " rgba(17, 7, 155)",
                cubicInterpolationMode: 'monotone',
            },
        ],
    };

    // Configuration options for the chart
    const options = {
        responsive: true, // Make the chart responsive
        maintainAspectRatio: false, // Prevent the chart from maintaining aspect ratio
        plugins: {
            legend: {
                display: false,
            },

        },
        scales: {
            x: {
                display: false,
                grid: {
                    display: false, // Hide the x-axis background grid
                },
            },

            y: {
                display: false,
                beginAtZero: true,
                ticks: {
                    callback: function (value, index, values) {
                        return value.toLocaleString(); // Format y-axis labels with comma separator
                    },
                    grid: {
                        display: false, // Hide the y-axis background grid
                    },
                },
            },
        },
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column',flexWrap:"nowrap" }}>
            <div className='card m-b-20 card-body' style={{ boxShadow: "none" }}>
                <div className='card-content'>
                <table>
                    <tbody style={{display:"flex", justifyContent:"space-between"}}>
                        <tr className='cd-cl-1' >
                            <td style={{ border: '0px solid white'}}>
                                <p className=' cd-heading text-db' style={{fontSize:"20px"}}>Offered Credit Limit</p>
                                <p className='price ' style={{fontSize:"20px" }}>6,00,000.00</p>
                            </td>
                            
                        </tr>
                        <tr>
                        <td style={{ border: '0px solid white' }}>
                                <p className='cd-heading text-db' style={{fontSize:"20px"}}>Available Balance</p>
                                <p className='price'  style={{fontSize:"20px"}}>2,10,0000.00</p>
                            </td>
                        </tr>
                    </tbody>
                </table>

                </div>
                
            </div>
            <div style={{ flex: 1 }}>
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default creditChart;
