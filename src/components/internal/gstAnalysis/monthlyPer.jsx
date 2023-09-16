import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import '../../../app/globals.css'
import '../../../styles/bootstrap.min.css';
import '../../../styles/dashboard.css';

// import 'chartjs-plugin-datalabels';

const DonutChart = () => {
    const chartRefs = useRef([]);
    const [selectedYear, setSelectedYear] = useState('2023');
    const [chartInstances, setChartInstances] = useState([]);

    const handleYearChange = (event) => {
        const year = event.target.value;
        
        setSelectedYear(year);
        // console.log(selectedYear);

        if (year) {
            const fakeData = generateFakeData(year);
            updateCharts(fakeData);
        }
    };

    const updateCharts = (data) => {
        chartInstances.forEach((instance, index) => {
            instance.data.datasets[0].data = data[index];
            instance.update();
        });
    };

    const generateFakeData = (year) => {
        const data = [];

        // Generate fake data for each month
        for (let month = 0; month < 12; month++) {
            const sales = Math.floor(Math.random() * 100);
            const purchase = 100 - sales;

            data.push([sales, purchase]);
        }

        return data;
    };

    const getMonthName = (monthIndex) => {
        const date = new Date(selectedYear, monthIndex);
        const monthName = date.toLocaleString('default', { month: 'long' });
        return monthName;
    };

    useEffect(() => {
        const createCharts = () => {
            const newChartInstances = chartRefs.current.map((_, index) => {
                const ctx = chartRefs.current[index].getContext('2d');
                return new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: ['Sales', 'Purchase'],
                        datasets: [
                            {
                                data: [],
                                backgroundColor: ['lightblue', 'lightgreen'],
                            },
                        ],
                    },
                    options: {
                        plugins: {
                            datalabels: {
                                formatter: () => '',
                                color: '#000',

                                font: {
                                    weight: 'bold',
                                },
                                anchor: 'center',
                                align: 'center',
                                labels: {
                                    title: {
                                        font: {
                                            size: '14',
                                        },
                                    },
                                    value: {
                                        font: {
                                            size: '12',
                                        },
                                    },
                                },
                            },
                        },
                        plugins: {
                            legend: {
                                position: "right",
                                align: "center",
                                labels: {
                                    boxWidth: 18,
                                    padding: 30,
                                    font: {
                                        size: 13
                                    }
                                }
                            },
                        },
                    },
                });
            });

            setChartInstances(newChartInstances);
        };
        if (chartRefs.current.length > 0 && selectedYear !== '') {
            createCharts();
        }
        return () => {
            chartInstances.forEach((instance) => {
                instance.destroy();
            });
        };
    }, [chartRefs.current]);

    return (
        <div className='donut-chart-main' style={{ width: "1000px" }} >
            <div className='gst-dropdown' style={{marginTop:"30px"}}>
                <select value={selectedYear} onChange={handleYearChange}>
                    {/* <option value='2023'>Select Year</option> */}
                    <option value='2021'>FY 2021</option>
                    <option value='2022'>FY 2022</option>
                    <option value='2023'>FY 2023</option>
                </select>
            </div>

            {Array.from({ length: 12 }, (_, index) => (
                <div className='donut-chart'>
                    <div key={index} style={{width:"300px"}}>
                        <h2 style={{ order: "1" }} >{`${getMonthName(index)} ${selectedYear}`}</h2>
                        <canvas ref={(ref) => (chartRefs.current[index] = ref)}/>
                    </div>
                    <div className='card-donut' >
                        <div className="card mini-stat m-b-30" style={{boxShadow:"none"}} >
                            <div className="col-sm-12">
                                <table
                                    id="datatable-buttons"
                                    className="table table-striped table-bordered dt-responsive nowrap dataTable no-footer dtr-inline"
                                    style={{ borderCollapse: 'collapse', borderSpacing: '0px', width: '100%',border:"2px solid #ffffff", }}
                                    role="grid"
                                    aria-describedby="datatable-buttons_info"
                                >
                                    <thead>
                                        <tr role="" style={{border:"2px solid #ffffff" }}>
                                            <th className="sorting_asc" tabIndex="0" aria-controls="datatable-buttons" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Name: activate to sort column descending" style={{border:"2px solid #ffffff" }}>
                                                Sales
                                            </th>
                                            <td tabIndex="0" className="price sorting_1" style={{border:"2px solid #ffffff" }}>
                                                1,22,33,444.00
                                            </td>
                                            <th className="sorting_asc" tabIndex="0" aria-controls="datatable-buttons" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Name: activate to sort column descending" style={{border:"2px solid #ffffff" }}>
                                                Sales MOM
                                            </th>
                                            <td tabIndex="0" className="sorting_1" style={{border:"2px solid #ffffff" }}>
                                                0.00%
                                            </td>
                                        </tr>
                                        <tr role="" style={{border:"2px solid #ffffff" }}>
                                            <th className="sorting_asc" tabIndex="0" aria-controls="datatable-buttons" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Name: activate to sort column descending" style={{border:"2px solid #ffffff" }}>
                                                Purchase
                                            </th>
                                            <td tabIndex="0" className=" price sorting_1" style={{border:"2px solid #ffffff" }}>
                                                1,22,33,444.00
                                            </td>
                                            <th className="sorting_asc" tabIndex="0" aria-controls="datatable-buttons" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Name: activate to sort column descending" style={{border:"2px solid #ffffff" }}>
                                                Purchase MOM
                                            </th>
                                            <td tabIndex="0" className="sorting_1" style={{border:"2px solid #ffffff" }}>
                                                0.00%
                                            </td>
                                        </tr>
                                        <tr role="" style={{border:"2px solid #ffffff" }}>
                                            <th className="sorting_asc" tabIndex="0" aria-controls="datatable-buttons" rowSpan="1" colSpan="1" aria-sort="ascending" aria-label="Name: activate to sort column descending" style={{border:"2px solid #ffffff" }}>
                                                Total Invoice
                                            </th>
                                            <td tabIndex="0" className="sorting_1" style={{border:"2px solid #ffffff" }}>
                                                344
                                            </td>
    
                                        </tr>

                                    </thead>

                                </table>

                            </div>
                        </div>
                    </div>
                </div>

            ))}



        </div>


    );
};

export default DonutChart;
