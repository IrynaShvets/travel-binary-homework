import TripDetails from '../components/TripDetails/TripDetails';
import Footer from '../components/Footer';

export default function TripPage({ trips }) {
  return (
    <>
      {trips && <TripDetails trips={trips} />}

      <Footer />
    </>
  );
}
