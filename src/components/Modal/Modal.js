import React, { Children, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import styles from './Modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
const modalRoot = document.getElementById("react_modals");

function Modal({ children, modalClose }) {


  useEffect(() => {
    function closeByEscape(evt) {
      if(evt.key === 'Escape') {
        modalClose();
      }
    }
      document.addEventListener('keydown', closeByEscape);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
      }

  }, []) 



  return createPortal((
    <>
      <ModalOverlay modalClose={modalClose} />
      <div className={styles.modal}>
        <div className={styles.close} onClick={modalClose}>
          <CloseIcon type="primary" />
        </div>
        {children}
      </div>
    </>

  ), modalRoot)
}

Modal.propTypes = {
  children: PropTypes.any.isRequired,
  modalClose: PropTypes.func.isRequired
}

export default Modal;

