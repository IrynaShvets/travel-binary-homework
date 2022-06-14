import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [onSubmit, setOnSubmit] = useState(null);

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'password':
        setPassword(value);
        break;
      case 'email':
        setEmail(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(email, password);
    setEmail(email);
    setPassword(password);
  };

  return (
    <>
      <main className="sign-in-page">
        <h1 className="visually-hidden">Travel App</h1>
        <form className="sign-in-form" onSubmit={handleSubmit}>
          <h2 className="sign-in-form__title">Sign In</h2>
          <label className="trip-popup__input input">
            <span className="input__heading">Email</span>
            <input
              name="email"
              type="email"
              required
              value={email}
              onChange={handleChange}
            />
          </label>
          <label className="trip-popup__input input">
            <span className="input__heading">Password</span>
            <input
              name="password"
              type="password"
              required
              autoComplete="new-password"
              value={password}
              onChange={handleChange}
            />
          </label>
          <NavLink className="button" to="/">
            Sign In
          </NavLink>
        </form>
        <span>
          {/*   */}
          Already have an account?
          <NavLink className="sign-in-form__link" to="sing-up">
            Sign Up
          </NavLink>
        </span>
      </main>
      <Footer />
    </>
  );
}
