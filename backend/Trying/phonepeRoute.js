// const { newPayment } = require("../Trying/PaymentControler");
// const express = require("express");

// router.post("/payment", newPayment);
// router.post("/status/:txnId", checkStatus);

// module.exports = router;
const express = require("express");
const { newPayment } = require("../Trying/PaymentControler"); // Import the payment controller
const router = express.Router(); // Initialize the router

// Define the route for initiating payment
router.post("/payment", newPayment);

module.exports = router; // Export the router so it can be used in the main app
