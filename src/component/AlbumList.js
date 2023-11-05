import React from "react";
import Album from "./Album";
import { Container, Row } from "react-bootstrap";

// AlbumList component
const AlbumList = ({ albums, onDelete, onUpdate }) => {
  return (
    <Container>
      <Row>
        {/* Map albums array to Album components */}
        {albums.map((album) => (
          <Album
            key={album.id}
            album={album}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))}
      </Row>
    </Container>
  );
};

export default AlbumList;
