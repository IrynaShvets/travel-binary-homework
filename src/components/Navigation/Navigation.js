import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { MdCardTravel } from 'react-icons/md';
import { FiUser } from 'react-icons/fi';
import Loader from '../Loader/Loader';

export default function Navigation() {
  return (
    <>
      <header className="header">
        <div className="header__inner">
          <NavLink className="header__logo" to="/">
            TravelApp
          </NavLink>
          <nav className="header__nav">
            <ul className="nav-header__list">
              <li className="nav-header__item" title="Bookings">
                <NavLink className="nav-header__inner" to="/bookings">
                  <span className="visually-hidden">Bookings</span>
                  <MdCardTravel />
                </NavLink>
              </li>
              <li className="nav-header__item" title="Profile">
                <div className="nav-header__inner profile-nav" tabIndex="0">
                  <span className="visually-hidden">Profile</span>
                  <FiUser />
                  <ul className="profile-nav__list">
                    <li className="profile-nav__item profile-nav__username">
                      John Doe
                    </li>
                    <li className="profile-nav__item">
                      <NavLink
                        className="profile-nav__sign-out button"
                        to="/sing-in"
                      >
                        Sign Out
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
