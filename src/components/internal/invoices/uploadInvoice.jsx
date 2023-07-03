import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { MdOutlineCloudUpload ,MdFileDownloadDone} from "react-icons/md";

const InvoiceUpload = () => {
  const [gstNumber, setGstNumber] = useState('');
  const [selectedBuyer, setSelectedBuyer] = useState('');
  const [invoiceAmount, setInvoiceAmount] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  // const [showAlert, setShowAlert] = useState(false);
  const [isValidGSTNumber, setIsValidGSTNumber] = useState(true);

  const handleFileUpload = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const gstNumberPattern = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    const isValid = gstNumberPattern.test(gstNumber);
    setIsValidGSTNumber(isValid);

    if (!isValid) {
      return; 
    }

    const formData = new FormData();
    formData.append('gstNumber', gstNumber);
    formData.append('selectedBuyer', selectedBuyer);
    formData.append('invoiceAmount', invoiceAmount);
    formData.append('file', selectedFile);

    try {
      await axios.post('http://localhost:9002/invoices', {
        requestNumber: '34553',
        invoiceDate: Date,
        invoiceUtrNo: 11223344,
        invoiceStatus: 'Disbursed',
        invBilledTo: selectedBuyer,
        amt: invoiceAmount,
        gstNumber: gstNumber,

      });

      Swal.fire({
        title: 'Success',
        text: 'Invoice uploaded successfully',
        icon: 'success',
        confirmButtonText: 'OK'
      })
      // setShowAlert(true);
      setGstNumber('');
      setSelectedBuyer('');
      setInvoiceAmount('');
      setSelectedFile(null);

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
                          <li className="breadcrumb-item active">Upload Invoice</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div>
                      <h1 className="int-heading">Upload Invoice</h1>
                      <div className="card m-b-20 card-body">
                        <div className="">
                          <form onSubmit={handleSubmit} style={{ padding: "80px 80px 80px 80px" }}>
                            <div className="form-group">
                              <label htmlFor="gstNumber"  className={`form-group ${!isValidGSTNumber ? 'has-error' : ''}`} >GST Number:</label>
                              <input
                                type="text"
                                className={`form-control ${!isValidGSTNumber ? 'has-error-box' : ''}`}
                                id="gstNumber"
                                value={gstNumber}
                                onChange={(e) => setGstNumber(e.target.value)}
                                required
                                autoComplete='off'
                              />
                              {!isValidGSTNumber && <div className="help-block">Please enter a valid GST number</div>}
                            </div>
                            <div className="form-group">
                              <label htmlFor="selectedBuyer">Select Buyer:</label>
                              <select
                                className="form-control"
                                id="selectedBuyer"
                                value={selectedBuyer}
                                onChange={(e) => setSelectedBuyer(e.target.value)}
                                required
                              >
                                <option value="">Select a buyer</option>
                                <option value="buyer1">John Doe</option>
                                <option value="buyer2">Alex Benjamin</option>
                              </select>
                            </div>
                            <div className="form-group">
                              <label htmlFor="invoiceAmount">Invoice Amount:</label>
                              <input
                                type="number"
                                className="form-control"
                                id="invoiceAmount"
                                value={invoiceAmount}
                                onChange={(e) => setInvoiceAmount(e.target.value)}
                                autoComplete='off'
                                required
                              />
                            </div>
                            <div className="form-group">
                              <label>Upload Invoice:</label>
                              <div
                                className="upload-square"
                                onDragOver={handleDragOver}
                                onDrop={handleDrop}
                              >
                                {selectedFile ? (
                                  <div style={{ border: "2px dashed grey", textAlign: "center",justifyContent: "center", padding: "30px", height:"200px" }}>
                                    <i className="fa fa-file-text-o fa-3x" aria-hidden="true">
                                      <MdFileDownloadDone style={{ width: "100px", height: "100px", color: "rgba(189, 189, 189, 0.623)" }} />
                                    </i>
                                    <p>{selectedFile.name}</p>
                                  </div>
                                ) : (
                                  <div style={{ border: "2px dashed grey", textAlign: "center", justifyContent: "center", padding: "30px",height:"200px"  }}>
                                    <i className="fa fa-cloud-upload fa-3x" aria-hidden="true" >
                                      <MdOutlineCloudUpload style={{ width: "100px", height: "100px", color: "rgba(189, 189, 189, 0.623)" }} />
                                    </i>
                                    <p > Drag and drop or click to upload</p>

                                    <input
                                      onChange={handleFileUpload}
                                      required
                                      style={{ border: "none" }}
                                    />
                                  </div>
                                )}
                              </div>
                            </div>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                              <button type="submit" className="adv-button" style={{ border: "none" }}>Upload</button>

                            </div>

                          </form>
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

  );
};

export default InvoiceUpload;
