// import React from 'react';
import React, { useState } from "react";
import '../../../app/globals.css'
import '../../../styles/bootstrap.min.css';
import '../../../styles/dashboard.css';
import { Tabs, Tab } from "react-bootstrap";
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import DonutChart from "./monthlyPer";



const GstSummaryTab = () => {
    const labels = ['B2B Sales Amount', 'B2B Purchase Amount', 'B2C Sales Amount', 'B2C Purchase Amount'];
    const B2bGraph = () => {

        const [data, setData] = useState({
            labels: labels,
            datasets: [
                {
                    label: "B2B Sales Amount",
                    data: [62345666, null, null, null],
                    backgroundColor: "rgba(255, 99, 132, 0.2)",
                    borderColor: "rgb(255, 99, 132)",
                    borderWidth: 1,
                    hoverBackgroundColor: "rgba(255, 99, 132, 0.5)",
                    hoverBorderColor: "rgb(255, 99, 132)",
                },
                {
                    label: "B2B Purchase Amount",
                    data: [null, 61115290, null, null],
                    backgroundColor: "rgba(255, 159, 64, 0.2)",
                    borderColor: "rgb(255, 159, 64)",
                    borderWidth: 1,
                    hoverBackgroundColor: "rgba(255, 159, 64, 0.5)",
                    hoverBorderColor: "rgb(255, 159, 64)"
                },
                {
                    label: "B2C Sales Amount",
                    data: [null, null, 23456177, null],
                    backgroundColor: "rgba(255, 205, 86, 0.2)",
                    borderColor: "rgb(255, 205, 86)",
                    borderWidth: 1,
                    hoverBackgroundColor: "rgba(255, 205, 86, 0.5)",
                    hoverBorderColor: "rgb(255, 205, 86)"
                },
                {
                    label: "B2C Purchase Amount",
                    data: [null, null, null, 3456177],
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                    borderColor: "rgb(75, 192, 192)",
                    borderWidth: 1,
                    hoverBackgroundColor: "rgba(75, 192, 192, 0.5)",
                    hoverBorderColor: "rgb(75, 192, 192)"
                }
            ]
        });


        return <>
            <div style={{ width: "100%", height: "400px" }}>
                <Bar style={{ width: "100%", height: "690px" }}
                    data={data}
                    options={{
                        skipNull: true,
                        maintainAspectRatio: true,
                        responsive: true,
                        scales: {
                            x: {
                                grid: {
                                    display: true
                                }
                            },
                            y: {
                                grid: {
                                    display: true
                                },
                                beginAtZero: true
                            }
                        },
                        plugins: {
                            legend: {
                                position: "right",
                                align: "center",
                                labels: {
                                    boxWidth: 18,
                                    padding: 10,
                                    font: {
                                        size: 13
                                    }
                                }
                            },
                            animation: {
                                duration: 2000,
                                easing: "easeInOutQuart"
                            }
                            // tooltip: {
                            //     displayColors: true,
                            //     callbacks: {
                            //         label: (context) => {
                            //             const datasetLabel = context.dataset.label || "";
                            //             const value = context.parsed.y || 0;
                            //             return datasetLabel + ": " + value;
                            //         }
                            //     }
                            // }
                        }
                    }}
                />

            </div>

        </>
    };
    const Summary = () => {
        return <div>
            {/* <Gstsummary/> */}
            <div className="row" style={{ marginTop: "20px" }}>
                <div className="col-sm-12">
                    <table id="datatable-buttons" className="table table-striped table-bordered dt-responsive nowrap dataTable no-footer dtr-inline" style={{ borderCollapse: 'collapse', borderSpacing: '0px', width: '100%' }} role="grid" aria-describedby="datatable-buttons_info">
                        <thead>
                            <tr role="row">
                                <th className="sorting_asc" tabIndex="0" aria-controls="datatable-buttons" rowSpan="1" colSpan="1" style={{ width: '300px' }} aria-sort="ascending" aria-label="Name: activate to sort column descending">
                                    Total Yearly  Turnover
                                </th>
                                <td tabIndex="0" className="sorting_1">₹ 12,34,34,666.00</td>
                            </tr>
                            <tr>
                                <th className="sorting_asc" tabIndex="0" aria-controls="datatable-buttons" rowSpan="1" colSpan="1" style={{ width: '102px' }} aria-sort="ascending" aria-label="Name: activate to sort column descending">Sales Amount</th>
                                <td tabIndex="0" className="sorting_1">₹ 6,23,34,456.00</td>
                            </tr>
                            <tr>
                                <th className="sorting_asc" tabIndex="0" aria-controls="datatable-buttons" rowSpan="1" colSpan="1" style={{ width: '102px' }} aria-sort="ascending" aria-label="Name: activate to sort column descending">
                                    Purchase Amount
                                </th>
                                <td tabIndex="0" className="sorting_1">
                                    ₹ 6,23,34,456.00
                                </td>
                            </tr>
                            <tr>
                                <th className="sorting_asc" tabIndex="0" aria-controls="datatable-buttons" rowSpan="1" colSpan="1" style={{ width: '102px' }} aria-sort="ascending" aria-label="Name: activate to sort column descending">
                                    Purchase Invoice
                                </th>
                                <td tabIndex="0" className="sorting_1">
                                    1456
                                </td>
                            </tr>

                        </thead>

                    </table>
                    <div className='b2b-content' style={{ paddingTop: "16px" }}>
                        <h6>Business-to-Business</h6>
                        <div style={{ paddingTop: "40px", border: "1px solid #dee2e6", borderRadius: "10px" }}>
                            <B2bGraph />
                        </div>
                    </div>
                    <div className="row" style={{ marginTop: "20px" }}>
                        <div className="col-sm-12">
                            <table id="datatable-buttons" className="table table-striped table-bordered dt-responsive nowrap dataTable no-footer dtr-inline" style={{ borderCollapse: 'collapse', borderSpacing: '0px', width: '100%' }} role="grid" aria-describedby="datatable-buttons_info">
                                <thead>
                                    <tr role="row">
                                        <th className="sorting_asc" tabIndex="0" aria-controls="datatable-buttons" rowSpan="1" colSpan="1" style={{ width: '300px' }} aria-sort="ascending" aria-label="Name: activate to sort column descending">
                                            Average Sales Amount
                                        </th>
                                        <td tabIndex="0" className="sorting_1">₹ 12,34,34,666.00</td>
                                    </tr>
                                    <tr>
                                        <th className="sorting_asc" tabIndex="0" aria-controls="datatable-buttons" rowSpan="1" colSpan="1" style={{ width: '102px' }} aria-sort="ascending" aria-label="Name: activate to sort column descending">Average Purchase Amount</th>
                                        <td tabIndex="0" className="sorting_1">₹ 6,23,34,456.00</td>
                                    </tr>
                                    <tr>
                                        <th className="sorting_asc" tabIndex="0" aria-controls="datatable-buttons" rowSpan="1" colSpan="1" style={{ width: '102px' }} aria-sort="ascending" aria-label="Name: activate to sort column descending">
                                            Average Sales  Invoice
                                        </th>
                                        <td tabIndex="0" className="sorting_1">
                                            1456
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="sorting_asc" tabIndex="0" aria-controls="datatable-buttons" rowSpan="1" colSpan="1" style={{ width: '102px' }} aria-sort="ascending" aria-label="Name: activate to sort column descending">
                                            Average Purchase Invoice
                                        </th>
                                        <td tabIndex="0" className="sorting_1">
                                            1456
                                        </td>
                                    </tr>

                                </thead>
                            </table>

                        </div>

                    </div>
                    <div className="row" style={{ marginTop: "20px" }}>
                        <h6 style={{ marginLeft: "14px" }}>Business-to-Customer</h6>
                        <div className="col-sm-12">
                            <table id="datatable-buttons" className="table table-striped table-bordered dt-responsive nowrap dataTable no-footer dtr-inline" style={{ borderCollapse: 'collapse', borderSpacing: '0px', width: '100%' }} role="grid" aria-describedby="datatable-buttons_info">
                                <thead>
                                    <tr role="row">
                                        <th className="sorting_asc" tabIndex="0" aria-controls="datatable-buttons" rowSpan="1" colSpan="1" style={{ width: '300px' }} aria-sort="ascending" aria-label="Name: activate to sort column descending">
                                            Average Sales Amount
                                        </th>
                                        <td tabIndex="0" className="sorting_1">₹ 12,34,34,666.00</td>
                                    </tr>
                                    <tr>
                                        <th className="sorting_asc" tabIndex="0" aria-controls="datatable-buttons" rowSpan="1" colSpan="1" style={{ width: '102px' }} aria-sort="ascending" aria-label="Name: activate to sort column descending">Average Purchase Amount</th>
                                        <td tabIndex="0" className="sorting_1">₹ 6,23,34,456.00</td>
                                    </tr>

                                </thead>
                            </table>

                        </div>

                    </div>
                </div>

            </div>
        </div>;
    };
    return (
        <div>
            <Tabs>
                <Tab eventKey="gst-summary" title="Summary">
                    <Summary />
                </Tab>
                <Tab eventKey="gst-mp" title="Monthly Performance">
                    <DonutChart />
                </Tab>
            </Tabs>
        </div>
    )
}

export default GstSummaryTab