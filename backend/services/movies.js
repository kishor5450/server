// const express = require("express");
// const { promisePool } = require("../database");

// function movieRouter(app) {
//   // Add a new movie
//   // app.post("/movies", async (req, res) => {
//   //   const { NAME, release_date } = req.body;

//   //   if (!NAME || !release_date) {
//   //     return res
//   //       .status(400)
//   //       .json({ message: "Missing required fields: NAME and release_date." });
//   //   }

//   //   const query = "INSERT INTO movies (NAME, release_date) VALUES (?, ?)";
//   //   try {
//   //     const [results] = await promisePool.query(query, [NAME, release_date]);
//   //     const newMovie = { id: results.insertId, NAME, release_date };
//   //     res.status(201).json(newMovie);
//   //     console.log("Added movie:", newMovie);
//   //   } catch (err) {
//   //     console.error("Error inserting movie:", err);
//   //     res.status(500).json({ message: "Error inserting movie" });
//   //   }
//   // });

//   app.post("/movies", async (req, res) => {
//     const movies = req.body;

//     if (!Array.isArray(movies) || movies.length === 0) {
//       return res
//         .status(400)
//         .json({ message: "Request body must be a non-empty array of movies." });
//     }

//     const query = "INSERT INTO movies (NAME, release_date) VALUES ?";
//     const values = movies.map((movie) => [movie.NAME, movie.release_date]);

//     try {
//       const [results] = await promisePool.query(query, [values]);
//       const newMovies = movies.map((movie, index) => ({
//         id: results.insertId + index,
//         NAME: movie.NAME,
//         release_date: movie.release_date,
//       }));

//       res.status(201).json(newMovies);
//       console.log("Added movies:", newMovies);
//     } catch (err) {
//       console.error("Error inserting movies:", err);
//       res.status(500).json({ message: "Error inserting movies" });
//     }
//   });

//   app.get("/movies", async (req, res) => {
//     const query = "SELECT * FROM movies";
//     try {
//       const [results] = await promisePool.query(query);
//       res.json(results);
//     } catch (err) {
//       console.error("Error fetching movies:", err);
//       res.status(500).json({ message: "Error fetching movies" });
//     }
//   });

//   app.get("/movies/:id", async (req, res) => {
//     const movieId = parseInt(req.params.id, 10);
//     if (isNaN(movieId)) {
//       return res.status(400).json({ message: "Invalid ID format" });
//     }

//     const query = "SELECT * FROM movies WHERE id = ?";
//     try {
//       const [results] = await promisePool.query(query, [movieId]);
//       if (results.length === 0) {
//         return res.status(404).json({ message: "Movie not found" });
//       }
//       res.json(results[0]);
//     } catch (err) {
//       console.error("Error fetching movie:", err);
//       res.status(500).json({ message: "Error fetching movie" });
//     }
//   });

//   app.put("/movies/:id", async (req, res) => {
//     const movieId = parseInt(req.params.id, 10);
//     const { NAME, release_date } = req.body;

//     if (!NAME && !release_date) {
//       return res.status(400).json({
//         message:
//           "At least one field (NAME or release_date) is required for update.",
//       });
//     }

//     let query = "UPDATE movies SET";
//     let queryParams = [];

//     if (NAME) {
//       query += " NAME = ?";
//       queryParams.push(NAME);
//     }
//     if (release_date) {
//       if (queryParams.length) query += ",";
//       query += " release_date = ?";
//       queryParams.push(release_date);
//     }
//     query += " WHERE id = ?";
//     queryParams.push(movieId);

//     try {
//       const [results] = await promisePool.query(query, queryParams);
//       if (results.affectedRows === 0) {
//         return res.status(404).json({ message: "Movie not found" });
//       }
//       res.status(200).json({ message: "Movie updated successfully" });
//       console.log("Movie updated:", results);
//     } catch (err) {
//       console.error("Error updating movie:", err);
//       res.status(500).json({ message: "Error updating movie" });
//     }
//   });

//   app.delete("/movies/:id", async (req, res) => {
//     const movieId = parseInt(req.params.id, 10);
//     if (isNaN(movieId)) {
//       return res.status(400).json({ message: "Invalid ID format" });
//     }

//     const query = "DELETE FROM movies WHERE id = ?";
//     try {
//       const [results] = await promisePool.query(query, [movieId]);
//       if (results.affectedRows === 0) {
//         return res.status(404).json({ message: "Movie not found" });
//       }
//       res.status(200).json({ message: "Movie deleted successfully" });
//       console.log("Movie deleted:", results);
//     } catch (err) {
//       console.error("Error deleting movie:", err);
//       res.status(500).json({ message: "Error deleting movie" });
//     }
//   });
// }

