/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
 // Modal.jsx
import React from "react";

const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={closeModal}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
