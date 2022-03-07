export default function FeaturesCard(props) {
  return (
    <article className={`features__card ${props.cardModifier}`}>
      <div
        className="features__img"
        style={{ backgroundImage: `url(/images/image-${props.img})` }}
      ></div>
      <div className="features__content">
        <h2 data-aos="fade-up" className="features__title">
          {props.title}
        </h2>
        <p data-aos="fade-up" data-aos-delay="100" className="features__description">
          {props.description}
        </p>
        {props.isLink && (
          <a
            data-aos="fade-up"
            data-aos-delay="200"
            className={`features__link ${props.linkModifier}`}
            href="foo"
          >
            learn more
          </a>
        )}
      </div>
    </article>
  );
}
