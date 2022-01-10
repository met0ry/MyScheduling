import React from "react";

const Modal = ({ title, setIsOpen, children }) => {
  return (
    <React.Fragment>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">{title}</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            X
          </button>
          <div className="modalContent">
            {children}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Modal;