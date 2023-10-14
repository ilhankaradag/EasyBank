import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/e.png';

const Nav = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} width={'100px'} height={'50px'} alt="logo" />
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/account">Account Information</Link>
        </li>
        <li>
          <Link to="/create">Create Account</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
