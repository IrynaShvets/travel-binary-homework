import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const rootModal = document.querySelector('#root-modal');

function Modal({ onClose, children }) {
  const handleClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return createPortal(
    <div onClick={handleClick}>
      <div>{children}</div>
    </div>,
    rootModal,
  );
}

export default Modal;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
};
