import React, { useState } from 'react'
import { Tabs, ConfigProvider } from 'antd'
import UserProfileIntContent from './userProfileIntContent';





const UserProfileContent = () => {
    const [selectedTab , setSelectedTab] =  useState('user-det')


    const handleTabSelect = (e) => {
        setSelectedTab(e);
    }

    const tabItems = [
        {
            key: 'user-det',
            label: 'Personal details',
            children: < UserProfileIntContent selectedTab={selectedTab}/>

        },
        {
            key: 'gst-det',
            label: 'Gst Details',
            children: < UserProfileIntContent selectedTab={selectedTab}/>

        },
        {
            key: 'bank-det',
            label: 'Bank details',
            children: < UserProfileIntContent selectedTab={selectedTab}/>

        },



    ]



    return (
        <div>
            <ConfigProvider

                theme={{
                    token: {
                        colorPrimary: 'rgba(1, 0, 128, 0.9)',
                        borderRadius: 2,
                        colorBgContainer: '#ffffff',
                    },
                }}

            >


                <Tabs
                    tabPosition='top'
                    items={tabItems}
                    onTabClick={(e) => handleTabSelect(e)}
                    
                />
                
            </ConfigProvider>

        </div>
    )
}



const UserProfile = () => {
    return (
        <div >
            <div>
                <div className="content-page">
                    <div className='content'>
                        <div className="page-content-wrapper">
                            <div className="page-content-wrapper">
                                <div className="container-fluid">
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <h1 className="int-heading">User Profile</h1>
                                        <div className="float-right page-breadcrumb">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item">
                                                    <a href="#">XTRACAPNEO</a>
                                                </li>
                                                <li className="breadcrumb-item active">User Profile</li>
                                            </ol>
                                        </div>
                                    </div>
                                    {/* pass the user name as props if planning to show a welcome user text */}
                                    <UserProfileContent />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default UserProfile