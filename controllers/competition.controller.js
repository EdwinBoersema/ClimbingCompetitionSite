const Competition = require("../models/competition.model");
const Climber = require("../models/climber.model");

exports.default = (req, res) => {
    res.render("competitions");
}