import arrow from '../imgs/icon-arrow-down.svg';

export default function Navbar() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__background"></div>
        <h1 className="header__title">we are creatives</h1>
        <div className="header__arrow">
          <img src={arrow} alt="arrow icon" />
        </div>
      </div>
    </header>
  );
}
