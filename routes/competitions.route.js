const express = require("express");
const router = express.Router();

// Require the controller
const competition_controller = require("../controllers/competition.controller");

// NEW ROUTE
router.post("/new", competition_controller);

// SHOW ROUTE
router.get("/:id", competition_controller.show);

// EDIT ROUTE
router.get("/:id/edit", competition_controller);

// UPDATE ROUTE
router.put("/:id", competition_controller.update);

// DELETE ROUTE
router.delete("/:id", competition_controller.delete);

// DEFAULT ROUTE
router.get("/", competition_controller.default);

module.exports = router;