import React from 'react';
import { Home } from './internal/home';
import { ProductDetails } from './internal/productDetails';
import GstAnalysis from './internal/gstAnalysis/gstAnalysis';
import AssignedBuyers from './internal/assignedBuyers';
import Credit from './internal/creditAnalysis/credit';
import Incoices from './internal/invoices/invoices';
import InvoiceUpload from './internal/invoices/uploadInvoice';


const ContentArea = ({ selectedOption }) => {
  console.log(selectedOption)
  return (
    <div id='wrapper' className='enlarged'>
      {selectedOption === 'home' && <div><Home/></div>}
      {selectedOption === 'product-details' && <div><ProductDetails/></div>}
      {selectedOption === 'credit' && <div> <Credit/></div>}
      {selectedOption === 'assigned-buyers' && <div> <AssignedBuyers/></div>}
      {selectedOption === 'invoices' && <div> <Incoices/></div>}
      {selectedOption === 'gst-analysis' && <div> <GstAnalysis/></div>}
      {selectedOption === 'upload-invoices' && <div> <InvoiceUpload/></div>}
    </div>
  );
};

export default ContentArea;
