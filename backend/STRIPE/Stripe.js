const express = require("express");
const Stripe = require("stripe");
const cors = require("cors");

const stripe = Stripe(
  "sk_test_51QAVKjB3Epo01WhmSXLuPWMwSrM1iWJZ7bWyE6KqTMluytfOBZ4MsoHsr01pgYbsyi9QVNCXoPx8E9VbCiyPbnxR00h2b9ZyPx"
); // Stripe secret key

function StripeRoute(app) {
  app.post("/create-payment-intent", async (req, res) => {
    const { amount, currency } = req.body; // get the amount and currency from the frontend

    try {
      // Create a payment intent with the specified amount and currency
      const paymentIntent = await stripe.paymentIntents.create({
        amount, // amount in cents
        currency,
      });

      res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
      console.error("Error creating payment intent:", error);
      res.status(500).json({ error: "Failed to create payment intent" });
    }
  });

  // Handle the booking data save route (Assuming you want to save the booking after payment is successful)
  app.post("/moviebooking", async (req, res) => {
    try {
      const bookingData = req.body; // Extract the booking data from request body
      // Save the booking data to your database
      // (implement your DB logic here)

      res.status(200).json({ message: "Booking saved successfully" });
    } catch (error) {
      console.error("Error saving booking:", error);
      res.status(500).json({ error: "Failed to save booking" });
    }
  });
}
module.exports = StripeRoute;
