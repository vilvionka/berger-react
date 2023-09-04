import React, { Children, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import styles from './Modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
const modalRoot = document.getElementById("react_modals");

function Modal({ children, modalClose }) {


  useEffect(() => {
    document.addEventListener('keydown', function (e) {
      if (e.keyCode == 27) {
        modalClose();
      }
    })
    return () => {
      document.removeEventListener("keydown", function (e) {
        if (e.keyCode == 27) {
          modalClose();
        }
      })
    }
  },[])



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
  children: PropTypes.any.isRequired
}

export default Modal;

