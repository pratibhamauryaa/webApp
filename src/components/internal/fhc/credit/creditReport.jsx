import React from 'react'
import { Space, Row, Col, Card, Badge } from 'antd'
import CreditReportChart from './creditReportChart';


const CreditScoreChart = () => {

    return (
        <Card size='small' wrap>
            <CreditReportChart />

        </Card>
    )

};

const CreditIndvCard = () => {
    return (
        <Row gutter={[8, 40]}>
            <Col span={8}>
                <Card title={<h4>30.09%</h4>} size='small' extra={<Badge count={'Risky'} color='rgba(255, 166, 0, 0.586)' />} >
                    <span>
                        <p className='text-b'>Loans and Credit Utilization</p>
                        <p className='ghost'>Imapact: Medium</p>
                    </span>
                    <span className='float-right' >View Details</span>

                </Card>
            </Col>
            <Col  span={8}>
                <Card title={<h4>0</h4>} size='small' extra={<Badge count={'Excellent'} color='rgba(0, 128, 0, 0.487)' />} >
                    <span>
                        <p className='text-b' >Credit and Applications</p>
                        <p className='ghost'>Imapact: High</p>
                    </span>
                    <span className='float-right' >View Details</span>

                </Card>
            </Col>
            <Col  span={8}>
                <Card title={<h4>3</h4>} size='small' extra={<Badge count={'Risky'} color='rgba(255, 166, 0, 0.586)' />} >
                    <span>
                        <p className='text-b' >Active Accounts</p>
                        <p className='ghost'>Imapact: Medium</p>
                    </span>
                    <span className='float-right'>View Details</span>

                </Card>
            </Col>
            <Col  span={8}>
                <Card title={<h4>100%</h4>} size='small' extra={<Badge count={'Excellent'} color='rgba(0, 128, 0, 0.487)' />} >
                    <span>
                        <p className='text-b' >Timely Payments</p>
                        <p className='ghost'>Imapact: High</p>
                    </span>
                    <span className='float-right' >View Details</span>

                </Card>
            </Col>
            <Col  span={8}>
                <Card title={<h4>30.09%</h4>} size='small' extra={<Badge count={'Risky'} color='rgba(255, 166, 0, 0.586)' />} >
                    <span>
                        <p className='text-b' >Credit Utilizationn</p>
                        <p className='ghost'>Imapact: Medium</p>
                    </span>
                    <span className='float-right' >View Details</span>

                </Card>
            </Col>
            
            <Col  span={8}>
                <Card title={<h4>30.09%</h4>} size='small' extra={<Badge count={'Risky'} color='rgba(255, 166, 0, 0.586)' />} >
                    <span>
                        <p className='text-b' >Risk</p>
                        <p className='ghost'>Imapact: Medium</p>
                    </span>
                    <span className='float-right'>View Details</span>

                </Card>
            </Col>
        </Row>
    )

}



const CreditReport = () => {
    return (
        <div >
            <div>
                <div className="content-page">
                    <div className='content'>
                        <div className="page-content-wrapper">
                            <div className="page-content-wrapper">
                                <div className="container-fluid">
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <h1 className="int-heading">Credit Report Analysis</h1>
                                        <div className="float-right page-breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item">
                                                    <a href="#">XTRACAPNEO</a>
                                                </li>
                                                <li className="breadcrumb-item active">Credit Report</li>
                                            </ol>
                                        </div>
                                    </div>
                                    {/* pass the user name as props if planning to show a welcome user text */}
                                    <div className="">
                                    </div>
                                    <div className='mt-3 pt-3 all-credit-int-cards' >

                                        <CreditScoreChart />
                                        <CreditIndvCard />

                                    </div>
                                    <div className='mt-3 pt-3'>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        </div >
    )
}

export default CreditReport