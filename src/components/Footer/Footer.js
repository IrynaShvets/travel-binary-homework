import React from 'react';
import { AiFillHeart } from 'react-icons/ai';

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer__text">
        from{' '}
        <a className="footer__link" href="https://binary-studio.com">
          binary studio
        </a>{' '}
        with
        <span className="footer__icon">
          <AiFillHeart />
        </span>
      </span>
    </footer>
  );
}
