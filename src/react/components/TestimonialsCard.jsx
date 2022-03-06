export default function TestimonialsCard(props) {
  return (
    <article className="testimonials__card">
      <img className="testimonials__avatar-img" src={`./images/image-${props.avatar}`} alt="foo" />
      <p className="testimonials__message">{props.message}</p>
      <h4 className="testimonials__name">{props.name}</h4>
      <h5 className="testimonials__role">{props.role}</h5>
    </article>
  );
}
