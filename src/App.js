// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import AlbumList from "./component/AlbumList";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

const API_URL = "https://jsonplaceholder.typicode.com/albums";

const App = () => {
  const [albums, setAlbums] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch albums on component mount
    fetchAlbums();
  }, []);

  const fetchAlbums = async () => {
    try {
      const response = await axios.get(API_URL);
      setAlbums(response.data);
    } catch (error) {
      console.error("Error fetching albums:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      // Update the state after successful deletion
      setAlbums((prevAlbums) => prevAlbums.filter((album) => album.id !== id));
    } catch (error) {
      console.error("Error deleting album:", error);
    }
  };

  const handleUpdate = async (id, title) => {
    try {
      await axios.put(`${API_URL}/${id}`, { title });
      // Update the state after successful update
      setAlbums((prevAlbums) =>
        prevAlbums.map((album) =>
          album.id === id ? { ...album, title } : album
        )
      );
    } catch (error) {
      console.error("Error updating album:", error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredAlbums = albums.filter((album) =>
    album.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1
            style={{ textAlign: "center", color: "white", fontFamily: "math" }}
          >
            Album Collections
            <FontAwesomeIcon
              icon={faMusic}
              style={{ margin: "10px" }}
              color="#00ffff"
            />
          </h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Form.Control
            type="text"
            placeholder="Search albums"
            value={searchTerm}
            onChange={handleSearch}
            style={{ margin: "20px 0", textAlign: "center" }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <AlbumList
            albums={filteredAlbums}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        </Col>
      </Row>
    </Container>

    // <div>
    //   <h1>Album List</h1>
    //   <input
    //     type="text"
    //     placeholder="Search albums"
    //     value={searchTerm}
    //     onChange={handleSearch}
    //   />
    //   <AlbumList
    //     albums={filteredAlbums}
    //     onDelete={handleDelete}
    //     onUpdate={handleUpdate}
    //   />
    // </div>
  );
};

export default App;
