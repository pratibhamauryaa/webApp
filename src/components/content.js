import React from 'react';
import { Home } from './internal/home';
import { ProductDetails } from './internal/productDetails';
import GstAnalysis from './internal/gstAnalysis/gstAnalysis';
import AssignedBuyers from './internal/assignedBuyers';
import Credit from './internal/creditAnalysis/credit';
import Incoices from './internal/invoices/invoices';
import InvoiceUpload from './internal/invoices/uploadInvoice';
import UserProfile from './internal/userProfile';
import FhcMain from './internal/fhc/fhcMain';
import CreditReport from './internal/fhc/credit/creditReport';

const ContentArea = ({ selectedOption }) => {
  // console.log(selectedOption)
  
  return (
    <div id='wrapper' className='enlarged'>
      {/* {selectedOption === 'home' && <Home />} */}
      {selectedOption === 'product-details' && <ProductDetails />}
      {selectedOption === 'credit' && <Credit />}
      {selectedOption === 'assigned-buyers' && <AssignedBuyers />}
      {selectedOption === 'invoices' && <Incoices />}
      {selectedOption === 'gst-analysis' && <GstAnalysis />}
      {selectedOption === 'upload-invoices' && <InvoiceUpload />}
      {selectedOption === 'fhc' && <FhcMain />}
      {selectedOption === 'view-profile' && <UserProfile />}
      {selectedOption === 'home' && <CreditReport />}
    </div>
  );
};

export default ContentArea;
