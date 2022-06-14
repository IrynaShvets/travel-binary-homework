import { useState, useMemo } from 'react';
import TripList from './TripList/TripList';
import Filter from '../Filter/Filter';

export default function Home({ trips }) {
  const [filter, setFilter] = useState('');

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleTrips = useMemo(() => {
    return trips.filter(trip => trip.title.toLowerCase().includes(filter));
  }, [filter, trips]);

  return (
    <>
      <main>
        <h1 className="visually-hidden">Travel App</h1>
        <section className="trips-filter">
          <h2 className="visually-hidden">Trips filter</h2>
          <form className="trips-filter__form">
            <Filter value={filter} onChange={changeFilter} />
            <label className="select">
              <span className="visually-hidden">Search by duration</span>
              <select name="duration">
                <option value="">duration</option>
                <option value="0_x_5">&lt; 5 days</option>
                <option value="5_x_10">&lt; 10 days</option>
                <option value="10_x">&ge; 10 days</option>
              </select>
            </label>
            <label className="select">
              <span className="visually-hidden">Search by level</span>
              <select name="level">
                <option value="">level</option>
                <option value="easy">easy</option>
                <option value="moderate">moderate</option>
                <option value="difficult">difficult</option>
              </select>
            </label>
          </form>
        </section>
        <section className="trips">
          <h2 className="visually-hidden">Trips List</h2>
          <TripList trips={trips} trips={getVisibleTrips} />
        </section>
      </main>
    </>
  );
}
