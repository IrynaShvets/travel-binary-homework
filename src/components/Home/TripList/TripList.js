import React from 'react';
import PropTypes from 'prop-types';
import TripCard from '../TripList/TripCard/TripCard';

TripList.propTypes = {
  trip: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      duration: PropTypes.number.isRequired,
      level: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ),
  onClick: PropTypes.func,
};

export default function TripList({ trips, onClick }) {
  return (
    <ul className="trip-list">
      {trips.map(({ id, image, title, duration, level, price }) => (
        <TripCard
          key={id}
          image={image}
          title={title}
          duration={duration}
          level={level}
          price={price}
          onClick={onClick}
        />
      ))}
    </ul>
  );
}

