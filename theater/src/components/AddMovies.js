import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Input, message } from "antd"; // added message for better feedback

const MovieManagement = () => {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState("");
  const [newMovieDate, setNewMovieDate] = useState("");

  const [editMovie, setEditMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch all movies
  const fetchMovies = async () => {
    try {
      const response = await axios.get("http://localhost:9001/movies");
      setMovies(response.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching movies:", err);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  // Add a new movie
  const addMovie = async () => {
    // Basic validation
    if (!newMovie || !newMovieDate) {
      message.error("Please provide both movie name and release date.");
      return;
    }

    const req = {
      name: newMovie.trim(), // Ensure no leading/trailing spaces
      release_date: newMovieDate,
    };

    console.log("Payload being sent:", req);

    try {
      const response = await axios.post("http://localhost:9001/movies", req);
      console.log("Movie added:", response.data);
      fetchMovies(); // Refresh the movie list after adding a new movie
      message.success("Movie added successfully!");
    } catch (err) {
      console.error("Error adding movie:", err);
      message.error("Failed to add movie. Check the input data.");
    }
  };

  return (
    <div>
      <h1>Movie Management</h1>

      {/* Add New Movie Form */}
      <div>
        <h2>Add a new movie</h2>
        <Input
          type="text"
          placeholder="Movie Name"
          value={newMovie}
          onChange={(e) => setNewMovie(e.target.value)}
        />
        <Input
          type="date"
          placeholder="Release Date"
          value={newMovieDate}
          onChange={(e) => setNewMovieDate(e.target.value)}
        />
        <Button onClick={addMovie}>Add Movie</Button>
      </div>

      {/* Movie List */}
      <h2>Movie List</h2>
      {loading ? (
        <div>Loading movies...</div>
      ) : (
        movies.map((movie) => (
          <div key={movie.id}>
            <p>
              {movie.name} - {movie.release_date}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default MovieManagement;
