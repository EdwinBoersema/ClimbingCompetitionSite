const express = require("express");
const router = express.Router();

// Require the controller
const competition_controller = require("../controllers/competition.controller");

// NEW ROUTE
router.get("/new", competition_controller.new);

router.post("/new", competition_controller.create);

// SHOW ROUTE
router.get("/:id", competition_controller.show);

// EDIT ROUTE
router.get("/:id/edit", competition_controller.edit);

router.put("/:id", competition_controller.update);

// DELETE ROUTE
router.delete("/:id", competition_controller.delete);

// DEFAULT ROUTE
router.get("/", competition_controller.default);

module.exports = router;