import TestimonialCard from '../components/TestimonialsCard';
import dataTestimonials from '../../testimonials-data';
import { useState, useRef } from 'react';

export default function Testimonials() {
  const [count, setCount] = useState(0);
  const [countCards, setCountCards] = useState(3);
  const carousel = useRef();

  function calcCards() {
    if (3840 > window.innerWidth) setCountCards(3);
    if (1000 > window.innerWidth) setCountCards(2);
    if (600 > window.innerWidth) setCountCards(1);
  }

  const moveCarousel = delta => {
    if (!carousel.current) return;

    const width = carousel.current.offsetWidth;
    calcCards();

    if (count + delta > testimonials.length / countCards - 1) {
      setCount(0);
      carousel.current.scrollTo(0, 0);
      return;
    } else if (count + delta < 0) {
      setCount(testimonials.length / countCards - 1);
      carousel.current.scrollTo(width * testimonials.length - 1, 0);
      return;
    }

    carousel.current.scrollTo(carousel.current.scrollLeft + width * delta, 0);
    setCount(prevCount => prevCount + delta);
  };

  const testimonials = dataTestimonials.map(curTestimonial => {
    return <TestimonialCard key={curTestimonial.id} {...curTestimonial} />;
  });

  return (
    <section className="testimonials">
      <h2 data-aos="fade-up" className="testimonials__title">
        client testimonials
      </h2>
      <div className="testimonials__container" ref={carousel}>
        {testimonials}
      </div>

      <button className="testimonials__arrow-btn--left" onClick={() => moveCarousel(-1)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
      </button>
      <button className="testimonials__arrow-btn--right" onClick={() => moveCarousel(1)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-chevron-right"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </button>
    </section>
  );
}
