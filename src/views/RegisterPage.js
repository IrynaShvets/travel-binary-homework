import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [onSubmit, setOnSubmit] = useState(null);

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    if (password.length >= 3 && password.length <= 20) {
      onSubmit(email, password, name);
      setEmail(email);
      setPassword(password);
      setName(name);
    }
  };

  return (
    <>
      <main className="sign-up-page">
        <h1 className="visually-hidden">Travel App</h1>
        <form
          className="sign-up-form"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <h2 className="sign-up-form__title">Sign Up</h2>
          <label className="trip-popup__input input">
            <span className="input__heading">Full name</span>
            <input
              name="full-name"
              type="text"
              value={name}
              onChange={handleChange}
              required
            />
          </label>
          <label className="trip-popup__input input">
            <span className="input__heading">Email</span>
            <input
              name="email"
              type="email"
              value={email}
              onChange={handleChange}
              required
            />
          </label>
          <label className="trip-popup__input input">
            <span className="input__heading">Password</span>
            <input
              name="password"
              type="password"
              min="3"
              max="20"
              autoComplete="new-password"
              value={password}
              onChange={handleChange}
              required
            />
          </label>
          <button className="button" type="submit">
            Sign Up
          </button>
        </form>
        <span>
          Already have an account?
          <Link to="/sign-in" className="sign-up-form__link">
            Sign In
          </Link>
        </span>
      </main>
    </>
  );
}

