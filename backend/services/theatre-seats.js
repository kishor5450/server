const express = require("express");
const { promisePool } = require("../database"); // Ensure this import is correct

function theaterseats(app) {
  // Add new theater seating configuration
  app.post("/theater_seats", async (req, res) => {
    const { theater_id, t_rows, t_columns } = req.body;

    if (
      theater_id === undefined ||
      t_rows === undefined ||
      t_columns === undefined
    ) {
      return res.status(400).json({
        message: "Missing required fields: theater_id, t_rows, and t_columns.",
      });
    }

    const query =
      "INSERT INTO theater_seats (theater_id, t_rows, t_columns) VALUES (?, ?, ?)";
    try {
      const [results] = await promisePool.query(query, [
        theater_id,
        t_rows,
        t_columns,
      ]);
      const newConfig = { id: results.insertId, theater_id, t_rows, t_columns };
      res.status(201).json(newConfig);
      console.log("Added theater seating configuration:", newConfig);
    } catch (err) {
      console.error("Error inserting theater seating configuration:", err);
      res
        .status(500)
        .json({ message: "Error inserting theater seating configuration" });
    }
  });

  app.get("/theater_seats/:theaterId", async (req, res) => {
    const theaterId = parseInt(req.params.theaterId, 10); // Change variable name to theaterId

    if (isNaN(theaterId)) {
      return res.status(400).json({ message: "Invalid theater ID format" });
    }

    const query = "SELECT * FROM theater_seats WHERE theater_id = ?"; // Change to use theater_id
    try {
      const [results] = await promisePool.query(query, [theaterId]);
      if (results.length === 0) {
        return res
          .status(404)
          .json({ message: "Theater seating configuration not found" });
      }
      res.json(results[0]); // Assuming you want to return the first matching record
      console.log("Fetched theater seating configuration:", results[0]);
    } catch (err) {
      console.error("Error fetching theater seating configuration:", err);
      res
        .status(500)
        .json({ message: "Error fetching theater seating configuration" });
    }
  });

  // Get all theater seating configurations
  app.get("/theater_seats", async (req, res) => {
    const query = "SELECT * FROM theater_seats";
    try {
      const [results] = await promisePool.query(query);
      res.json(results);
      console.log("Fetched all theater seating configurations:", results);
    } catch (err) {
      console.error("Error fetching theater seating configurations:", err);
      res
        .status(500)
        .json({ message: "Error fetching theater seating configurations" });
    }
  });

  // Get a specific theater seating configuration by ID
  app.get("/theater_seats/:id", async (req, res) => {
    const configId = parseInt(req.params.id, 10);

    if (isNaN(configId)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const query = "SELECT * FROM theater_seats WHERE id = ?";
    try {
      const [results] = await promisePool.query(query, [configId]);
      if (results.length === 0) {
        return res
          .status(404)
          .json({ message: "Theater seating configuration not found" });
      }
      res.json(results[0]);
      console.log("Fetched theater seating configuration:", results[0]);
    } catch (err) {
      console.error("Error fetching theater seating configuration:", err);
      res
        .status(500)
        .json({ message: "Error fetching theater seating configuration" });
    }
  });

  // Update a theater seating configuration by ID
  app.put("/theater_seats/:id", async (req, res) => {
    const configId = parseInt(req.params.id, 10);
    const { theater_id, t_rows, t_columns } = req.body;

    if (isNaN(configId)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    if (
      theater_id === undefined &&
      t_rows === undefined &&
      t_columns === undefined
    ) {
      return res.status(400).json({
        message:
          "At least one field (theater_id, t_rows, or t_columns) is required for update.",
      });
    }

    let query = "UPDATE theater_seats SET";
    let queryParams = [];

    if (theater_id !== undefined) {
      query += " theater_id = ?";
      queryParams.push(theater_id);
    }
    if (t_rows !== undefined) {
      if (queryParams.length) query += ",";
      query += " t_rows = ?";
      queryParams.push(t_rows);
    }
    if (t_columns !== undefined) {
      if (queryParams.length) query += ",";
      query += " t_columns = ?";
      queryParams.push(t_columns);
    }
    query += " WHERE id = ?";
    queryParams.push(configId);

    try {
      const [results] = await promisePool.query(query, queryParams);
      if (results.affectedRows === 0) {
        return res
          .status(404)
          .json({ message: "Theater seating configuration not found" });
      }
      res.status(200).json({
        message: "Theater seating configuration updated successfully",
      });
      console.log("Updated theater seating configuration:", results);
    } catch (err) {
      console.error("Error updating theater seating configuration:", err);
      res
        .status(500)
        .json({ message: "Error updating theater seating configuration" });
    }
  });

  // Delete a theater seating configuration by ID
  app.delete("/theater_seats/:id", async (req, res) => {
    const configId = parseInt(req.params.id, 10);

    if (isNaN(configId)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const query = "DELETE FROM theater_seats WHERE id = ?";
    try {
      const [results] = await promisePool.query(query, [configId]);
      if (results.affectedRows === 0) {
        return res
          .status(404)
          .json({ message: "Theater seating configuration not found" });
      }
      res.status(200).json({
        message: "Theater seating configuration deleted successfully",
      });
      console.log("Deleted theater seating configuration:", results);
    } catch (err) {
      console.error("Error deleting theater seating configuration:", err);
      res
        .status(500)
        .json({ message: "Error deleting theater seating configuration" });
    }
  });
}

module.exports = theaterseats;
