import React from "react";
import Album from "./Album";
import { Container, Row } from "react-bootstrap";

const AlbumList = ({ albums, onDelete, onUpdate }) => {
  return (
    <Container>
      <Row>
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
    // <div>
    //   <ul>
    //     {albums.map((album) => (
    // <Album
    //   key={album.id}
    //   album={album}
    //   onDelete={onDelete}
    //   onUpdate={onUpdate}
    // />
    //     ))}
    //   </ul>
    // </div>
  );
};

export default AlbumList;
