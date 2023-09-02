import React, { Children } from 'react';
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

export default Modal;

