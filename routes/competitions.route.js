const express = require("express");
const router = express.Router();

// Require the controller
const competition_controller = require("../controllers/competition.controller");

// Show ROUTE


// NEW ROUTE


// EDIT ROUTE


// DEFAULT ROUTE
router.get("/", competition_controller.default);

module.exports = router;