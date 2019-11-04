const Competition = require("../models/competition.model");
const Climber = require("../models/climber.model");

// NEW
exports.new = (req, res) => {
    res.render("./competitions/new");
}

exports.create = (req, res) => {
    res.send("creating new competition...");
}

// SHOW
exports.show = (req, res) => {
    res.render("./competitions/show");
    // Competition.findById(req.params.id, (err, competition) => {
    //     if (err) {
    //         console.log(err);
    //         res.redirect("/");
    //     } else {
    //         res.render("./competitions/show", {
    //             competition: competition
    //         });
    //     }
    // });
}

// EDIT
exports.edit = (req, res) => {
    res.render("./competitions/edit");
    // Competition.findById(req.params.id, (err, competition) => {
    //     if (err) {
    //         console.log(err);
    //         res.redirect("/");
    //     } else {
    //         res.render("./competition/edit", { competition: competition });
    //     }
    // });
}

// update
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
    Competition.findByIdAndRemove(req.params.id, (err) => {
        if (err) {
            console.log(err);
            res.redirect("/");
        } else {
            console.log("Competition removed!");
            res.redirect("/")
        }
    });
}

// DEFAULT
exports.default = (req, res) => {
    res.render("./competitions/competitions")
    // Competition.find({}, (err, competitions) => {
    //     if (err) {
    //         console.log(err);
    //         res.redirect("../");
    //     } else {
    //         res.render("./competitions/competitions", {
    //             competitions: competitions
    //         });
    //     }
    // });
}
