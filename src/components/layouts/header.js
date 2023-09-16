import { React, useState } from 'react'
import '../../styles/bootstrap.min.css'
import '../../app/globals.css'
import '../../styles/dashboard.css'
import { BsBellFill, BsInfoCircle } from 'react-icons/bs';
import { FaUserCircle, FaUserAlt, FaHeadset, FaSignOutAlt } from 'react-icons/fa';
import Notifications from '../internal/notifications';
import UserProfile from '../internal/userProfile';
import { Dropdown,Badge } from 'antd';

export const Header = ({onSelect}) => {

    const handleMenuClick = (e) =>{
        onSelect(e.key);

    }


    const items = [
        {
            key: 'view-profile',
            label: 'View Profile',
            icon: <FaUserAlt />,
        },
        {
            key: 'view-policies',
            label: 'Policies',
            icon: <BsInfoCircle />,
        },
        {
            key: 'contact-us',
            label: 'Contact Us',
            icon: <FaHeadset />,
           
        },
        {
            key: 'logout',
            label:'Logout',
            icon:<FaSignOutAlt/>,
            danger:true
        }
    ];

    const [showNotification, setShowNotification] = useState(false)

    return (
        <div className="topbar">

            <div className="topbar-left	d-none d-lg-block" style={{ height: "45px" }}>
                <div className="text-center"><a
                    className="logo">
                    <img src='./xtracapneo-logo.png'
                        height="50" alt="logo" width={220} /></a></div>
            </div>
            <nav className="navbar-custom" style={{ height: "70px" }}>
                <ul className="list-inline float-right mb-0">
                    <li className="list-inline-item notification-list dropdown d-none d-sm-inline-block">
                        <div className="right-side-header" style={{ opacity: 1 }}>
                            <Badge count={2} >
                                <BsBellFill className='notif-bell-icon' onClick={() => setShowNotification(!showNotification)}/>
                            </Badge>
                            {/* <BsBellFill className='notif-bell-icon' onClick={() => setShowNotification(!showNotification)} /> */}
                            {showNotification && <Notifications />}
                            <div className='custom-parent'>
                            <Dropdown menu={{ onClick: handleMenuClick,items }} placement="top" size='large' trigger={['click']} >
                                <FaUserCircle className='notif-bell-icon' />
                            </Dropdown>

                            </div>
                           


                        </div>
                    </li>
                </ul>
                <ul className="list-inline menu-left mb-0">
                    <li className="list-inline-item">
                        {/* <button type="button"
                className="button-menu-mobile open-left waves-effect"><i
                    className="ion-navicon"></i></button> */}
                    </li>
                </ul>
                <div className="clearfix"></div>

            </nav>
        </div>
    )
}
