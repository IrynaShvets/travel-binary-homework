import PropTypes from 'prop-types';

BookItem.propTypes = {
  guests: PropTypes.number.isRequired,
  trip: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
  date: PropTypes.string.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default function BookItem({
  id,
  guests,
  date,
  trip,
  totalPrice,
  
}) {
  return (
    <li className="booking" key={id}>
      <h3 className="booking__title">{trip.title}</h3>

      <span className="booking__guests">{guests} guests</span>
      <span className="booking__date">{date}</span>
      <span className="booking__total">{totalPrice} $</span>
      <button
        className="booking__cancel"
        type="button"
        title="Cancel booking"
      >
        <span className="visually-hidden">Cancel booking</span>×
      </button>
    </li>
  );
}
