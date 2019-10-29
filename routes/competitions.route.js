const express = require("express");
const router = express.Router();

// Require the controller
const competition_controller = require("../controllers/competition.controller");

// testing if they're connected:
router.get("/test", competition_controller.test);

module.exports = router;