const express = require("express");
const { promisePool } = require("../database");

function movieBookingRoutes(app) {
  // Add new movie booking
  // app.post("/moviebooking", async (req, res) => {
  //   const {
  //     theater_id,
  //     movie_id,
  //     theater_name,
  //     movie_name,
  //     bookingdate,
  //     seats,
  //   } = req.body;

  //   if (
  //     theater_id === undefined ||
  //     movie_id === undefined ||
  //     theater_name === undefined ||
  //     movie_name === undefined ||
  //     bookingdate === undefined ||
  //     seats === undefined
  //   ) {
  //     return res.status(400).json({
  //       message:
  //         "Missing required fields: theater_id, movie_id, theater_name, movie_name, bookingdate, and seats.",
  //     });
  //   }

  //   const query = `
  //     INSERT INTO moviebooking (theater_id, movie_id, theater_name, movie_name, bookingdate, seats)
  //     VALUES (?, ?, ?, ?, ?, ?)
  //   `;
  //   try {
  //     const [results] = await promisePool.query(query, [
  //       theater_id,
  //       movie_id,
  //       theater_name,
  //       movie_name,
  //       bookingdate,
  //       seats,
  //     ]);
  //     const newBooking = {
  //       id: results.insertId,
  //       theater_id,
  //       movie_id,
  //       theater_name,
  //       movie_name,
  //       bookingdate,
  //       seats,
  //     };
  //     res.status(201).json(newBooking);
  //     console.log("Added movie booking:", newBooking);
  //   } catch (err) {
  //     console.error("Error inserting movie booking:", err);
  //     res.status(500).json({ message: "Error inserting movie booking" });
  //   }
  // });

  app.post("/moviebooking", async (req, res) => {
    const {
      theater_id,
      movie_id,
      theater_name,
      movie_name,
      bookingdate,
      seats,
      show_time, // New field added
    } = req.body;

    // Validate required fields
    if (
      theater_id === undefined ||
      movie_id === undefined ||
      theater_name === undefined ||
      movie_name === undefined ||
      bookingdate === undefined ||
      seats === undefined ||
      show_time === undefined // Validate show_time
    ) {
      return res.status(400).json({
        message:
          "Missing required fields: theater_id, movie_id, theater_name, movie_name, bookingdate, seats, and show_time.",
      });
    }

    // SQL query to insert data, including show_time
    const query = `
      INSERT INTO moviebooking (theater_id, movie_id, theater_name, movie_name, bookingdate, seats, show_time) 
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    try {
      // Execute query with the provided parameters
      const [results] = await promisePool.query(query, [
        theater_id,
        movie_id,
        theater_name,
        movie_name,
        bookingdate,
        seats,
        show_time, // Include show_time in the query
      ]);

      const newBooking = {
        id: results.insertId,
        theater_id,
        movie_id,
        theater_name,
        movie_name,
        bookingdate,
        seats,
        show_time, // Include show_time in the response
      };

      // Send success response
      res.status(201).json(newBooking);
      console.log("Added movie booking:", newBooking);
    } catch (err) {
      // Handle any errors
      console.error("Error inserting movie booking:", err);
      res.status(500).json({ message: "Error inserting movie booking" });
    }
  });

  app.get(
    "/moviebooking/:theaterId/:movieId/:showTime/:bookingDate/",
    async (req, res) => {
      const { theaterId, movieId, showTime, bookingDate } = req.params;

      const query = `
      SELECT * FROM moviebooking 
      WHERE theater_id = ? 
      AND movie_id = ? 
      AND show_time = ?
      AND DATE(bookingdate) = DATE(?)`; // Compares only the date part

      try {
        const [results] = await promisePool.query(query, [
          theaterId,
          movieId,
          showTime,
          bookingDate,
        ]);

        if (results.length === null) {
          return res.status(404).json({
            message:
              "No bookings found for this theater, movie, showtime and date.",
          });
        }

        res.json(results);
        console.log("Fetched movie bookings:", results);
      } catch (err) {
        console.error("Error fetching movie bookings:", err);
        res.status(500).json({ message: "Error fetching movie bookings" });
      }
    }
  );

  // Get all movie bookings
  app.get("/moviebooking", async (req, res) => {
    const query = "SELECT * FROM moviebooking";
    try {
      const [results] = await promisePool.query(query);
      res.json(results);
      console.log("Fetched all movie bookings:", results);
    } catch (err) {
      console.error("Error fetching movie bookings:", err);
      res.status(500).json({ message: "Error fetching movie bookings" });
    }
  });

  // Get a specific movie booking by ID
  app.get("/moviebooking/:id", async (req, res) => {
    const bookingId = parseInt(req.params.id, 10);

    if (isNaN(bookingId)) {
      return res.status(400).json({ message: "Invalid booking ID format" });
    }

    const query = "SELECT * FROM moviebooking WHERE id = ?";
    try {
      const [results] = await promisePool.query(query, [bookingId]);
      if (results.length === 0) {
        return res.status(404).json({ message: "Movie booking not found" });
      }
      res.json(results[0]);
      console.log("Fetched movie booking:", results[0]);
    } catch (err) {
      console.error("Error fetching movie booking:", err);
      res.status(500).json({ message: "Error fetching movie booking" });
    }
  });

  // Update a movie booking by ID
  app.put("/moviebooking/:id", async (req, res) => {
    const bookingId = parseInt(req.params.id, 10);
    const {
      theater_id,
      movie_id,
      theater_name,
      movie_name,
      bookingdate,
      seats,
    } = req.body;

    if (isNaN(bookingId)) {
      return res.status(400).json({ message: "Invalid booking ID format" });
    }

    if (
      theater_id === undefined &&
      movie_id === undefined &&
      theater_name === undefined &&
      movie_name === undefined &&
      bookingdate === undefined &&
      seats === undefined
    ) {
      return res.status(400).json({
        message:
          "At least one field (theater_id, movie_id, theater_name, movie_name, bookingdate, or seats) is required for update.",
      });
    }

    let query = "UPDATE moviebooking SET";
    let queryParams = [];

    if (theater_id !== undefined) {
      query += " theater_id = ?";
      queryParams.push(theater_id);
    }
    if (movie_id !== undefined) {
      if (queryParams.length) query += ",";
      query += " movie_id = ?";
      queryParams.push(movie_id);
    }
    if (theater_name !== undefined) {
      if (queryParams.length) query += ",";
      query += " theater_name = ?";
      queryParams.push(theater_name);
    }
    if (movie_name !== undefined) {
      if (queryParams.length) query += ",";
      query += " movie_name = ?";
      queryParams.push(movie_name);
    }
    if (bookingdate !== undefined) {
      if (queryParams.length) query += ",";
      query += " bookingdate = ?";
      queryParams.push(bookingdate);
    }
    if (seats !== undefined) {
      if (queryParams.length) query += ",";
      query += " seats = ?";
      queryParams.push(seats);
    }
    query += " WHERE id = ?";
    queryParams.push(bookingId);

    try {
      const [results] = await promisePool.query(query, queryParams);
      if (results.affectedRows === 0) {
        return res.status(404).json({ message: "Movie booking not found" });
      }
      res.status(200).json({ message: "Movie booking updated successfully" });
      console.log("Updated movie booking:", results);
    } catch (err) {
      console.error("Error updating movie booking:", err);
      res.status(500).json({ message: "Error updating movie booking" });
    }
  });

  // Delete a movie booking by ID
  app.delete("/moviebooking/:id", async (req, res) => {
    const bookingId = parseInt(req.params.id, 10);

    if (isNaN(bookingId)) {
      return res.status(400).json({ message: "Invalid booking ID format" });
    }

    const query = "DELETE FROM moviebooking WHERE id = ?";
    try {
      const [results] = await promisePool.query(query, [bookingId]);
      if (results.affectedRows === 0) {
        return res.status(404).json({ message: "Movie booking not found" });
      }
      res.status(200).json({ message: "Movie booking deleted successfully" });
      console.log("Deleted movie booking:", results);
    } catch (err) {
      console.error("Error deleting movie booking:", err);
      res.status(500).json({ message: "Error deleting movie booking" });
    }
  });
}

module.exports = movieBookingRoutes;
