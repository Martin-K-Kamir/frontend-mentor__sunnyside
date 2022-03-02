import logo from '../imgs/logo.svg';
import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuShown, setisMenuShown] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
    setisMenuShown(true);
    
    if (isOpen) setTimeout(() => {
      document.querySelector('.nav__dropdown-menu').classList.add('hidden');
    }, 500);
  }

  return (
    <nav className="nav">
      <div className="nav__container">
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
        <button
          className={`nav__hamburger ${isOpen ? 'nav__hamburger--open' : ''}`}
          onClick={toggle}
        >
          <i></i>
          <i></i>
          <i></i>
        </button>
        {isMenuShown && (
          <ul
            className={`nav__dropdown-menu ${
              isOpen ? 'nav__dropdown-menu--slide-in' : 'nav__dropdown-menu--slide-out'
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
      </div>
    </nav>
  );
}
