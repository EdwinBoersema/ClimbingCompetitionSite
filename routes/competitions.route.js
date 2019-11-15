const express = require("express");
const router = express.Router({mergeParams: true});
const mw = require('../middleware/index');

// Require the controller
const competitions_controller = require("../controllers/competitions.controller");

// NEW ROUTE
router.get("/new", competitions_controller.new);

router.post("/new", mw.isLoggedIn, competitions_controller.new_post);

// SHOW ROUTE
router.get("/:id", competitions_controller.show);

// EDIT ROUTE
router.get("/:id/edit", mw.isLoggedIn, competitions_controller.edit);

router.put("/:id", mw.isLoggedIn, competitions_controller.update);

// DELETE ROUTE
router.delete("/:id", mw.isLoggedIn, competitions_controller.delete);

// DEFAULT ROUTE
router.get("/", competitions_controller.default);

module.exports = router;