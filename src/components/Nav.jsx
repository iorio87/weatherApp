import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/kweather.ico'
import SearchBar from './SearchBar.jsx';
import './Nav.css';


function Nav({ onSearch }) {
  return (
    <nav className="">
      <Link to='/'>
        <span className="navbar-brand">
          <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          Weather App
        </span>
      </Link>

      

      <SearchBar
        onSearch={onSearch}
      />
    </nav>
  );
};

export default Nav;
