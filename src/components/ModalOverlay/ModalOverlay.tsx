import React from 'react';
import PropTypes from 'prop-types';
import styles from './ModalOverlay.module.css';

function ModalOverlay({modalClose}){

  return(
    <div className={styles.pop} onClick={modalClose}>
       <div className={styles.modal}>
        
       </div>
    </div>
  )
}

ModalOverlay.propTypes = {
  modalClose: PropTypes.func.isRequired
}
export default ModalOverlay;