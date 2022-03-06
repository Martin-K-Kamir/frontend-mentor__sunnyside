import logo from '../../imgs/logo.svg';
import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuShown, setisMenuShown] = useState(false);
  const [navActive, setNavActive] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
    setisMenuShown(true);

    if (isOpen)
      setTimeout(() => {
        document.querySelector('.nav__dropdown-menu').classList.add('hidden');
      }, 500);
  }

  function navScrolling() {
    if (window.scrollY >= 80) {
      setNavActive(true);
    } else {
      setNavActive(false);
    }
  }

  window.addEventListener('scroll', navScrolling);

  return (
    <nav className={navActive ? 'nav nav--active' : 'nav'}>
      <div className="nav__container">
        <a href="index.html">
          <img className="nav__logo logo" src={logo} alt="" />
        </a>
        <ul className="nav__links">
          <li className="nav__link">
            <a href="foo">About</a>
          </li>
          <li className="nav__link">
            <a href="foo">Services</a>
          </li>
          <li className="nav__link">
            <a href="foo">Projects</a>
          </li>
          <li className="nav__link--highlight">
            <a href="foo">Contact</a>
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
            className={`nav__dropdown-menu  ${
              isOpen ? 'nav__dropdown-menu--slide-in' : 'nav__dropdown-menu--slide-out'
            }`}
          >
            <li className="nav__link">
              <a href="foo">About</a>
            </li>
            <li className="nav__link">
              <a href="foo">Services</a>
            </li>
            <li className="nav__link">
              <a href="foo">Projects</a>
            </li>
            <li className="nav__link--highlight">
              <a href="foo">Contact</a>
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
