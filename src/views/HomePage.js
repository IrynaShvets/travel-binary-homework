import Footer from '../components/Footer';
import Home from '../components/Home/Home';

export default function HomePage({ trips }) {
  
  return (
    <>
      <Home trips={trips} />
      <Footer />
    </>
  );
}
