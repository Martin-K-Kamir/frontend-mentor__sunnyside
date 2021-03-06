export default function TestimonialsCard(props) {
  return (
    <article data-aos="fade-up" data-aos-delay={props.delay} className="testimonials__card">
      <img className="testimonials__avatar-img" src={`./images/image-${props.avatar}`} alt="foo" />
      <p className="testimonials__message">{props.message}</p>
      <h3 className="testimonials__name">{props.name}</h3>
      <h4 className="testimonials__role">{props.role}</h4>
    </article>
  );
}
