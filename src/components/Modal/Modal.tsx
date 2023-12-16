import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import styles from './Modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';



const modalRoot = document.getElementById("react_modals");

interface IModalProps{
  children:JSX.Element;
  modalClose: ()=> void;
}

function Modal({ children, modalClose }:IModalProps):JSX.Element {


  useEffect(() => {
    function closeByEscape(evt:KeyboardEvent) {
      if (evt.key === 'Escape') {
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
      <div className={styles.modal} data-cy='modal'>
        <div className={styles.close} onClick={modalClose} data-cy='close'>
          <CloseIcon type="primary" />
        </div>
        {children}
      </div>
    </>

  ), modalRoot!)
}



export default Modal;

