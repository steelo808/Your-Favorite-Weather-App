import React from 'react';
import DateTime from './DateTime';

const NavBar = () => {
  return (
    <div className="navbar">
    <div className ="container nav-flex">
    <div className ="logo">
    <h1>YFWA</h1>
    <p>your favorite weather app</p>
    </div>
    <DateTime />
    </div>
    </div>
  );
}

export default NavBar;
