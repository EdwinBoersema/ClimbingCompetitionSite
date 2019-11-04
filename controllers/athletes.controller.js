const Climber = require("../models/climber.model");

// NEW
exports.new = (req, res) => {
    res.render("./athletes/new");
}

exports.new_post = (req, res) => {
    res.send("adding new athlete...");
}

// SHOW
exports.show = (req, res) => {
    res.render("./athletes/show");
}

// EDIT
exports.edit = (req, res) => {
    res.render("./athletes/edit");
}

exports.update = (req, res) => {
    Competition.findByIdAndUpdate(req.params.id, (err, competition) => {
        if (err) {
            console.log(err);
            res.redirect("/");
        } else {
            res.redirect("/competitions/show/" + req.params.id);
        }
    });
}

// DELETE
exports.delete = (req, res) => {
    Climber.findByIdAndRemove(req.params.id, (err) => {
        if (err) {
            console.log(err);
            res.redirect("/");
        } else {
            console.log("Athlete removed!");
            res.redirect("/athletes");
        }
    });
}

// DEFAULT
exports.default = (req, res) => {
    res.render("./athletes/athletes");
}