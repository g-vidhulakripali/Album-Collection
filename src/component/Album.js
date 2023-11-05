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

const Album = ({ album, onDelete, onUpdate }) => {
  return (
    <Col md={4} className="mb-4">
      <Card
        style={{
          width: "18rem",
          backgroundColor: "black",
          color: "white",
          margin: "auto",
          boxShadow: "0px 0px 15px 5px #0ff",
        }}
      >
        <Card.Img variant="top" src={album.cover} />
        <Card.Body>
          <Card.Title>{album.title}</Card.Title>
          <Card.Text>by Marc</Card.Text>
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
          <ModalComponent album={album} onUpdate={onUpdate} />
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
    // <li>
    //   {/* <Card border="info" style={{ width: "18rem" }}>
    //     <Card.Header>Marc</Card.Header>
    //     <Card.Body>
    //       <Card.Title>{album.title}</Card.Title>
    //       <Card.Text>
    //         Some quick example text to build on the card title and make up the
    //         bulk of the card's content.
    //         <ModalComponent album={album} onUpdate={onUpdate} />
    //         <Button variant="danger" onClick={() => onDelete(album.id)}>
    //           <FontAwesomeIcon icon={faTrash} style={{ cursor: "pointer" }} />
    //         </Button>
    //         {/* <button onClick={() => onDelete(album.id)}>Delete</button> */}
    //   {/* <button
    //           onClick={() => {
    //             const newTitle = prompt("Enter new title:", album.title);
    //             if (newTitle !== null) {
    //               onUpdate(album.id, newTitle);
    //             }
    //           }}
    //         >
    //           Update
    //         </button>
    //       </Card.Text>
    //     </Card.Body>
    //   </Card>
    //   */}
    //   <Card
    //     style={{ width: "18rem", backgroundColor: "black", color: "white" }}
    //   >
    //     <Card.Img variant="top" src={album.cover} />
    //     <Card.Body>
    //       <Card.Title>{album.title}</Card.Title>
    //       <Card.Text>by Marc</Card.Text>
    //       <div
    //         style={{
    //           display: "flex",
    //           justifyContent: "space-around",
    //           alignItems: "center",
    //           width: "200px",
    //           height: "50px",
    //           backgroundColor: "#f8f9fa",
    //           borderRadius: "25px",
    //           padding: "10px",
    //           color: "black",
    //         }}
    //       >
    //         <FontAwesomeIcon icon={faBackward} style={{ cursor: "pointer" }} />
    //         <FontAwesomeIcon icon={faPlay} style={{ cursor: "pointer" }} />
    //         <FontAwesomeIcon icon={faForward} style={{ cursor: "pointer" }} />
    //       </div>
    //       <ModalComponent album={album} onUpdate={onUpdate} />
    //       <Button variant="danger" onClick={() => onDelete(album.id)}>
    //         <FontAwesomeIcon icon={faTrash} style={{ cursor: "pointer" }} />
    //       </Button>
    //     </Card.Body>
    //   </Card>
    // </li>
  );
};

export default Album;
