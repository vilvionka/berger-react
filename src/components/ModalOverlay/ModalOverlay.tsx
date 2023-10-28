import React from 'react';
import PropTypes from 'prop-types';
import styles from './ModalOverlay.module.css';

interface IModalOverlayProps{
  modalClose: ()=> void;
}

function ModalOverlay({modalClose}:IModalOverlayProps):JSX.Element{

  return(
    <div className={styles.pop} onClick={modalClose}>
       <div className={styles.modal}>
        
       </div>
    </div>
  )
}


export default ModalOverlay;