const express = require("express");
const router = express.Router();

// Require the controller
const competition_controller = require("../controllers/competition.controller");

// testing if they're connected:
router.get("/", competition_controller.default);

module.exports = router;