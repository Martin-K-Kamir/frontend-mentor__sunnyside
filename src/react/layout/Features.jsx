
import FeaturesCard from '../components/FeaturesCard';
import dataFeatures from '../../features-data';


export default function Features() {
  const features = dataFeatures.map(curFeature => {
    return <FeaturesCard key={curFeature.id} {...curFeature} />;
  });

  return (
    <section id="features" className="features">
      <div className="features__container">{features}</div>
    </section>
  );
}
