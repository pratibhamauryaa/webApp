import React from 'react'
import '../../styles/bootstrap.min.css'
import '../../app/globals.css'
import '../../styles/dashboard.css'



export const  Header= () => {
  return (
    <div className="topbar">
    <div className="topbar-left	d-none d-lg-block" style={{height:"45px"}}>
        <div className="text-center"><a 
            className="logo">
                <img src='./xtracapneo-logo.png'
                height="50" alt="logo" width={220}/></a></div>
    </div>
    <nav className="navbar-custom bg-card" style={{height:"70px"}}>
        {/* <ul className="list-inline float-right mb-0">
            <li className="list-inline-item notification-list dropdown d-none d-sm-inline-block">
                <form role="search" className="app-search">
                    <div className="form-group mb-0"><input type="text" className="form-control"
                        placeholder="Search.."/> <button type="submit"><i
                            className="fa fa-search"></i></button></div>
                </form>
            </li>
        </ul> */}
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
