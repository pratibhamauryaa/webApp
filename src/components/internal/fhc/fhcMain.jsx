import axios from 'axios'
import React, { useEffect, useState } from 'react'
import FhcCharts from './fhcCharts'
import { Card, Space, Badge, Button } from 'antd'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';



// fetching the fhc data from the db, storing them in the variables.





// const handleViewClick = (e) => {
//     console.log(e)




// }
// const [showFhcDetails, setShowFhcDetails] = useState('')


const CredReportComponent = () => {



    const data = [
        {
            name: "credit-score",
            uv: 6,
            pv: 25,
            fill: "red",
        },
        {
            name: "credit-score",
            uv: 25,
            pv: 25,
            fill: "#ffff",
        }
    ]


    return (
        <div >
            <Space align='center' wrap>
                <Card size='small' style={{ textAlign: 'center' }} title="CREDIT REPORT">
                    <Space className='fhc-card-body' align='center' wrap >
                        <div>
                            <RadialBarChart
                                width={200}
                                height={200}
                                cx={70}
                                cy={80}
                                innerRadius={90}
                                outerRadius={10}
                                barSize={10}
                                data={data}
                            >
                                <RadialBar
                                    minAngle={15}
                                    background
                                    clockWise
                                    dataKey="uv"
                                />


                            </RadialBarChart>
                        </div>
                        <div>
                            <Space direction='vertical' wrap className='score-board'>
                                <Space align='center' size={'large'} className='score-board-int'>
                                    <li>Score</li>
                                    <li className='pl-3'>6/25</li>
                                </Space>
                                <Space align='center' size={'large'} className='score-board-int'>
                                    <li><b>Impact</b>
                                    </li>
                                    <li><Badge count={'Low'} color='rgba(255, 0, 0, 0.554)' /></li>
                                </Space>
                                <Space align='center' size={'large'} className='score-board-int'>
                                    <li><b>Details</b></li>
                                    <li>
                                        <Button size='small' type='primary'>view</Button>

                                    </li>
                                </Space>
                            </Space>

                        </div>

                    </Space>

                </Card>





            </Space>
        </div>

    )

};


const GstReportConponent = () => {
    const data = [
        {
            name: "gst-score",
            uv: 15,
            pv: 25,
            fill: "orange",
        },
        {
            name: "gst-score",
            uv: 25,
            pv: 25,
            fill: "#ffff",
        }
    ]


    return (
        <div >
            <Space align='center' wrap>
                <Card size='small' style={{ textAlign: 'center' }} title="GST ANALYSIS">
                    <Space className='fhc-card-body' align='center' wrap>
                        <div>
                            <RadialBarChart
                                width={200}
                                height={200}
                                cx={70}
                                cy={80}
                                innerRadius={90}
                                outerRadius={10}
                                barSize={10}
                                data={data}
                            >
                                <RadialBar
                                    minAngle={15}
                                    background
                                    clockWise
                                    dataKey="uv"
                                />


                            </RadialBarChart>
                        </div>
                        <Space direction='vertical' wrap className='score-board'>
                            <Space align='center' size={'large'} className='score-board-int'>
                                <li>Score
                                </li>
                                <li className='pl-3'>15/25</li>
                            </Space>
                            <Space align='center' size={'large'} className='score-board-int'>
                                <li>Impact </li>
                                <li><Badge count={'Medium'} color='rgba(255, 166, 0, 0.586)' /></li>
                            </Space>
                            <Space align='center' size={'large'} className='score-board-int'>
                                <li>Details</li>

                                <li><Button size='small' type='primary'>view</Button></li>
                            </Space>



                        </Space>
                    </Space>

                </Card>





            </Space>
        </div>

    )

}

const BankReportConponent = () => {
    const data = [
        {
            name: "bnk-score",
            uv: 20,
            pv: 25,
            fill: "green",
        },
        {
            name: "bnk-score",
            uv: 25,
            pv: 25,
            fill: "#ffff",
        }
    ]


    return (
        <div >
            <Space align='center' wrap>
                <Card size='small' style={{ textAlign: 'center' }} title='BANK DETAILS'>
                    <Space className='fhc-card-body' align='center' wrap >
                        <div>
                            <RadialBarChart
                                width={200}
                                height={200}
                                cx={70}
                                cy={80}

                                innerRadius={90}
                                outerRadius={10}
                                barSize={10}
                                data={data}
                            >
                                <RadialBar
                                    minAngle={15}
                                    background
                                    clockWise
                                    dataKey="uv"
                                />


                            </RadialBarChart>
                        </div>
                        <Space direction='vertical' className='score-board'>
                            <Space align='center' size={'large'} className='score-board-int'>
                                <li >Score</li>
                                <li className='pl-3'> 20/25</li>
                            </Space>
                            <Space align='center' size={'large'} className='score-board-int'>
                                <li  >Impact</li>
                                <li><Badge count={'High'} color='rgba(0, 128, 0, 0.487)' /></li>
                            </Space>
                            <Space align='center' size={'large'} className='score-board-int'>
                                <li  >Details</li>

                                <li><Button size='small' type='primary' >view</Button></li>
                            </Space>



                        </Space>
                    </Space>

                </Card>
            </Space>
        </div>

    )

}


const FaqConponent = () => {
    return (
        <Card size='large' title='FAQ' >
            <p>[faq content]</p>

        </Card>
    )
}

const FhcScorecomp = () => {



    return (

        <div className=''>
            <Card>
                <div className='fhc-score-card'>
                    <Space align='center'>
                        <FhcCharts className='fhc-chart-container' />
                        <span>
                            <h3 className='text-warning'>Good Health</h3><br />
                            <p>
                                [Custom text according to the score]
                            </p>
                        </span>
                    </Space>

                </div>

            </Card>


            {/* <div>
            </div> */}
        </div>
    )

}

const FhcMain = () => {
    return (
        <div >
            <div>
                <div className="content-page">
                    <div className='content'>
                        <div className="page-content-wrapper">
                            <div className="page-content-wrapper">
                                <div className="container-fluid">
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <h1 className="int-heading">FHC SCORE</h1>
                                        <div className="float-right page-breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item">
                                                    <a href="#">XTRACAPNEO</a>
                                                </li>
                                                <li className="breadcrumb-item active">FHC Score</li>
                                            </ol>
                                        </div>
                                    </div>
                                    {/* pass the user name as props if planning to show a welcome user text */}
                                    <div className="">
                                        <FhcScorecomp />
                                    </div>
                                    <div className='mt-3 pt-3' >
                                        <Space className='all-fhc-cards' align='center' size={'large'} wrap >
                                            <CredReportComponent />
                                            <GstReportConponent />
                                            <BankReportConponent />
                                        </Space>

                                    </div>
                                    <div className='mt-3 pt-3'>
                                        <FaqConponent />
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

export default FhcMain