// module.exports = movieRouter;

const express = require("express");
const { promisePool } = require("../database");

function movieRouter(app) {
  // POST /movies
  app.post("/movies", async (req, res) => {
    const movies = req.body;

    if (!Array.isArray(movies) || movies.length === 0) {
      return res
        .status(400)
        .json({ message: "Request body must be a non-empty array of movies." });
    }

    const query =
      "INSERT INTO movies (NAME, release_date, poster_url) VALUES ?";
    const values = movies.map((movie) => [
      movie.NAME,
      movie.release_date,
      movie.poster_url,
    ]);

    try {
      const [results] = await promisePool.query(query, [values]);
      const newMovies = movies.map((movie, index) => ({
        id: results.insertId + index,
        NAME: movie.NAME,
        release_date: movie.release_date,
        poster_url: movie.poster_url,
      }));

      res.status(201).json(newMovies);
      console.log("Added movies:", newMovies);
    } catch (err) {
      console.error("Error inserting movies:", err);
      res.status(500).json({ message: "Error inserting movies" });
    }
  });

  // GET /movies
  app.get("/movies", async (req, res) => {
    const query = "SELECT * FROM movies";
    try {
      const [results] = await promisePool.query(query);
      res.json(results);
    } catch (err) {
      console.error("Error fetching movies:", err);
      res.status(500).json({ message: "Error fetching movies" });
    }
  });
  // app.get("/movies/:name", async (req, res) => {
  //   const movieName = req.params.name;

  //   // SQL query to fetch the movie by name
  //   const query = "SELECT * FROM movies WHERE name = ?";

  //   try {
  //     const [results] = await promisePool.query(query, [movieName]);
  //     if (results.length === 0) {
  //       return res.status(404).json({ message: "Movie not found" });
  //     }
  //     res.json(results[0]); // Return the first matching movie
  //   } catch (err) {
  //     console.error("Error fetching movie:", err);
  //     res.status(500).json({ message: "Error fetching movie" });
  //   }
  // });

  // GET /movies/:id
  app.get("/movies/:id", async (req, res) => {
    const movieId = parseInt(req.params.id, 10);
    if (isNaN(movieId)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const query = "SELECT * FROM movies WHERE id = ?";
    try {
      const [results] = await promisePool.query(query, [movieId]);
      if (results.length === 0) {
        return res.status(404).json({ message: "Movie not found" });
      }
      res.json(results[0]);
    } catch (err) {
      console.error("Error fetching movie:", err);
      res.status(500).json({ message: "Error fetching movie" });
    }
  });

  // PUT /movies/:id
  app.put("/movies/:id", async (req, res) => {
    const movieId = parseInt(req.params.id, 10);
    const { NAME, release_date, poster_url } = req.body;

    if (!NAME && !release_date && !poster_url) {
      return res.status(400).json({
        message:
          "At least one field (NAME, release_date, or poster_url) is required for update.",
      });
    }

    let query = "UPDATE movies SET";
    let queryParams = [];

    if (NAME) {
      query += " NAME = ?";
      queryParams.push(NAME);
    }
    if (release_date) {
      if (queryParams.length) query += ",";
      query += " release_date = ?";
      queryParams.push(release_date);
    }
    if (poster_url) {
      if (queryParams.length) query += ",";
      query += " poster_url = ?";
      queryParams.push(poster_url);
    }
    query += " WHERE id = ?";
    queryParams.push(movieId);

    try {
      const [results] = await promisePool.query(query, queryParams);
      if (results.affectedRows === 0) {
        return res.status(404).json({ message: "Movie not found" });
      }
      res.status(200).json({ message: "Movie updated successfully" });
      console.log("Movie updated:", results);
    } catch (err) {
      console.error("Error updating movie:", err);
      res.status(500).json({ message: "Error updating movie" });
    }
  });

  // DELETE /movies/:id
  app.delete("/movies/:id", async (req, res) => {
    const movieId = parseInt(req.params.id, 10);
    if (isNaN(movieId)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const query = "DELETE FROM movies WHERE id = ?";
    try {
      const [results] = await promisePool.query(query, [movieId]);
      if (results.affectedRows === 0) {
        return res.status(404).json({ message: "Movie not found" });
      }
      res.status(200).json({ message: "Movie deleted successfully" });
      console.log("Movie deleted:", results);
    } catch (err) {
      console.error("Error deleting movie:", err);
      res.status(500).json({ message: "Error deleting movie" });
    }
  });
}

module.exports = movieRouter;
