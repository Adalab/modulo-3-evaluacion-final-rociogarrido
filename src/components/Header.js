import React from 'react';
import logo from '../images/logo.png';
import '../stylesheet/App.scss';

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Rick and Morty logo" />
    </header>
  );
};

export default Header;
