import React, { useEffect, useState } from 'react';
import { BsArrowLeftCircle } from 'react-icons/bs';
import axios from 'axios';

const InvoiceDetails = ({ invReqNo, onBack }) => {
    const [invoiceData, setInvoiceData] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);

    const handleBackButtonClick = () => {
        onBack();
    };

    useEffect(() => {
        const fetchInvoiceData = async () => {
            try {
                const response = await axios.get(`http://localhost:9002/invoices/${invReqNo}`);
                setInvoiceData(response.data);
                // fetchImage(response.data.file);
            } catch (error) {
                console.error(error);
            }
        };

        fetchInvoiceData();
    }, [invReqNo]);

    // const fetchImage = async (file) => {
    //     try {
    //         const response = await axios.get(`http://localhost:9002/invoices/${file._id}/image`, {
    //             responseType: 'arraybuffer',
    //         });
    //         const imageData = Buffer.from(response.data, 'binary').toString('base64');
    //         const contentType = file.contentType;
    //         setImageUrl(`data:${contentType};base64,${imageData}`);
    //         console.log(imageUrl);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    if (!invoiceData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="card m-b-20 card-body">
                <div className="" style={{ textAlign: 'center', justifyContent: 'center' }}>
                    <BsArrowLeftCircle className="back-icon float-left" onClick={handleBackButtonClick} size={30} />
                    <h2 style={{ textAlign: 'center' }}>Invoice Details</h2>
                </div>
                <div className="inv-detail">
                    <div className="card-title">
                        <h2 className="font-20 text-uppercase">Buyer's Name: {invoiceData.invBilledTo}</h2>
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
                                        <th
                                            className="sorting_asc"
                                            tabIndex="0"
                                            aria-controls="datatable-buttons"
                                            rowSpan="1"
                                            colSpan="1"
                                            style={{ width: '300px' }}
                                            aria-sort="ascending"
                                            aria-label="Invoice Date: activate to sort column descending"
                                        >
                                            Invoice Date
                                        </th>
                                        <td tabIndex="0" className="sorting_1">
                                            {invoiceData.invoiceDate}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th
                                            className="sorting_asc"
                                            tabIndex="0"
                                            aria-controls="datatable-buttons"
                                            rowSpan="1"
                                            colSpan="1"
                                            style={{ width: '102px' }}
                                            aria-sort="ascending"
                                            aria-label="Leftover Amount: activate to sort column descending"
                                        >
                                            Leftover Amount
                                        </th>
                                        <td tabIndex="0" className="sorting_1 price">
                                            {/* {invoiceData.leftoverAmount} */}
                                            8000
                                        </td>
                                    </tr>
                                    <tr>
                                        <th
                                            className="sorting_asc"
                                            tabIndex="0"
                                            aria-controls="datatable-buttons"
                                            rowSpan="1"
                                            colSpan="1"
                                            style={{ width: '102px' }}
                                            aria-sort="ascending"
                                            aria-label="Disburse Amount: activate to sort column descending"
                                        >
                                            Disburse Amount
                                        </th>
                                        <td tabIndex="0" className="sorting_1 price">
                                            {invoiceData.amt}
                                        </td>
                                    </tr>
                                    <tr>
                                        <th
                                            className="sorting_asc"
                                            tabIndex="0"
                                            aria-controls="datatable-buttons"
                                            rowSpan="1"
                                            colSpan="1"
                                            style={{ width: '102px' }}
                                            aria-sort="ascending"
                                            aria-label="Disburse Date: activate to sort column descending"
                                        >
                                            Disburse Date
                                        </th>
                                        <td tabIndex="0" className="sorting_1">
                                            {invoiceData.invoiceDate}
                                        </td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div className="col-sm-12">
                            <h3>Bank Details</h3>
                            <table
                                id="datatable-buttons"
                                className="table table-striped table-bordered dt-responsive nowrap dataTable no-footer dtr-inline"
                                style={{ borderCollapse: 'collapse', borderSpacing: '0px', width: '100%' }}
                                role="grid"
                                aria-describedby="datatable-buttons_info"
                            >
                                <thead>
                                    <tr role="row">
                                        <th
                                            className="sorting_asc"
                                            tabIndex="0"
                                            aria-controls="datatable-buttons"
                                            rowSpan="1"
                                            colSpan="1"
                                            style={{ width: '300px' }}
                                            aria-sort="ascending"
                                            aria-label="UTR Reference: activate to sort column descending"
                                        >
                                            UTR Reference
                                        </th>
                                        <td tabIndex="0" className="sorting_1">
                                            {/* {invoiceData.utrReference} */}

                                        </td>
                                    </tr>
                                    <tr>
                                        <th
                                            className="sorting_asc"
                                            tabIndex="0"
                                            aria-controls="datatable-buttons"
                                            rowSpan="1"
                                            colSpan="1"
                                            style={{ width: '102px' }}
                                            aria-sort="ascending"
                                            aria-label="Account Number: activate to sort column descending"
                                        >
                                            Account Number
                                        </th>
                                        <td tabIndex="0" className="sorting_1 ">
                                            {/* {invoiceData.accountNumber} */}

                                        </td>
                                    </tr>
                                    <tr>
                                        <th
                                            className="sorting_asc"
                                            tabIndex="0"
                                            aria-controls="datatable-buttons"
                                            rowSpan="1"
                                            colSpan="1"
                                            style={{ width: '102px' }}
                                            aria-sort="ascending"
                                            aria-label="Bank IFSC: activate to sort column descending"
                                        >
                                            Bank IFSC
                                        </th>
                                        <td tabIndex="0" className="sorting_1 ">
                                            {/* {invoiceData.bankIFSC} */}

                                        </td>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                <div className="invoice-img-box" >
                    <h3>Uploaded Invoices</h3>
                    <div className="upload-square" >
                        <div style={{ border: '2px dashed grey', textAlign: '', justifyContent: 'center', padding: '30px', height: '200px' }}>
                            {/* <img src={`data:${invoiceData.file.contentType};base64,${invoiceData.file.data}`} alt="Invoice" />
                             */}
                            <img src='./Assessment Screen (2).jpg' height="100" alt="logo" />
                            {/* {imageUrl && (
                                <div>
                                    <img src={imageUrl} alt="Invoice" />
                                </div>
                            )} */}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default InvoiceDetails;
