import * as React from "react";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faForward,
  faBackward,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import ModalComponent from "./Modal";
import { Col } from "react-bootstrap";

// Functional component representing an Album card
const Album = ({ album, onDelete, onUpdate }) => {
  return (
    <Col md={4} className="mb-4">
      {/* Card component with styling */}
      <Card
        style={{
          width: "18rem",
          backgroundColor: "black",
          color: "white",
          margin: "auto",
          boxShadow: "0px 0px 15px 5px #0ff",
        }}
      >
        {/* Album cover image */}
        <Card.Img variant="top" src={album.cover} />

        {/* Card body containing title, artist, and controls */}
        <Card.Body>
          {/* Album title */}
          <Card.Title>{album.title}</Card.Title>

          {/* Artist name */}
          <Card.Text>by Marc</Card.Text>

          {/* Playback controls */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "200px",
              height: "50px",
              backgroundColor: "#f8f9fa",
              borderRadius: "25px",
              padding: "10px",
              color: "black",
              margin: "auto",
            }}
          >
            <FontAwesomeIcon icon={faBackward} style={{ cursor: "pointer" }} />
            <FontAwesomeIcon icon={faPlay} style={{ cursor: "pointer" }} />
            <FontAwesomeIcon icon={faForward} style={{ cursor: "pointer" }} />
          </div>

          {/* Modal for editing album details */}
          <ModalComponent album={album} onUpdate={onUpdate} />

          {/* Button to delete the album */}
          <Button
            variant="danger"
            onClick={() => onDelete(album.id)}
            style={{ marginLeft: "68%", backgroundColor: "#FF3131" }}
          >
            <FontAwesomeIcon icon={faTrash} style={{ cursor: "pointer" }} />
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Album;
