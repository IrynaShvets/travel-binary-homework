import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';

export default function LoginPage() {
  return (
    <>
      <main className="sign-in-page">
        <h1 className="visually-hidden">Travel App</h1>
        <form className="sign-in-form">
          <h2 className="sign-in-form__title">Sign In</h2>
          <label className="trip-popup__input input">
            <span className="input__heading">Email</span>
            <input name="email" type="email" required />
          </label>
          <label className="trip-popup__input input">
            <span className="input__heading">Password</span>
            <input name="password" type="password" required />
          </label>
          <button className="button" type="submit">
            Sign In
          </button>
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
