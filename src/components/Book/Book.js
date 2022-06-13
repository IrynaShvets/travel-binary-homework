import { useState } from 'react';
import BookList from './BookList/BookList';
import book from '../book.json';

export default function Book() {
  const [bookings, setBookings] = useState(book);

  return (
    <main className="bookings-page">
      <h1 className="visually-hidden">Travel App</h1>
      {bookings && <BookList bookings={bookings} />}
    </main>
  );
}
