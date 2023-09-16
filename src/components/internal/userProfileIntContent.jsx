import React from 'react'
import { Table } from 'antd'




const GstUserDetails = () => {

    return (
        <div>
            <div className='card m-b-20 card-body'>
                <div className="card-title">
                    <h2 className='font-20'>GST Details</h2>
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
                                        Business Name
                                    </th>
                                    <td tabIndex="0" className="sorting_1">
                                        ABCD Enterprises
                                    </td>
                                </tr>
                                <tr>
                                    <th className="sorting_asc" tabIndex="0" aria-controls="datatable-buttons" rowSpan="1" colSpan="1" style={{ width: '102px' }} aria-sort="ascending" aria-label="Name: activate to sort column descending">
                                        Constitution of business
                                    </th>
                                    <td tabIndex="0" className="sorting_1">
                                        Partnership
                                    </td>
                                </tr>
                                <tr>

                                    <th className="sorting_asc" tabIndex="0" aria-controls="datatable-buttons" rowSpan="1" colSpan="1" style={{ width: '102px' }} aria-sort="ascending" aria-label="Name: activate to sort column descending">
                                        Registered on
                                    </th>
                                    <td tabIndex="0" className="sorting_1">
                                        20-06-2017
                                    </td>
                                </tr>
                                <tr>
                                    <th className="sorting_asc" tabIndex="0" aria-controls="datatable-buttons" rowSpan="1" colSpan="1" style={{ width: '102px' }} aria-sort="ascending" aria-label="Name: activate to sort column descending">
                                        Last Updated On
                                    </th>
                                    <td tabIndex="0" className="sorting_1">
                                        15-04-2022
                                    </td>
                                </tr>
                                <tr>
                                    <th className="sorting_asc" tabIndex="0" aria-controls="datatable-buttons" rowSpan="1" colSpan="1" style={{ width: '102px' }} aria-sort="ascending" aria-label="Name: activate to sort column descending">
                                        Taxpayer Type
                                    </th>
                                    <td tabIndex="0" className="sorting_1">
                                        regular
                                    </td>
                                </tr>
                                <tr>
                                    <th className="sorting_asc" tabIndex="0" aria-controls="datatable-buttons" rowSpan="1" colSpan="1" style={{ width: '102px' }} aria-sort="ascending" aria-label="Name: activate to sort column descending">
                                        GST Status
                                    </th>
                                    <td tabIndex="0" className="sorting_1">
                                        Active
                                    </td>
                                </tr>
                                <tr>
                                    <th className="sorting_asc" tabIndex="0" aria-controls="datatable-buttons" rowSpan="1" colSpan="1" style={{ width: '102px' }} aria-sort="ascending" aria-label="Name: activate to sort column descending">
                                        GST Address Details
                                    </th>
                                    <td tabIndex="0" className="sorting_1">
                                        primary address: A-123, Delhi-110092 , India
                                    </td>
                                </tr>

                            </thead>

                        </table>

                    </div>

                </div>
            </div>

        </div>

    )
}


const PersonalInfotable = () => {


    return (
        <div>
            <div className='card m-b-20 card-body'>
                <div className="card-title">
                    <h2 className='font-20'>User Information</h2>
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
                                        User Name
                                    </th>
                                    <td tabIndex="0" className="sorting_1">
                                        John Doe
                                    </td>
                                </tr>
                                <tr>
                                    <th className="sorting_asc" tabIndex="0" aria-controls="datatable-buttons" rowSpan="1" colSpan="1" style={{ width: '102px' }} aria-sort="ascending" aria-label="Name: activate to sort column descending">
                                        Date of Birth
                                    </th>
                                    <td tabIndex="0" className="sorting_1">
                                        18-04-1999
                                    </td>
                                </tr>
                                <tr>

                                    <th className="sorting_asc" tabIndex="0" aria-controls="datatable-buttons" rowSpan="1" colSpan="1" style={{ width: '102px' }} aria-sort="ascending" aria-label="Name: activate to sort column descending">
                                        Contact Number
                                    </th>
                                    <td tabIndex="0" className="sorting_1">
                                        9999999999
                                    </td>
                                </tr>
                                <tr>
                                    <th className="sorting_asc" tabIndex="0" aria-controls="datatable-buttons" rowSpan="1" colSpan="1" style={{ width: '102px' }} aria-sort="ascending" aria-label="Name: activate to sort column descending">
                                        Email Id
                                    </th>
                                    <td tabIndex="0" className="sorting_1">
                                        test@gmail.com
                                    </td>
                                </tr>

                            </thead>

                        </table>

                    </div>

                </div>
            </div>

        </div>
    )

}

const BankDetailsTable = () => {
    return (
        <div>
            <div className='card m-b-20 card-body'>
                <div className="card-title">
                    <h2 className='font-20'>Bank Details</h2>
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
                                        Bank Name
                                    </th>
                                    <td tabIndex="0" className="sorting_1">
                                        ICICI BANK LIMITED
                                    </td>
                                </tr>
                                <tr>
                                    <th className="sorting_asc" tabIndex="0" aria-controls="datatable-buttons" rowSpan="1" colSpan="1" style={{ width: '102px' }} aria-sort="ascending" aria-label="Name: activate to sort column descending">
                                        Account Holder Name
                                    </th>
                                    <td tabIndex="0" className="sorting_1">
                                        ABC Enterprises
                                    </td>
                                </tr>
                                <tr>

                                    <th className="sorting_asc" tabIndex="0" aria-controls="datatable-buttons" rowSpan="1" colSpan="1" style={{ width: '102px' }} aria-sort="ascending" aria-label="Name: activate to sort column descending">
                                        Account Number
                                    </th>
                                    <td tabIndex="0" className="sorting_1">
                                        XXXXXXXXXXXX123
                                    </td>
                                </tr>
                                <tr>
                                    <th className="sorting_asc" tabIndex="0" aria-controls="datatable-buttons" rowSpan="1" colSpan="1" style={{ width: '102px' }} aria-sort="ascending" aria-label="Name: activate to sort column descending">
                                        Bank IFSC
                                    </th>
                                    <td tabIndex="0" className="sorting_1">
                                        ABCDEF00093
                                    </td>
                                </tr>

                            </thead>

                        </table>

                    </div>

                </div>
            </div>

        </div>
    )


}

const UserProfileIntContent = ({ selectedTab }) => {
    console.log(selectedTab)
    return (
        <div>
            {selectedTab === 'user-det' && <PersonalInfotable />}

            {selectedTab === 'gst-det' && <GstUserDetails />}

            {selectedTab === 'bank-det' && <BankDetailsTable />}

        </div>
    )
}

export default UserProfileIntContent