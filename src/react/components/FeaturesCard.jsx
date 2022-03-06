export default function FeaturesCard(props) {
  return (
    <article className={`features__card ${props.cardModifier}`}>
      <div
        className="features__img"
        style={{ backgroundImage: `url(/images/image-${props.img})` }}
      ></div>
      <div className="features__content">
        <h2 className="features__title">{props.title}</h2>
        <p className="features__description">{props.description}</p>
        {props.isLink && (
          <a className={`features__link ${props.linkModifier}`} href="foo">
            learn more
          </a>
        )}
      </div>
    </article>
  );
}
