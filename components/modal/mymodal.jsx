import React from "react";
// export default MyModal = ({ props, close }) => {
export default function MyModal({ show, close }) {
  // console.log("Modale", show);
  return (
    <div
      className="modal-wrapper"
      style={{
        transform: show ? "translateY(3vh)" : "translateY(0vh)",
        // opacity: show ? "1" : "0",
        display: show ? "block" : "none",
      }}
    >
      <div className="modal-header">
        <p>Welcome to Blue Pill</p>
        <span onClick={close} className="close-modal-btn">
          x
        </span>
      </div>
      <div className="modal-content">
        <div className="modal-body">
          
        </div>
        {/* <div className="modal-footer">
          <button onClick={close} className="btn-cancel">
            Close
          </button>
        </div> */}
      </div>
    </div>
  );
}
