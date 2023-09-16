import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { MdDeleteForever } from 'react-icons/md';



const NotificationBox = () => {

    return (
        <div className='notif-box-container'>
            <Row>
                <Col>
                    <h6>Notification</h6>

                </Col>
                <Col >
                    <span class="badge badge-danger float-right">2</span>
                    
                </Col>
            </Row>
            <Row className='all-notif'>
                <Col className="notif-int-box">
                    <Row>
                        <Col className="notif-text-box" >
                            <span><b>Your Invoice is Successfully uploaded</b><br />Your Invoice is Successfully uploaded and sent for approval from shopkeeper.Your Invoice is Successfully uploaded and sent for approval from shopkeeperYour Invoice is Successfully uploaded and sent for approval from shopkeeper
                            Your Invoice is Successfully uploaded and sent for approval from shopkeeper.</span>

                        </Col>
                        <span >
                            <MdDeleteForever className="float-right del-notif" />
                        </span>
                    </Row>
                    <Row className='pt-1'>
                        <Col className="notif-text-box  " >
                            <span className='text-b'>Friday, 13:02 PM </span>

                        </Col>
                        <Col  className="text-right " >
                        <span className='text-b'>
                            20 Sept, 2023
                        </span>
                        </Col>
                        
                    </Row>


                   
                </Col>

                {/* TO be removed */}
                <Col className="notif-int-box">
                    <Row>
                        <Col className="notif-text-box" >
                            <span><b>Your Invoice is Successfully uploaded</b><br />Your Invoice is Successfully uploaded and sent for approval from shopkeeper.Your Invoice is Successfully uploaded and sent for approval from shopkeeperYour Invoice is Successfully uploaded and sent for approval from shopkeeper
                            Your Invoice is Successfully uploaded and sent for approval from shopkeeper.</span>

                        </Col>
                        <span >
                            <MdDeleteForever className="float-right del-notif" />
                        </span>
                    </Row>
                    <Row className='pt-1'>
                        <Col className="notif-text-box  " >
                            <span className='text-b'>Friday, 13:02 PM </span>

                        </Col>
                        <Col  className="text-right " >
                        <span className='text-b'>
                            20 Sept, 2023
                        </span>
                        </Col>
                        
                    </Row>


                   
                </Col>
                
            </Row>
        </div>
    )
};

const Notifications = () => {
    return (
        <div className='notif-box'>

            <NotificationBox />
        </div>
    )
}

export default Notifications