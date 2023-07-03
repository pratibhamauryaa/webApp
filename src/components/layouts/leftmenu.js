import React, { useState } from 'react';
import '../../styles/bootstrap.min.css'
import '../../app/globals.css'
import '../../styles/dashboard.css'
// import { useRouter } from 'next/router';
import { LuHome } from "react-icons/lu";
import { AiOutlineFundView, AiOutlineFileProtect } from "react-icons/ai";
import { TbBoxSeam, TbCoinRupee, TbUsers, TbReportMoney, TbListSearch, TbUserPlus, TbChecklist, TbFileDollar } from "react-icons/tb";




const LeftSideMenu = ({ selectedOption, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="left side-menu">
      <button type="button" className="button-menu-mobile button-menu-mobile-topbar open-left waves-effect">
        <i className="ion-close"></i>
      </button>
      <div className="left-side-logo d-block d-lg-none">
        <div className="text-center">
          <a href="index.html" className="logo">
            <img src="assets/images/logo-dark.png" height="20" alt="logo" />
          </a>
        </div>
      </div>
      <div className="sidebar-inner slimscrollleft">
        <div id="sidebar-menu">
          <ul>
            {/* <li className="menu-title">Main</li> */}
            <li>
              <a onClick={() => onSelect('home')} className={selectedOption === 'home' ? 'waves-effect' : 'waves-effect'}>
                <i className="dripicons-meter"><LuHome style={{ width: "20px", height: "40px" }} /></i>
                <span>
                  Home
                </span>
              </a>
            </li>
            <li className="has_sub" onClick={() => onSelect('product-details')}>
              <a className="waves-effect">
                <i className="dripicons-briefcase"><TbBoxSeam style={{ width: "20px", height: "40px" }} /></i>
                <span >Product Details </span>
                <span className="menu-arrow float-right">
                  <i className="mdi mdi-chevron-right"></i>
                </span>
              </a>
              <ul className="list-unstyled">
                <li>
                  <a href="ui-alerts.html">Alerts</a>
                </li>
                {/* Add other elements */}
              </ul>
            </li>
            <li className="has_sub">
              <a onClick={() => onSelect('credit')} className="waves-effect">
                <i className="dripicons-briefcase"><TbCoinRupee style={{ width: "20px", height: "40px" }} /></i>
                <span >Credit
                  {/* <span className="badge badge-success badge-pill float-right">new</span> */}
                </span>
                <span className="menu-arrow float-right">
                  <i className="mdi mdi-chevron-right"></i>
                </span>
              </a>
              <ul className="list-unstyled">
                <li>
                  <a href="ui-alerts.html">Alerts</a>
                </li>
                {/* Add other elements */}
              </ul>
            </li>
            {/* Add other menu items */}
            <li className="has_sub" >
              <a onClick={() => onSelect('assigned-buyers')} className="waves-effect">
                <i className="dripicons-briefcase"><TbUsers style={{ width: "20px", height: "40px" }} /></i>
                <span >Assigned Buyer</span>
                <span className="menu-arrow float-right">
                  <i className="mdi mdi-chevron-right"></i>
                </span>
              </a>
              <ul className="list-unstyled">
                <li>
                  <a href="ui-alerts.html">Alerts</a>
                </li>
                {/* Add other elements */}
              </ul>
            </li>
            <li className="has_sub" >
              <a onClick={() => onSelect('invoices')} className="waves-effect">
                <i className="dripicons-briefcase">
                  <TbReportMoney style={{ width: "20px", height: "40px" }} />
                  </i>
                <span >Invoices</span>

                <span className="menu-arrow float-right ">
                  <i className="mdi mdi-chevron-right dropdown-toggle has_sub" onClick={toggleDropdown}></i>
                </span>
                </a>
                {isOpen && (
                  
                  <a className='dropdown-list' onClick={() => onSelect('upload-invoices')} >
                    <span style={{paddingLeft:"40px"}}>Upload Invoices</span>
                    </a>
                
                )}
              
            </li>
            <li className="has_sub">
              <a onClick={() => onSelect('gst-analysis')} className="waves-effect">
                <i className="dripicons-briefcase"><TbListSearch style={{ width: "20px", height: "40px" }} /></i>
                <span >GST Analysis</span>
                <span className="menu-arrow float-right">
                  <i className="mdi mdi-chevron-right"></i>
                </span>
              </a>
              <ul className="list-unstyled">
                <li>
                  <a href="ui-alerts.html">Alerts</a>
                </li>
                {/* Add other elements */}
              </ul>
            </li>
            <li className="has_sub">
              <a onClick={() => onSelect('add-anchor')} className="waves-effect">
                <i className="dripicons-briefcase"><TbUserPlus style={{ width: "20px", height: "40px" }} /></i>
                <span >Add Seller </span>
                <span className="menu-arrow float-right">
                  <i className="mdi mdi-chevron-right"></i>
                </span>
              </a>
              <ul className="list-unstyled">
                <li>
                  <a href="ui-alerts.html">Alerts</a>
                </li>
                {/* Add other elements */}
              </ul>
            </li>
            <li className="has_sub">
              <a onClick={() => onSelect('anchor-list')} className="waves-effect">
                <i className="dripicons-briefcase"><TbChecklist style={{ width: "20px", height: "40px" }} /></i>
                <span >Seller List </span>
                <span className="menu-arrow float-right">
                  <i className="mdi mdi-chevron-right"></i>
                </span>
              </a>
              <ul className="list-unstyled">
                <li>
                  <a href="ui-alerts.html">Alerts</a>
                </li>
                {/* Add other elements */}
              </ul>
            </li>
            <li className="has_sub">
              <a onClick={() => onSelect('my-repayments')} className="waves-effect">
                <i className="dripicons-briefcase"><TbFileDollar style={{ width: "20px", height: "40px" }} /></i>
                <span >My Repayments </span>
                <span className="menu-arrow float-right">
                  <i className="mdi mdi-chevron-right"></i>
                </span>
              </a>
              <ul className="list-unstyled">
                <li>
                  <a href="ui-alerts.html">Alerts</a>
                </li>
                {/* Add other elements */}
              </ul>
            </li>
            <li className="has_sub">
              <a onClick={() => onSelect('view-leadger')} className="waves-effect">
                <i className="dripicons-briefcase"><AiOutlineFundView style={{ width: "20px", height: "40px" }} /></i>
                <span>View Ledger </span>
                <span className="menu-arrow float-right">
                  <i className="mdi mdi-chevron-right"></i>
                </span>
              </a>
              <ul className="list-unstyled">
                <li>
                  <a href="ui-alerts.html">Alerts</a>
                </li>
                {/* Add other elements */}
              </ul>
            </li>
            <li className="has_sub" >
              <a onClick={() => onSelect('fhc')} className="waves-effect">
                <i className="dripicons-briefcase"><AiOutlineFileProtect style={{ width: "20px", height: "40px" }} /></i>
                <span >FHC </span>
                <span className="menu-arrow float-right">
                  <i className="mdi mdi-chevron-right"></i>
                </span>
              </a>
              <ul className="list-unstyled">
                <li>
                  <a href="ui-alerts.html">Alerts</a>
                </li>
                {/* Add other elements */}
              </ul>
            </li>

          </ul>
        </div>
        <div className="clearfix"></div>
      </div>
      {/* end sidebarinner */}
    </div>
  );
};

export default LeftSideMenu;
