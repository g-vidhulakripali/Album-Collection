import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

// Functional component representing a modal for editing album details
function ModalComponent({ album, onUpdate }) {
  // State for controlling the modal visibility and storing new title
  const [show, setShow] = useState(false);
  const [newTitle, setNewTitle] = useState(album.title);

  // Functions to handle modal open, close, and save
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSave = () => {
    onUpdate(album.id, newTitle); // Call the onUpdate function with updated data
    handleClose(); // Close the modal after saving changes
  };

  return (
    <>
      {/* Button to trigger modal */}
      <Button
        variant="primary"
        onClick={handleShow}
        style={{ backgroundColor: "#00ffff" }}
      >
        <FontAwesomeIcon icon={faEdit} style={{ cursor: "pointer" }} />
      </Button>

      {/* Modal component */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Album Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Input field for updating album title */}
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          {/* Close button */}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* Save changes button */}
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComponent;
