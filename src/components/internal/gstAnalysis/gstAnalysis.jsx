import React from 'react';
import '../../../app/globals.css'
import '../../../styles/bootstrap.min.css';
import '../../../styles/dashboard.css';
import { TbBoxSeam, TbCoinRupee, TbReceipt, TbCircleLetterQ } from "react-icons/tb";
import DropdownGst from '../../gst-dropdown';
import { Tabs, Tab } from "react-bootstrap";
import GstSummaryTab from './gstSummaryTab';


const GstAnalysis = () => {
    return (
        <div>  <div>
            <div className="content-page">
                <div className='content'>
                    <div className="page-content-wrapper">
                        <div className="page-content-wrapper">
                            <div className="container-fluid">
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <h1 className="int-heading">Performance Summary</h1>
                                    <div className="float-right page-breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <a href="#">XTRACAPNEO</a>
                                            </li>
                                            <li className="breadcrumb-item active">GST Analysis</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className='gst-sel' style={{ paddingLeft: "20px", paddingBottom: "20px", paddingTop: "20px", display: "flex" }}>
                                    <h6 className='' style={{ marginTop: "10px" }}>GST Number</h6>
                                    <div className='gst-sel-drop' style={{ marginLeft: "25px", marginBottom: "20px" }}>
                                        <DropdownGst />
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
                                                <h6 className="text-uppercase mb-0 text-bold no-opacity" style={{ paddingTop: "5px !important" }}>Total Sellers</h6>
                                            </div>
                                            <div className="card-body">
                                                <div className="border-bottom pb-4">
                                                    <span className="mt-4 text-muted text-b">Total</span><br />
                                                    <span className="text-bold">321</span>
                                                    <span className="text-muted  float-right">Last: 200</span>

                                                </div>
                                                <div className="mt-4 text-muted">
                                                    <span className="badge badge-success">+11% </span>
                                                    <span className="ml-2 text-muted" style={{ fontSize: "12px" }}>From previous period</span><span className="badge badge-primary badge-pill float-right" style={{marginTop:"4px"}}>view list</span>
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
                                                <h6 className="text-uppercase mb-0 text-bold no-opacity" style={{ paddingTop: "5px !important" }}>Total Reatilers</h6>
                                            </div>
                                            <div className="card-body">
                                                <div className="border-bottom pb-4">
                                                    <span className="mt-4 text-muted text-b">Total</span><br />
                                                    <span className="text-bold">321</span>
                                                    <span className="text-muted  float-right">Last: 200</span>

                                                </div>
                                                <div className="mt-4 text-muted">
                                                    <span className="badge badge-success">+11% </span>
                                                    <span className="ml-2 text-muted" style={{ fontSize: "12px" }}>From previous period</span><span className="badge badge-primary badge-pill float-right" style={{marginTop:"4px"}}>view list</span>
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
                                                <h6 className="text-uppercase mb-0 text-bold no-opacity" style={{ paddingTop: "5px !important" }}>Total Invoices</h6>
                                            </div>
                                            <div className="card-body">
                                                <div className="border-bottom pb-4">
                                                    <span className="mt-4 text-muted text-b">Total</span><br />
                                                    <span className=" text-bold">340</span>
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
                                                <h6 className="text-uppercase mb-0 text-bold no-opacity" style={{ paddingTop: "5px !important" }}>Total Sales Invoice</h6>
                                            </div>
                                            <div className="card-body">
                                                <div className="border-bottom pb-4">
                                                    <span className=" mt-4 text-muted text-b">Total</span><br />
                                                    <span className="text-bold">769</span>
                                                </div>
                                                <div className="mt-4 text-muted">
                                                    <span className="badge badge-success">+11% </span>
                                                    <span className="ml-2 text-muted" style={{ fontSize: "12px" }}>From previous period</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='card m-b-20 card-body'>
                                <GstSummaryTab/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div></div>
    )
}

export default GstAnalysis