import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

TripCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  level: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

export default function TripCard({
  id,
  image,
  title,
  duration,
  level,
  price,
  onClick,
}) {
  return (
    <li className="trip-card" key={id}>
      <img className="trip__img" src={image} alt={title} />
      <div className="trip-card__content">
        <div className="trip-info">
          <h3 className="trip-info__title">{title}</h3>
          <div className="trip-info__content">
            <span className="trip-info__duration">
              <strong>{duration}</strong> days
            </span>
            <span className="trip-info__level">{level}</span>
          </div>
        </div>
        <div className="trip-price">
          <span>Price</span>
          <strong className="trip-price__value">{price}</strong>
        </div>
      </div>

      <NavLink className="button" to={`trip/${id}`}>
        Discover a trip
      </NavLink>
    </li>
  );
}
