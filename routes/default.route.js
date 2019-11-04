const express = require("express");
const router = express.Router();

//require the controller
const default_controller = require("../controllers/default.controller");

// REGISTER ROUTE
router.get("/register", default_controller.register);

router.post("/register", default_controller.register_post);

// LOGIN ROUTE
router.get("/login", default_controller.login);

router.post("/login", default_controller.login_post);

// LOGOUT ROUTE
router.get("logout", default_controller.logout);

// DEFAULT ROUTE
router.get("/", default_controller.default);

module.exports = router;