import React from 'react'
import '../../../app/globals.css'
import '../../../styles/bootstrap.min.css';
import '../../../styles/dashboard.css';
import CreditChart from './creditChart';


const Credit = () => {
    return (
        <div>
            <div className="content-page">
                <div className='content'>
                    <div className="page-content-wrapper">
                        <div className="page-content-wrapper">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="float-right page-breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item">
                                                    <a href="#">XTRACAPNEO</a>
                                                </li>
                                                <li className="breadcrumb-item active">Credit</li>
                                            </ol>
                                        </div>

                                    </div>
                                </div>
                                <h1 className="int-heading">Credit Details</h1>
                                <div className='row' style={{justifyContent:"space-between"}}>
                                    <div className='card m-b-20 card-body' style={{ width: "0%", marginRight: "20px" ,boxShadow: "none",marginLeft: "20px"}}>
                                        <div>
                                            <CreditChart />
                                        </div>

                                    </div>
                                    <div className='card m-b-20 card-body' style={{ width: "0px", marginRight: "20px",boxShadow: "none", paddingTop:"30px" }}>
                                        <table>
                                            <tbody>
                                                <tr className='cd-cl-1'>
                                                    <td><p className="cd-heading">Total Disbursed Invoices</p> <p style={{ fontSize: '30px' }}>10</p></td>

                                                </tr>
                                                <tr className='cd-cl-1'>
                                                    <td><p className="cd-heading">Total Amount</p> <p style={{ fontSize: '30px' }} className='price'>10,34550.00</p></td>

                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>



                                <div className='card m-b-20 card-body' style={{boxShadow: "none"}}>
                                    <div className="card-title">
                                        <h2 className='font-20'>Actions</h2>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="" >
                                                <div className="">
                                                    <div className='cr-act-box'>
                                                    <a type='button' className="adv-button">Add Seller</a>
                                                    <a type='button' className="adv-button">Documents</a>
                                                    <a type='button' className="adv-button">Seller List</a>
                                                    <a type='button' className="adv-button">My Reapyments</a>
                                                    <a type='button' className="adv-button"> My Invoices</a>
                                                    <a type='button' className="adv-button">View ledger</a>
                                                    <a type='button' className="adv-button">Agreement E-Sign</a>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>

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
export default Credit