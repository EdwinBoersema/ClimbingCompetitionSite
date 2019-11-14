const Competition = require("../models/competition.model");
const Climber = require("../models/climber.model");

// NEW
exports.new = (req, res) => {
    res.render("./competitions/new");
}

exports.create = (req, res) => {
    let newComp = {
        author: {
            id: req.user._id,
            username: req.user.username
        },
        name: req.body.name,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        info: req.body.info
    }
    console.log(newComp);
    Competition.create(newComp, (err, competition) => {
        if (err) {
            console.log(err);
            req.flash("error", err);
            res.redirect("/competition/new");
        } else {
            req.flash("success", newComp.name + " created");
            res.redirect("/competitions");
        }
    });
    
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
    Competition.find({}, (err, competitions) => {
        if (err) {
            console.log(err);
            res.redirect("../");
        } else {
            res.render("./competitions/competitions", {
                competitions: competitions
            });
        }
    });
}
