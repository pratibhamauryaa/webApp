import React from 'react'
import '../../app/globals.css'
import '../../styles/bootstrap.min.css'
import '../../styles/dashboard.css'
import { AiFillBank } from "react-icons/ai";



export const ProductDetails = () => {
    return (
        <div>
            <div className="content-page">
                <div className='content'>
                    <div className="page-content-wrapper">
                        <div className="page-content-wrapper">
                            <div className="container-fluid">
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                    <h1 className="int-heading">Product Details</h1>
                                    <div className="float-right page-breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <a href="#">XTRACAPNEO</a>
                                            </li>
                                            <li className="breadcrumb-item active">Product Details</li>
                                        </ol>
                                    </div>
                                </div>

                                <div className='card m-b-20 card-body pd-card'>
                                    <div className="card-header pd-title-bg"style={{marginLeft:"0px", paddingLeft:"0px", borderBottom:"0px"}}>
                                        <div className="" style={{marginLeft:"0px", paddingLeft:"0px"}}>
                                           <AiFillBank className="pd-title-icon text-db"/>
                                        </div>
                                        <div className="card-title text-db">
                                            <h4>Configured Products</h4>
                                        </div>
                                    </div>
                                    <div className="card-content">
                                        <h5 style={{}}>NBFC</h5>
                                        <p className="internal-headings">ANC Pvt Limited</p>
                                        <table>

                                            <tbody >
                                                <tr className='pd-cl-1'>
                                                    <td><p className="pd-heading">State</p> <p>Delhi</p></td>
                                                    <td><p className="pd-heading">City</p> <p>Delhi</p></td>
                                                    <td><p className="pd-heading">Product Configured</p> <p>WCl</p></td>
                                                    <td><p className="pd-heading">Loan Period Fixed To</p> <p>30 Days</p></td>
                                                    <td><p className="pd-heading">Interest Rate</p> <p>18%</p></td>
                                                    <td><p className="pd-heading">Amount Retained</p> <p>1234567</p></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className='card m-b-20 card-body'>
                                    <div className="card-title">
                                        <h2 className='font-20'>Product Details</h2>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <table
                                                id="datatable-buttons"
                                                className="table table-striped table-bordered dt-responsive nowrap dataTable no-footer dtr-inline"
                                                style={{ borderCollapse: 'collapse', borderSpacing: '0px', width: '100%' }}
                                                role="grid"
                                                aria-describedby="datatable-buttons_info"
                                            >
                                                <thead>
                                                    <tr role="row">
                                                        <th className="sorting_asc" tabIndex="0" aria-controls="datatable-buttons" rowSpan="1" colSpan="1" style={{ width: '300px' }} aria-sort="ascending" aria-label="Name: activate to sort column descending">
                                                            Product Type
                                                        </th>
                                                        <td tabIndex="0" className="sorting_1">
                                                            WCL
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="sorting_asc" tabIndex="0" aria-controls="datatable-buttons" rowSpan="1" colSpan="1" style={{ width: '102px' }} aria-sort="ascending" aria-label="Name: activate to sort column descending">
                                                            Interest Rate
                                                        </th>
                                                        <td tabIndex="0" className="sorting_1">
                                                            18%
                                                        </td>
                                                    </tr>
                                                    <tr>

                                                        <th className="sorting_asc" tabIndex="0" aria-controls="datatable-buttons" rowSpan="1" colSpan="1" style={{ width: '102px' }} aria-sort="ascending" aria-label="Name: activate to sort column descending">
                                                            Multiple Loan Allowed
                                                        </th>
                                                        <td tabIndex="0" className="sorting_1">
                                                            yes
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="sorting_asc" tabIndex="0" aria-controls="datatable-buttons" rowSpan="1" colSpan="1" style={{ width: '102px' }} aria-sort="ascending" aria-label="Name: activate to sort column descending">
                                                            Is Retailer Allowed To Upload Invoice
                                                        </th>
                                                        <td tabIndex="0" className="sorting_1">
                                                            yes
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="sorting_asc" tabIndex="0" aria-controls="datatable-buttons" rowSpan="1" colSpan="1" style={{ width: '102px' }} aria-sort="ascending" aria-label="Name: activate to sort column descending">
                                                            Loan Period Fixed To
                                                        </th>
                                                        <td tabIndex="0" className="sorting_1">
                                                            30 Days
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="sorting_asc" tabIndex="0" aria-controls="datatable-buttons" rowSpan="1" colSpan="1" style={{ width: '102px' }} aria-sort="ascending" aria-label="Name: activate to sort column descending">
                                                            Loan Type Allowed
                                                        </th>
                                                        <td tabIndex="0" className="sorting_1">
                                                            invoice
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="sorting_asc" tabIndex="0" aria-controls="datatable-buttons" rowSpan="1" colSpan="1" style={{ width: '102px' }} aria-sort="ascending" aria-label="Name: activate to sort column descending">
                                                            Amount Retained
                                                        </th>
                                                        <td tabIndex="0" className="sorting_1">
                                                            18,000
                                                        </td>
                                                    </tr>



                                                </thead>

                                            </table>

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
