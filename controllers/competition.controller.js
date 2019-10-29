const Competition = require("../models/competition.model");
const Climber = require("../models/climber.model");

exports.test = (req, res) => {
    res.send("hello from the test controller!");
}