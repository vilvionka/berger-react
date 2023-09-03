import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import styles from './Modal.module.css';
const modalRoot = document.getElementById("react_modals");

function Modal({ children }) {


  return createPortal((
    <>
      <ModalOverlay />
      <div className={styles.modal}>
        {children}
      </div>
    </>

  ), modalRoot)
}

Modal.propTypes = {
  modalClose: PropTypes.any.isRequired
}

export default Modal;

