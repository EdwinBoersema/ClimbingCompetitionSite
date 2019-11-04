const express = require("express");
const router = express.Router();

// require the controller 
const athletes_controller = require("../controllers/athletes.controller");

// NEW ROUTE
router.get("/new", athletes_controller.new);

router.post("/new", athletes_controller.new_post);

// SHOW ROUTE
router.get("/:id", athletes_controller.show);

// EDIT ROUTE
router.get("/:id/edit", athletes_controller.edit);

router.put("/:id", athletes_controller.update);

// DELETE ROUTE
router.delete("/:id", athletes_controller.delete);

// DEFAULT ROUTE
router.get("/", athletes_controller.default);

module.exports = router;