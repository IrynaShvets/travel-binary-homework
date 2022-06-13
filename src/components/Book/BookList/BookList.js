import React from 'react';
import PropTypes from 'prop-types';
import BookItem from '../BookList/BookItem/BookItem';

BookList.propTypes = {
  bookings: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      guests: PropTypes.number.isRequired,
      trip: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
      date: PropTypes.string.isRequired,
      totalPrice: PropTypes.number.isRequired,
    }),
  ),
  onDelete: PropTypes.func,
};

export default function BookList({ bookings }) {
  return (
    <ul className="bookings__list">
      {bookings.map(({ id, guests, date, trip, totalPrice }) => (
        <BookItem
          key={id}
          guests={guests}
          date={date}
          trip={trip}
          totalPrice={totalPrice}
        />
      ))}
    </ul>
  );
}
