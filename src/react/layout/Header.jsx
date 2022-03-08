import arrow from '../../imgs/icon-arrow-down.svg';

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__background"></div>
        <h1 className="header__title">
          <span data-aos="fade-down" data-aos-delay="0">
            we
          </span>
          <span data-aos="fade-down" data-aos-delay="100">
            {' '}
            are
          </span>
          <span data-aos="fade-down" data-aos-delay="200">
            {' '}
            creatives
          </span>
        </h1>
        <a
          data-aos="fade-down"
          data-aos-delay="300"
          className="header__arrow"
          href="#features"
          aria-label="scroll down"
        >
          <img src={arrow} alt="" />
        </a>
      </div>
    </header>
  );
}
