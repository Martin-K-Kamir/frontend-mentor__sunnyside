import arrow from '../../imgs/icon-arrow-down.svg';

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__background"></div>
        <h1 className="header__title">we are creatives</h1>
        <a className="header__arrow" href="#features">
          <img src={arrow} alt="" />
        </a>
      </div>
    </header>
  );
}
