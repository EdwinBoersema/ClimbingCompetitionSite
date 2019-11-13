const express = require("express");
const router = express.Router();
const mw = require('../middleware/index');

// Require the controller
const competitions_controller = require("../controllers/competitions.controller");

// NEW ROUTE
router.get("/new", competitions_controller.new);

router.post("/new", competitions_controller.create);

// SHOW ROUTE
router.get("/:id", competitions_controller.show);

// EDIT ROUTE
router.get("/:id/edit", competitions_controller.edit);

router.put("/:id", competitions_controller.update);

// DELETE ROUTE
router.delete("/:id", competitions_controller.delete);

// DEFAULT ROUTE
router.get("/", mw.isLoggedIn, competitions_controller.default);

module.exports = router;