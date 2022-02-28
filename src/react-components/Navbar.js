import logo from '../imgs/logo.svg';
import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShow, setisShow] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
    setisShow(true);
  }

  return (
    <nav className="nav nav-container">
      <img className="nav__logo" src={logo} alt="logo" />
      <ul className="nav__links">
        <li className="nav__link">
          <a href="#">About</a>
        </li>
        <li className="nav__link">
          <a href="#">Services</a>
        </li>
        <li className="nav__link">
          <a href="#">Projects</a>
        </li>
        <li className="nav__link--highlight">
          <a href="#">Contact</a>
        </li>
      </ul>
      <button className={`nav__hamburger ${isOpen ? 'nav__hamburger--open' : ''}`} onClick={toggle}>
        <i></i>
        <i></i>
        <i></i>
      </button>
      {isShow && (
        <ul
          className={`nav__dropdown-menu ${
            isOpen ? 'nav__dropdown-menu--open' : 'nav__dropdown-menu--hidden'
          }`}
        >
          <li className="nav__link">
            <a href="#">About</a>
          </li>
          <li className="nav__link">
            <a href="#">Services</a>
          </li>
          <li className="nav__link">
            <a href="#">Projects</a>
          </li>
          <li className="nav__link--highlight">
            <a href="#">Contact</a>
          </li>
        </ul>
      )}
      <div
        className={`nav__dropdown-overlay ${
          isOpen ? 'nav__dropdown-overlay--open' : 'nav__dropdown-overlay--hidden'
        }`}
        onClick={toggle}
      ></div>
    </nav>
  );
}
