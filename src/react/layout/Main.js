import Feature from '../components/Feature';
import img1 from '../../imgs/pc/image-transform.jpg';
import img2 from '../../imgs/pc/image-stand-out.jpg';

export default function Main() {
  return (
    <main className="main">
      <div className="main__container">
        <Feature
          isLink={true}
          img={img1}
          title="transform your brand"
          description="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
        />
        <Feature
          isPrimary={true}
          isRight={true}
          isLink={true}
          img={img2}
          title="stand out to the right audience"
          description="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. "
        />
      </div>
    </main>
  );
}
