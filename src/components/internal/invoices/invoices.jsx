import React, { useEffect, useState } from 'react';
import '../../../app/globals.css';
import '../../../styles/bootstrap.min.css';
import '../../../styles/dashboard.css';
import axios from 'axios';

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await axios.get('http://localhost:9002/invoices');
        setInvoices(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchInvoices();
  }, []);

  return (
    <div>
      <div className="content-page">
        <div className="content">
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
                        <li className="breadcrumb-item active">Invoices</li>
                      </ol>
                    </div>
                  </div>
                </div>
                <h1 className="int-heading">Invoices</h1>
                <div className="card m-b-20 card-body">
                  <div className="card-title">
                    <h2 className="font-20">Invoice Details</h2>
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
                              style={{
                                width: '300px',
                                textAlign: 'center',
                                whiteSpace: 'nowrap',
                              }}
                              aria-sort="ascending"
                              aria-label="Request Number: activate to sort column descending"
                            >
                              Request Number
                            </th>
                            <th
                              className="sorting_asc"
                              tabIndex="0"
                              aria-controls="datatable-buttons"
                              rowSpan="1"
                              colSpan="1"
                              style={{
                                width: '300px',
                                textAlign: 'center',
                                whiteSpace: 'nowrap',
                              }}
                              aria-sort="ascending"
                              aria-label="Date: activate to sort column descending"
                            >
                              Date
                            </th>
                            <th
                              className="sorting_asc"
                              tabIndex="0"
                              aria-controls="datatable-buttons"
                              rowSpan="1"
                              colSpan="1"
                              style={{
                                width: '300px',
                                textAlign: 'center',
                                whiteSpace: 'nowrap',
                              }}
                              aria-sort="ascending"
                              aria-label="UTR: activate to sort column descending"
                            >
                              UTR
                            </th>
                            <th
                              className="sorting_asc"
                              tabIndex="0"
                              aria-controls="datatable-buttons"
                              rowSpan="1"
                              colSpan="1"
                              style={{
                                width: '300px',
                                textAlign: 'center',
                                whiteSpace: 'nowrap',
                              }}
                              aria-sort="ascending"
                              aria-label="Status: activate to sort column descending"
                            >
                              Status
                            </th>
                            <th
                              className="sorting_asc"
                              tabIndex="0"
                              aria-controls="datatable-buttons"
                              rowSpan="1"
                              colSpan="1"
                              style={{
                                width: '300px',
                                textAlign: 'center',
                                whiteSpace: 'nowrap',
                              }}
                              aria-sort="ascending"
                              aria-label="Billed To: activate to sort column descending"
                            >
                              Billed To
                            </th>
                            <th
                              className="sorting_asc"
                              tabIndex="0"
                              aria-controls="datatable-buttons"
                              rowSpan="1"
                              colSpan="1"
                              style={{
                                width: '300px',
                                textAlign: 'center',
                                whiteSpace: 'nowrap',
                              }}
                              aria-sort="ascending"
                              aria-label="Amount: activate to sort column descending"
                            >
                              Amount
                            </th>
                            <th
                              className="sorting_asc"
                              tabIndex="0"
                              aria-controls="datatable-buttons"
                              rowSpan="1"
                              colSpan="1"
                              style={{
                                width: '300px',
                                textAlign: 'center',
                                whiteSpace: 'nowrap',
                              }}
                              aria-sort="ascending"
                              aria-label="GST Number: activate to sort column descending"
                            >
                              GST Number
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {invoices.map((invoice) => (
                            <tr key={invoice._id}>
                              <td style={{textAlign:"center"}}>{invoice.requestNumber}</td>
                              <td style={{textAlign:"center"}}>{invoice.invoiceDate}</td>
                              <td style={{textAlign:"center"}}>{invoice.invoiceUtrNo}</td>
                              <td style={{textAlign:"center"}}>{invoice.invoiceStatus}</td>
                              <td style={{textAlign:"center"}}>{invoice.invBilledTo}</td>
                              <td style={{textAlign:"center"}}>{invoice.amt}</td>
                              <td style={{textAlign:"center"}}>{invoice.gstNumber}</td>
                            </tr>
                          ))}
                        </tbody>
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
  );
};

export default Invoices;
