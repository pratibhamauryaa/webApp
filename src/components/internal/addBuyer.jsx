// import '../../app/globals.css';
// import '../../styles/bootstrap.min.css';
// import '../../styles/dashboard.css';
// import { MdPersonAdd, MdSync, MdOutlineCheckCircleOutline,MdAddCircle } from 'react-icons/md';
// import React, { useState, useEffect } from 'react';
// import { Modal, Form, Button } from 'react-bootstrap';
// import axios from 'axios';

// const AddBuyerModal = ({ onCloseModal, onBuyerAdded }) => {
//     const [buyerMobileNumber, setBuyerMobileNumber] = useState('');
//     const [buyerName, setBuyerName] = useState('');
//     const [buyerGST, setBuyerGST] = useState('');
//     const [validatedBuyerName, setValidatedBuyerName] = useState('');
//     const [validating, setValidating] = useState(false);
//     const [validated, setValidated] = useState(false);
  

//     const handleValidateGST = async () => {
//         try {
//           setValidating(true);
//           const response = await axios.post('http://localhost:9002/businessname', {
//             buyerGSTNumber: buyerGST,
//           });
//           if (response.data.status === 'success') {
//             setValidatedBuyerName(response.data.businessName);
//             setValidating(false);
//             setValidated(true);
//           } else {
//             setValidatedBuyerName('');
//             console.log(response.data.message);
//           }
//         } catch (error) {
//           console.error(error);
//         }
//       };
    


//       const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//           const response = await axios.post('http://localhost:9002/buyers', {
//             buyerName,
//             businessName: 'ABCF pvt ltd',
//             mobileNumber: buyerMobileNumber,
//             buyerStatus: 'Active',
//             buyerGSTNumber: buyerGST
//           });
//           console.log(response.data);
//           alert("Buyer Added Successfully")
//           onBuyerAdded(response.data); // Pass the new buyer data to the parent component
//           handleCloseModal();
//         } catch (error) {
//           console.error(error);
//         }
//       };
    

//       const handleCloseModal = () => {
//         setBuyerMobileNumber('');
//         setBuyerName('');
//         setBuyerGST('');
//         setValidatedBuyerName('');
//         setValidated(false);
//         setValidating(false);
//         onCloseModal();
//       };
    

//   return (
//     <Modal show={true} onHide={handleCloseModal} centered>
//     <Modal.Header>
//       <Modal.Title style={{ fontWeight: "bolder" }}>ADD BUYER</Modal.Title>
//     </Modal.Header>
//     <Form onSubmit={handleSubmit}>
//       <Modal.Body>
//         <Form.Group controlId="buyerMobileNumber" style={{ marginTop: "10px" }}>
//           <Form.Label>Buyer's Mobile No.</Form.Label>
//           <Form.Control
//             type="text"
//             value={buyerMobileNumber}
//             onChange={(e) => setBuyerMobileNumber(e.target.value)}
//             required
//           />
//         </Form.Group>
//         <Form.Group controlId="buyerName" style={{ marginTop: "10px" }}>
//           <Form.Label>Buyer's Name</Form.Label>
//           <Form.Control
//             type="text"
//             value={buyerName}
//             onChange={(e) => setBuyerName(e.target.value)}
//             required
//           />
//         </Form.Group>
//         <Form.Group controlId="buyerGST" style={{ marginTop: "10px" }}>
//           <Form.Label>Buyer's GST</Form.Label>
//           <div className="input-group">
//             <Form.Control
//               type="text"
//               value={buyerGST}
//               onChange={(e) => setBuyerGST(e.target.value)}
//               required
//             />
//             <Button
//               variant="outline-success"
//               onClick={handleValidateGST}
//               disabled={validating || validated}
//             >
//               {validating ? (
//                 <MdSync spin />
//               ) : validated ? (
//                 <MdOutlineCheckCircleOutline />
//               ) : (
//                 'Validate'
//               )}
//             </Button>
//           </div>
//         </Form.Group>
//         {validatedBuyerName && (
//           <Form.Group style={{ marginTop: "10px" }}>
//             <Form.Label>User Name:</Form.Label>
//             <Form.Control
//               type="text"
//               value={validatedBuyerName}
//               disabled
//             />
//           </Form.Group>
//         )}
//       </Modal.Body>
//       <Modal.Footer>
//         <Button
//           type="submit"
//           className="adv-button add-buyer-btn"
//           style={{ width: '120px' }}
//         >
//           Add Buyer
//         </Button>
//       </Modal.Footer>
//     </Form>
//   </Modal>
//   );
// };

// export default AddBuyerModal;
