import { useEffect } from 'react';
import FeaturesCard from '../components/FeaturesCard';
import dataFeatures from '../../features-data';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Features() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  const features = dataFeatures.map(curFeature => {
    return <FeaturesCard key={curFeature.id} {...curFeature} />;
  });
  return (
    <section id="features" className="features">
      <div className="features__container">{features}</div>
    </section>
  );
}
