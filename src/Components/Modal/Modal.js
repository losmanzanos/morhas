import React from "react";
import "./Modal.css";

const Modal = (props) => {
  console.log(props.setShow);
  if (!props.show) {
    return null;
  }

  const closeModal = () => {
    props.setShow(false);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <h1>{props.title}</h1>
        <p>Purchase Price: {props.purchasePrice}</p>
        <p>Current Value: {props.currentValue}</p>
        <p>Description:</p>
      </div>
    </div>
  );
};

export default Modal;
