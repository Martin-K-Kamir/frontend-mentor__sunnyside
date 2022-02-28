import logo from '../imgs/logo.svg';
import React, { useState } from 'react';

export default function Navbar() {
  const [active, setActive] = useState(false);
  const [list, setList] = useState(false);

  function toggle() {
    setActive(!active);
    setList(true);
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
      <button className={`nav__hamburger ${active ? 'nav__hamburger--open' : ''}`} onClick={toggle}>
        <i></i>
        <i></i>
        <i></i>
      </button>
      {list && (
        <ul
          className={`nav__dropdown-menu ${
            active ? 'nav__dropdown-menu--open' : 'nav__dropdown-menu--hidden'
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
          active ? 'nav__dropdown-overlay--open' : 'nav__dropdown-overlay--hidden'
        }`}
        onClick={toggle}
      ></div>
    </nav>
  );
}
