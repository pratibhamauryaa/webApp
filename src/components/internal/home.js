import { useState } from 'react'
import React from 'react'
import '../../app/globals.css'
import '../../styles/bootstrap.min.css'
import '../../styles/dashboard.css'
// import Dropdown from '../gst-dropdown'
import { TbBoxSeam, TbCoinRupee, TbReceipt, TbCircleLetterQ } from "react-icons/tb";
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import ActUserChart from './actUserChart'


export const Home = () => {
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'];
    const B2bGraph = () => {

        const [data, setData] = useState({
            labels: labels,
            datasets: [
                {
                    label: 'Disburse Invoices',
                    data: [60, 50, 74, 40, 30, 34],
                    backgroundColor: "rgba(11, 22, 168, 0.582)",
                    borderColor: "rgb(11, 22, 168)",
                    borderWidth: 1,
                    hoverBackgroundColor: "rgba(11, 22, 168, 1)",
                    hoverBorderColor: "rgb(11, 22, 168)",
                },
            ]
        });


        return <>
            <div>
                <Bar
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

                            },
                            animation: {
                                duration: 2000,
                                easing: "easeInOutQuart"
                            }

                        }
                    }}
                />

            </div>

        </>
    };
    return (
        <div className="content-page">
            <div className='content'>
                <div className="page-content-wrapper">
                    <div className="page-content-wrapper">
                        <div className="container-fluid">
                            
                            <div style={{display:"flex", justifyContent:"space-between"}}>
                            <h1 className="int-heading">Dashboard</h1>
                            <div className="float-right page-breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <a href="#">XTRACAPNEO</a>
                                            </li>
                                            <li className="breadcrumb-item active">Home</li>
                                        </ol>
                                    </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-3 col-md-6">
                                    <div className="card mini-stat m-b-30" >
                                        <div className="p-3 bg-card text-white">
                                            <div className="no-opacity" >
                                                <TbBoxSeam style={{ float: 'right', fontSize: '29px', width: '30px', margin: 'auto' }} />
                                                {/* <i className="mdi mdi-account-network float-right mb-0"></i> */}
                                            </div>
                                            <h6 className="text-uppercase mb-0 text-bold no-opacity" style={{ paddingTop: "5px !important" }}>Total Buyers</h6>
                                        </div>
                                        <div className="card-body">
                                            <div className="border-bottom pb-4">
                                                <span className="mt-4 text-muted text-b">Total</span><br />
                                                <span className="text-bold">321</span>
                                                <span className="text-muted  float-right">Last: 200</span>

                                            </div>
                                            <div className="mt-4 text-muted">
                                                <span className="badge badge-success">+11% </span>
                                                <span className="ml-2 text-muted" style={{ fontSize: "12px" }}>From previous period</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="card mini-stat m-b-30">
                                        <div className="p-3  bg-card text-white">
                                            <div className="no-opacity">
                                                <TbCoinRupee style={{ float: 'right', fontSize: '29px', width: '30px', margin: 'auto' }} />
                                                {/* <i className="mdi mdi-account-network float-right mb-0"></i> */}
                                            </div>
                                            <h6 className="text-uppercase mb-0 text-bold no-opacity" style={{ paddingTop: "5px !important" }}>Disbursed Amount</h6>
                                        </div>
                                        <div className="card-body">
                                            <div className="border-bottom pb-4">
                                                <span className=" mt-4 text-muted text-b">Total</span><br />
                                                <span className="price text-bold">1,21,66,698.00</span>
                                            </div>
                                            <div className="mt-4 text-muted">
                                                <span className="badge badge-success">+11% </span>
                                                <span className="ml-2 text-muted" style={{ fontSize: "12px" }}>From previous period</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="card mini-stat m-b-30">
                                        <div className="p-3  bg-card text-white">
                                            <div className="no-opacity">
                                                <TbReceipt style={{ float: 'right', fontSize: '29px', width: '30px', margin: 'auto' }} />
                                                {/* <i className="mdi mdi-account-network float-right mb-0"></i> */}
                                            </div>
                                            <h6 className="text-uppercase mb-0 text-bold no-opacity" style={{ paddingTop: "5px !important" }}>Completed Invoices</h6>
                                        </div>
                                        <div className="card-body">
                                            <div className="border-bottom pb-4">
                                                <span className="mt-4 text-muted text-b">Total</span><br />
                                                <span className=" text-bold">4</span>
                                            </div>
                                            <div className="mt-4 text-muted">
                                                <span className="badge badge-success">+11% </span>
                                                <span className="ml-2 text-muted" style={{ fontSize: "12px" }}>From previous period</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="card mini-stat m-b-30">
                                        <div className="p-3  bg-card text-white">
                                            <div className="no-opacity">
                                                <TbCoinRupee style={{ float: 'right', fontSize: '29px', width: '30px', margin: 'auto' }} />
                                                {/* <i className="mdi mdi-account-network float-right mb-0"></i> */}
                                            </div>
                                            <h6 className="text-uppercase mb-0 text-bold no-opacity" style={{ paddingTop: "5px !important" }}>Disbursed Invoices</h6>
                                        </div>
                                        <div className="card-body">
                                            <div className="border-bottom pb-4">
                                                <span className=" mt-4 text-muted text-b">Total</span><br />
                                                <span className="text-bold">13</span>
                                            </div>
                                            <div className="mt-4 text-muted">
                                                <span className="badge badge-success">+11% </span>
                                                <span className="ml-2 text-muted" style={{ fontSize: "12px" }}>From previous period</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-xl-9" style={{ paddingLeft: "20px", paddingRight: "0px", paddingTop: '30px', width: "auto" }}>
                                    <div className="card mini-stat m-b-30">
                                        <div className="p-3  bg-card text-white">
                                            <div className="no-opacity">
                                                <TbCircleLetterQ style={{ float: 'left', fontSize: '29px', width: '30px', margin: 'auto' }} />
                                                {/* <i className="mdi mdi-account-network float-right mb-0"></i> */}
                                            </div>
                                            <h6 className="text-uppercase mb-0 text-bold no-opacity" style={{ paddingTop: "5px", paddingLeft: '39px' }}>QUICK ACTIONS</h6>
                                        </div>
                                        <div className="" >
                                            <div className="">
                                                <div className="">
                                                    <div className='cr-act-box' style={{ marginTop: "20px", marginLeft: "20px" }}>
                                                        <a type='button' className="adv-button">Upload invoice</a>
                                                        <a type='button' className="adv-button">Check GST</a>
                                                        <a type='button' className="adv-button">Add Buyer</a>
                                                        <a type='button' className="adv-button">Bank Details</a>
                                                        <a type='button' className="adv-button"> Make Payment</a>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className='row' style={{ justifyContent: "space-between" }}>
                                <div className='card m-b-20 card-body' style={{ width: "20%", marginRight: "20px", marginLeft: "20px", paddingBottom: "50px" }}>
                                    <h4 style={{ textAlign: "center", padding: "20px" }}>Monthly Disbursed Invoices</h4>
                                    <div>
                                        <B2bGraph />

                                    </div>

                                </div>

                                <div className='card m-b-20 card-body' style={{ width: "20%", margin: "-11" }}>
                                    <h4 style={{ textAlign: "center", padding: "20px" }}>Active / Inactive Users</h4>
                                    <div style={{ display: "flex", justifyContent: "center" }}>
                                        <ActUserChart />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
