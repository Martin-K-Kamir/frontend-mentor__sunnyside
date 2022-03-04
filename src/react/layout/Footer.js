import logo from '../../imgs/logo.svg';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__img-container">
          <div className="footer__img footer__img--1"></div>
          <div className="footer__img footer__img--2"></div>
          <div className="footer__img footer__img--3"></div>
          <div className="footer__img footer__img--4"></div>
        </div>
        <div className="footer__content">
          <img className="footer__logo logo" src={logo} alt="" />
          <ul className="footer__links">
            <li className="footer__link">
              <a href="foo">about</a>
            </li>
            <li className="footer__link">
              <a href="foo">services</a>
            </li>
            <li className="footer__link">
              <a href="foo">projects</a>
            </li>
          </ul>
          <div className="footer__attribution">
            <p className="footer__text">
              Challenge by{' '}
              <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">
                {' '}
                Frontend Mentor
              </a>
              . Coded&nbsp;by&nbsp;Martin&nbsp;Kamír.
            </p>
            <div className="footer__socials">
              <a className="footer__icon" href="https://martinkamir.com" target="_blank" rel="noreferrer">
                <svg
                  id="website"
                  width="32"
                  height="32"
                  viewBox="0 0 100 66"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                >
                  <path d="M13.52,40.79L2.15,60.14C1.54,61.19,2.29,62.5,3.5,62.5h22.74c1.21,0,1.96-1.31,1.35-2.36L16.22,40.79 C15.62,39.76,14.13,39.76,13.52,40.79z" />
                  <path
                    d="M61.65,58.98L61.65,58.98c-11.43,6.6-26.04,2.68-32.64-8.75L4.11,7.09C3.78,6.53,3.97,5.81,4.54,5.48l0,0
      c11.43-6.6,26.04-2.68,32.64,8.75l24.91,43.14C62.41,57.93,62.22,58.65,61.65,58.98z"
                  />
                  <path
                    d="M97.98,58.98L97.98,58.98c-11.43,6.6-26.04,2.68-32.64-8.75L40.43,7.09c-0.33-0.56-0.13-1.28,0.43-1.61l0,0
      C52.29-1.12,66.9,2.8,73.5,14.23l24.91,43.14C98.74,57.93,98.54,58.65,97.98,58.98z"
                  />
                  <g></g>
                </svg>
              </a>
              <a className="footer__icon" href="https://github.com/Martin-K-Kamir" target="_blank" rel="noreferrer">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                className="footer__icon"
                href="https://www.linkedin.com/in/martin-kam%C3%ADr-2967aa222/"
                target="_blank" rel="noreferrer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
