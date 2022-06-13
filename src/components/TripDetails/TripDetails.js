import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader';

export default function TripDetails({ trips }) {
  return (
    <>
      <main className="trip-page">
        <h1 className="visually-hidden">Travel App</h1>
        <div className="trip">
          <img src={trips.image} className="trip__img" alt={trips.title} />
          <div className="trip__content">
            <div className="trip-info">
              <h3 className="trip-info__title">{trips.title}</h3>
              <div className="trip-info__content">
                <span className="trip-info__duration">
                  <strong>{trips.duration}</strong> days
                </span>
                <span className="trip-info__level">easy</span>
              </div>
            </div>
            <div className="trip__description">{trips.description}</div>
            <div className="trip-price">
              <span>Price</span>
              <strong className="trip-price__value">{trips.price}</strong>
            </div>
            <button type="button" className="trip__button button">
              Book a trip
            </button>
          </div>
        </div>
      </main>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
