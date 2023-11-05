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

// API URL for fetching albums
const API_URL = "https://jsonplaceholder.typicode.com/albums";

// Main App component
const App = () => {
  // State for storing albums and search term
  const [albums, setAlbums] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch albums on component mount
  useEffect(() => {
    fetchAlbums();
  }, []);

  // Function to fetch albums from the API
  const fetchAlbums = async () => {
    try {
      const response = await axios.get(API_URL);
      setAlbums(response.data);
    } catch (error) {
      console.error("Error fetching albums:", error);
    }
  };

  // Function to handle album deletion
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      // Update the state after successful deletion
      setAlbums((prevAlbums) => prevAlbums.filter((album) => album.id !== id));
    } catch (error) {
      console.error("Error deleting album:", error);
    }
  };

  // Function to handle album update
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

  // Function to handle search term change
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter albums based on search term
  const filteredAlbums = albums.filter((album) =>
    album.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // JSX structure of the component
  return (
    <Container>
      {/* Header with title and music icon */}
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

      {/* Search input */}
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

      {/* AlbumList component displaying filtered albums */}
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
  );
};

export default App;
