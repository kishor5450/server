const express = require("express");
const { promisePool } = require("../database");

function ShowsRouter(app) {
  // POST: Add a new show
  // app.post("/shows", async (req, res) => {
  //   const { theater_id, show_no, start_time } = req.body;
  //   const query =
  //     "INSERT INTO shows (theater_id, show_no, start_time) VALUES (?, ?, ?)";

  //   try {
  //     const [result] = await promisePool.query(query, [
  //       theater_id,
  //       show_no,
  //       start_time,
  //     ]);
  //     res.status(201).send({ message: "Show added", showId: result.insertId });
  //   } catch (err) {
  //     res.status(500).send(err);
  //   }
  // });
  app.post("/shows", async (req, res) => {
    const { theater_id, shows } = req.body;

    if (!theater_id || !shows || !Array.isArray(shows)) {
      return res.status(400).send({ message: "Invalid request data" });
    }

    const query =
      "INSERT INTO shows (theater_id, show_no, start_time) VALUES (?, ?, ?)";

    try {
      // Iterate through the shows array and insert each show
      for (const show of shows) {
        const { show_no, start_time } = show;

        // Validate each show's data
        if (!show_no || !start_time) {
          return res.status(400).send({ message: "Invalid show data" });
        }

        // Insert the show data into the database
        const [result] = await promisePool.query(query, [
          theater_id,
          show_no,
          start_time,
        ]);
      }

      res.status(201).send({ message: "Shows added successfully" });
    } catch (err) {
      console.error("Error inserting shows:", err);
      res.status(500).send(err);
    }
  });

  // GET: Retrieve all shows
  app.get("/shows", async (req, res) => {
    const query = "SELECT * FROM shows";

    try {
      const [results] = await promisePool.query(query);
      res.status(200).json(results);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  // GET: Retrieve a show by ID
  app.get("/shows/:theater_id", async (req, res) => {
    const { theater_id } = req.params; // Get the theater_id from the request URL
    const query = "SELECT * FROM shows WHERE theater_id = ?"; // SQL query to fetch shows by theater_id

    try {
      const [result] = await promisePool.query(query, [theater_id]); // Execute query
      if (result.length === 0) {
        return res
          .status(404)
          .send({ message: "No shows found for this theater" }); // If no shows, return 404
      }
      res.status(200).json(result); // Return shows as JSON
    } catch (err) {
      res.status(500).send(err); // Handle errors
    }
  });

  app.get("/shows/:id", async (req, res) => {
    const { id } = req.params;
    const query = "SELECT * FROM shows WHERE show_id = ?";

    try {
      const [result] = await promisePool.query(query, [id]);
      if (result.length === 0) {
        return res.status(404).send({ message: "Show not found" });
      }
      res.status(200).json(result[0]);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  // PUT: Update a show by ID
  app.put("/shows/:id", async (req, res) => {
    const { id } = req.params;
    const { theater_id, show_no, start_time } = req.body;
    const query =
      "UPDATE shows SET theater_id = ?, show_no = ?, start_time = ? WHERE show_id = ?";

    try {
      const [result] = await promisePool.query(query, [
        theater_id,
        show_no,
        start_time,
        id,
      ]);
      if (result.affectedRows === 0) {
        return res.status(404).send({ message: "Show not found" });
      }
      res.status(200).send({ message: "Show updated successfully" });
    } catch (err) {
      res.status(500).send(err);
    }
  });

  // DELETE: Remove a show by ID
  app.delete("/shows/:id", async (req, res) => {
    const { id } = req.params;
    const query = "DELETE FROM shows WHERE show_id = ?";

    try {
      const [result] = await promisePool.query(query, [id]);
      if (result.affectedRows === 0) {
        return res.status(404).send({ message: "Show not found" });
      }
      res.status(200).send({ message: "Show deleted successfully" });
    } catch (err) {
      res.status(500).send(err);
    }
  });
}

module.exports = ShowsRouter;
