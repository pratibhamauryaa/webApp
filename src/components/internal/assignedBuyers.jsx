// import React from 'react';
import '../../app/globals.css';
import '../../styles/bootstrap.min.css';
import '../../styles/dashboard.css';
import { MdPersonAdd, MdSync, MdOutlineCheckCircleOutline,MdAddCircle } from 'react-icons/md';
import React, { useState, useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';
// import 'bootstrap/dist/css/bootstrap.min.css';

const AssignedBuyers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [buyerMobileNumber, setBuyerMobileNumber] = useState('');
  const [buyerName, setBuyerName] = useState('');
  const [buyerGST, setBuyerGST] = useState('');
  const [validatedBuyerName, setValidatedBuyerName] = useState('');
  const [validating, setValidating] = useState(false);
  const [validated, setValidated] = useState(false);
  const [buyers, setBuyers] = useState([]);
  const [expandedRows, setExpandedRows] = useState([]);
  const [isValidGSTNumber, setIsValidGSTNumber] = useState(true);

  const handleToggleRow = (index) => {
    const expandedIndex = expandedRows.indexOf(index);
    const newExpandedRows = [...expandedRows];

    if (expandedIndex === -1) {
      newExpandedRows.push(index);
    } else {
      newExpandedRows.splice(expandedIndex, 1);
    }

    setExpandedRows(newExpandedRows);
  };

  const filterBuyers = buyer => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return Object.values(buyer).some(value =>
      String(value).toLowerCase().includes(lowerCaseSearchTerm)
    );
  };

  const handleAddBuyer = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setBuyerMobileNumber('');
    setBuyerName('');
    setBuyerGST('');
    setValidatedBuyerName('');
    setValidated(false);
    setValidating(false);
  };


  // handle validate gst
  const handleValidateGST = async () => {
    const gstNumberPattern = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    const isValid = gstNumberPattern.test(buyerGST);
    setIsValidGSTNumber(isValid);

    if (!isValid) {
      return; 
    }

    try {
      setValidating(true);
      const response = await axios.post('http://localhost:9002/businessname', {
        buyerGSTNumber: buyerGST,
      });
      if (response.data.status === 'success') {
        setValidatedBuyerName(response.data.businessName);
        setValidating(false);
        setValidated(true);
      } else {
        setValidatedBuyerName('');
        console.log(response.data.message);
      }
    } catch (error) {
      setValidated(false);
      setValidating(false);
      console.error(error);
      Swal.fire({
        title: 'Error',
        text: 'Something went Wrong',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9002/buyers', {
        buyerName,
        businessName: 'ABCF pvt ltd',
        mobileNumber: buyerMobileNumber,
        buyerStatus: 'Active',
        buyerGSTNumber: buyerGST,
        disbursedAmount:34445556.00,
        totalAmountFinanced:78996656.00,
        totalInvoiceUploaded:23,
      });

      Swal.fire({
        title: 'Success',
        text: 'Invoice uploaded successfully',
        icon: 'success',
        confirmButtonText: 'OK'
      })

      handleCloseModal();
      setBuyers([...buyers, response.data]);
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: 'Error',
        text: 'Something went Wrong',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }
  };

  //fetch buyers
  useEffect(() => {
    const fetchBuyers = async () => {
      try {
        const response = await axios.get('http://localhost:9002/buyers');
        console.log(response.data);
        const sortedBuyers = response.data.reverse();
        setBuyers(sortedBuyers);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchBuyers();
  }, [buyers]);



  return (
    <div>
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
                          <li className="breadcrumb-item active">Assigned Buyers</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                  <h1 className="int-heading">Assigned Buyers</h1>
                  <div className="card m-b-20 card-body">
                    <div className="buyer-container-heading">
                      <h2 className="" style={{ fontSize: '25px' }}>
                        Buyer Details
                      </h2>
                      <div className="buyer-container">
                        <div>
                          <form role="search" className="search-box">
                            <div className="form-group mb-0">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Search.."
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                              />
                            </div>
                          </form>
                        </div>
                        <div>
                          <a
                            type="button"
                            className="adv-button add-buyer-btn"
                            onClick={handleAddBuyer}
                          >
                            <MdPersonAdd
                              style={{
                                paddingRight: '7px',
                                width: '30px',
                                height: '20px',
                                paddingBottom: '4px',
                              }}
                            />
                            Add buyer
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <table
                          id="datatable-buttons"
                          className="table table-striped table-bordered dt-responsive nowrap dataTable no-footer dtr-inline table-hover"
                          style={{ borderCollapse: 'collapse', borderSpacing: '0px', width: '100%' }}
                          role="grid"
                          aria-describedby="datatable-buttons_info" >
                          <thead>
                            <tr role="row">
                              <th
                                className="sorting_asc"
                                tabIndex="0"
                                aria-controls="datatable-buttons"
                                rowSpan="1"
                                colSpan="1"
                                style={{ width: '300px', textAlign: 'center', whiteSpace: 'nowrap' }}
                                aria-sort="ascending"
                                aria-label="Name: activate to sort column descending">
                                Buyer Name
                              </th>
                              <th
                                className="sorting_asc"
                                tabIndex="0"
                                aria-controls="datatable-buttons"
                                rowSpan="1"
                                colSpan="1"
                                style={{ width: '300px', textAlign: 'center', whiteSpace: 'nowrap' }}
                                aria-sort="ascending"
                                aria-label="Name: activate to sort column descending">
                                Business Name
                              </th>
                              <th
                                className="sorting_asc"
                                tabIndex="0"
                                aria-controls="datatable-buttons"
                                rowSpan="1"
                                colSpan="1"
                                style={{ width: '300px', textAlign: 'center', whiteSpace: 'nowrap' }}
                                aria-sort="ascending"
                                aria-label="Name: activate to sort column descending">
                                Mobile Number
                              </th>
                              <th
                                className="sorting_asc"
                                tabIndex="0"
                                aria-controls="datatable-buttons"
                                rowSpan="1"
                                colSpan="1"
                                style={{ width: '300px', textAlign: 'center', whiteSpace: 'nowrap' }}
                                aria-sort="ascending"
                                aria-label="Name: activate to sort column descending">
                                Disbursed Amount
                              </th>
                              <th
                                className="sorting_asc"
                                tabIndex="0"
                                aria-controls="datatable-buttons"
                                rowSpan="1"
                                colSpan="1"
                                style={{ width: '300px', textAlign: 'center', whiteSpace: 'nowrap' }}
                                aria-sort="ascending"
                                aria-label="Name: activate to sort column descending">
                                Total Amount Financed
                              </th>
                              <th
                                className="sorting_asc"
                                tabIndex="0"
                                aria-controls="datatable-buttons"
                                rowSpan="1"
                                colSpan="1"
                                style={{ width: '300px', textAlign: 'center', whiteSpace: 'nowrap' }}
                                aria-sort="ascending"
                                aria-label="Name: activate to sort column descending">
                                Total Invoice Uploaded
                              </th>
                              <th
                                className="sorting_asc"
                                tabIndex="0"
                                aria-controls="datatable-buttons"
                                rowSpan="1"
                                colSpan="1"
                                style={{ width: '300px', textAlign: 'center', whiteSpace: 'nowrap' }}
                                aria-sort="ascending"
                                aria-label="Name: activate to sort column descending">
                                Status
                              </th>
                              <th
                                className="sorting_asc"
                                tabIndex="0"
                                aria-controls="datatable-buttons"
                                rowSpan="1"
                                colSpan="1"
                                style={{ width: '300px', textAlign: 'center', whiteSpace: 'nowrap' }}
                                aria-sort="ascending"
                                aria-label="Name: activate to sort column descending">
                                Bank Details
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {buyers.filter(filterBuyers).map((buyer, index) => (
                              <>
                              <tr key={index}>
                                <td>{buyer.buyerName}</td>
                                <td>{buyer.businessName}</td>
                                <td>{buyer.mobileNumber}</td>
                                <td>{buyer.disbursedAmount}</td>
                                <td>{buyer.totalAmountFinanced}</td>
                                <td>{buyer.totalInvoiceUploaded}</td>
                                <td>{buyer.buyerStatus}</td>
                                <td style={{textAlign:"center"}}>
                                  <MdAddCircle className="exp-bnk-det-icon" style={{color:"#010080", width:"30px", height:"20px"}}  onClick={() => handleToggleRow(index)}/>
                                  </td>
                              </tr>
                               {expandedRows.includes(index) && (
                                <tr>
                                  <td colSpan={8}>
                                  <div className="col-sm-12">
                                    <h3>Bank Details</h3>
                                            <table
                                                className="table table-striped table-bordered dt-responsive nowrap dataTable no-footer dtr-inline table-remove-hover"
                                                style={{ borderCollapse: 'collapse', borderSpacing: '0px', width: '100%',backgroundColor:"#fff" }}
                                                role="grid"
                                                aria-describedby="datatable-buttons_inf">
                                                <thead>
                                                    <tr role="row">
                                                        <th className="sorting_asc" tabIndex="0" aria-controls="datatable-buttons" rowSpan="1" colSpan="1" style={{ width: '300px' }} aria-sort="ascending" aria-label="Name: activate to sort column descending">
                                                            Bank Name
                                                        </th>
                                                        <td tabIndex="0" className="sorting_1">
                                                            KOTAK MAHINDRA BANK
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="sorting_asc" tabIndex="0" aria-controls="datatable-buttons" rowSpan="1" colSpan="1" style={{ width: '102px' }} aria-sort="ascending" aria-label="Name: activate to sort column descending">
                                                            Account Number
                                                        </th>
                                                        <td tabIndex="0" className="sorting_1">
                                                            11111111111111
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <th className="sorting_asc" tabIndex="0" aria-controls="datatable-buttons" rowSpan="1" colSpan="1" style={{ width: '102px' }} aria-sort="ascending" aria-label="Name: activate to sort column descending">
                                                            Bank IFSC
                                                        </th>
                                                        <td tabIndex="0" className="sorting_1">
                                                            ABCCD0001
                                                        </td>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div>
                                  </td>
                                </tr>
                              )}
                              </>
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
      <Modal show={modalOpen} onHide={handleCloseModal} centered>
        <Modal.Header>
          <Modal.Title style={{ fontWeight: "bolder" }}>ADD BUYER</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <Form.Group controlId="buyerMobileNumber" style={{ marginTop: "10px" }}>
              <Form.Label>Buyer's Mobile No.</Form.Label>
              <Form.Control
                type="text"
                value={buyerMobileNumber}
                onChange={(e) => setBuyerMobileNumber(e.target.value)}
                autoComplete='off'
                required
              />
            </Form.Group>
            <Form.Group controlId="buyerName" style={{ marginTop: "10px" }}>
              <Form.Label>Buyer's Name</Form.Label>
              <Form.Control
                type="text"
                value={buyerName}
                onChange={(e) => setBuyerName(e.target.value)}
                autoComplete='off'
                required
              />
            </Form.Group>
            <Form.Group controlId="buyerGST" style={{ marginTop: "10px" }}>
              <Form.Label  className={`form-group ${!isValidGSTNumber ? 'has-error' : ''}`}>Buyer's GST</Form.Label>
              <div className="input-group" >
                <Form.Control
                  className={`form-control ${!isValidGSTNumber ? 'has-error-box' : ''}`}
                  type="text"
                  value={buyerGST}
                  onChange={(e) => setBuyerGST(e.target.value)}
                  autoComplete='off'
                  required
                />
                <Button
                  variant="outline-success"
                  onClick={handleValidateGST}
                  disabled={validating || validated}
                >
                  {validating ? (
                    <MdSync spin />
                  ) : validated ? (
                    <MdOutlineCheckCircleOutline />
                  ) : (
                    'Validate'
                  )}
                </Button>
                
              </div>
              {!isValidGSTNumber && <div className="help-block">Please enter a valid GST number</div>}

            </Form.Group>
            {validatedBuyerName && (
              <Form.Group style={{ marginTop: "10px" }}>
                <Form.Label>User Name:</Form.Label>
                <Form.Control
                  type="text"
                  value={validatedBuyerName}
                  disabled
                />
              </Form.Group>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button
              type="submit"
              className="adv-button add-buyer-btn"
              style={{ width: '120px' }}
            >
              Add Buyer
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default AssignedBuyers;
