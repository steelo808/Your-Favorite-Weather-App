import React from 'react';
import DateTime from './DateTime';
import Logo from './images/yfwalogonb.png'

const NavBar = () => {
  return (
    <div className="navbar">
    <div className ="container nav-flex">
    <div className ="logo">
    <img src={Logo} className="logo"/>
    </div>
    <DateTime />
    </div>
    </div>
  );
}

export default NavBar;
