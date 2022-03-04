export default function Main(props) {
  return (
    <article className="feature">
      <div className={`feature__container ${props.isRight ? 'feature__container--right' : ''}`}>
        <div className="feature__img" style={{ backgroundImage: `url(${props.img})` }}></div>
        <div className="feature__content">
          <h2 className="feature__title">{props.title}</h2>
          <p className="feature__description">{props.description}</p>
          {props.isLink && (
            <a
              className={`feature__link ${
                props.isPrimary ? 'feature__link--line-primary' : 'feature__link--line-secondary'
              }`}
              href="foo"
            >
              learn more
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
