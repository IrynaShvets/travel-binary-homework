import { lazy, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import travel from './travel.json';

const HomePage = lazy(() => import('./views/HomePage.js'));
const RegisterPage = lazy(() => import('./views/RegisterPage.js'));
const LoginPage = lazy(() => import('./views/LoginPage.js'));
const TripPage = lazy(() => import('./views/TripPage.js'));
const BookingsPage = lazy(() => import('./views/BookingsPage.js'));

export default function App() {
  const [trips, setTrips] = useState(travel);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<HomePage trips={trips} />} />
        <Route path="sing-up" element={<RegisterPage />} />
        <Route path="sing-in" element={<LoginPage />} />
        <Route path="trip/:tripId" element={<TripPage trips={trips} />} />
        <Route path="bookings" element={<BookingsPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
