// src/Modal.js
import React from 'react';


const Modal = ({ show, handleClose, handleConfirm }) => {
  return (
    <div className={`deletemodal ${show ? 'show' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={handleClose}>&times;</span>
        <h2>Confirm Deletion</h2>
        <p>Are you sure you want to delete this item?</p>
        <button onClick={handleConfirm}>Yes, delete it</button>
        <button onClick={handleClose}>No, cancel</button>
      </div>
    </div>
  );
};

export default Modal;
