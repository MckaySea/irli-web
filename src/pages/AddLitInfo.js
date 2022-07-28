import React, { useState } from "react";
import "./addLit.css";
import Modal from "../components/Modal";
function AddLitInfo() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <h1>Litigation Cases</h1>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        ADD
      </button>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
}

export default AddLitInfo;