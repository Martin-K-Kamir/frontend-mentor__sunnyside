import Navbar from './react/layout/Navbar';
import Header from './react/layout/Header';
import Main from './react/layout/Main';
import Footer from './react/layout/Footer';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {

    useEffect(() => {
      Aos.init({
        duration: 1000,
        once: true,
      });
    }, []);

  return (
    <div className="app-container">
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
