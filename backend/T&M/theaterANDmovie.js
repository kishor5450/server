const express = require("express");
const { promisePool } = require("../database");

function TheaterMovie(app) {
  app.post("/theaters-movies", async (req, res) => {
    const {
      theater_id,
      movie_id,
      theater_name,
      movie_name,
      start_date,
      end_date,
    } = req.body;

    const query = `
    INSERT INTO theaters_and_movies (theater_id, movie_id, theater_name, movie_name, start_date, end_date)
    VALUES (?, ?, ?, ?, ?, ?)`;

    try {
      await promisePool.query(query, [
        theater_id,
        movie_id,
        theater_name,
        movie_name,
        start_date,
        end_date,
      ]);
      res
        .status(201)
        .json({ message: "Theater-Movie entry added successfully" });
    } catch (error) {
      console.error("Error inserting entry:", error);
      res.status(500).json({ message: "Error inserting entry" });
    }
  });

  app.get("/theaters-movies", async (req, res) => {
    const query = "SELECT * FROM theaters_and_movies";
    try {
      const [rows] = await promisePool.query(query);
      res.status(200).json(rows);
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ message: "Error fetching data" });
    }
  });

  app.get("/theaters-movies/:theater_id/:movie_id", async (req, res) => {
    const { theater_id, movie_id } = req.params;

    const query =
      "SELECT * FROM theaters_and_movies WHERE theater_id = ? AND movie_id = ?";
    try {
      const [rows] = await promisePool.query(query, [theater_id, movie_id]);
      if (rows.length === 0) {
        return res.status(404).json({ message: "Entry not found" });
      }
      res.status(200).json(rows[0]);
    } catch (error) {
      console.error("Error fetching entry:", error);
      res.status(500).json({ message: "Error fetching entry" });
    }
  });

  app.put("/theaters-movies/:theater_id/:movie_id", async (req, res) => {
    const { theater_id, movie_id } = req.params;
    const { theater_name, movie_name, start_date, end_date } = req.body;

    const query = `
    UPDATE theaters_and_movies
    SET theater_name = ?, movie_name = ?, start_date = ?, end_date = ?
    WHERE theater_id = ? AND movie_id = ?`;

    try {
      const [results] = await promisePool.query(query, [
        theater_name,
        movie_name,
        start_date,
        end_date,
        theater_id,
        movie_id,
      ]);

      if (results.affectedRows === 0) {
        return res.status(404).json({ message: "Entry not found" });
      }

      res.status(200).json({ message: "Entry updated successfully" });
    } catch (error) {
      console.error("Error updating entry:", error);
      res.status(500).json({ message: "Error updating entry" });
    }
  });

  app.delete("/theaters-movies/:theater_id/:movie_id", async (req, res) => {
    const { theater_id, movie_id } = req.params;

    const query =
      "DELETE FROM theaters_and_movies WHERE theater_id = ? AND movie_id = ?";
    try {
      const [results] = await promisePool.query(query, [theater_id, movie_id]);

      if (results.affectedRows === 0) {
        return res.status(404).json({ message: "Entry not found" });
      }

      res.status(200).json({ message: "Entry deleted successfully" });
    } catch (error) {
      console.error("Error deleting entry:", error);
      res.status(500).json({ message: "Error deleting entry" });
    }
  });
}
module.exports = TheaterMovie;
