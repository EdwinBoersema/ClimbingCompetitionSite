const Competition = require("../models/competition.model");
const Climber = require("../models/climber.model");

// NEW
exports.new = (req, res) => {
    res.render("./competitions/new");
}

exports.new_post = (req, res) => {
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

// SHOW /competitions/:id
exports.show = (req, res) => {
    Competition.findById(req.params.id).populate("Climbers").exec((err, competition) => {
        if (err) {
            console.log(err);
            res.redirect("/");
        } else {
            console.log(competition.name);
            res.render("./competitions/show", {
                competition: competition
            });
        }
    });
}

// EDIT
exports.edit = (req, res) => {
    Competition.findById(req.params.id).populate("Climbers").exec((err, competition) => {
        if (err) {
            req.flash("error", err);
            console.log(err);
            res.redirect("/");
        } else {
            res.render("./competitions/edit", { 
                competition: competition 
            });
        }
    });
}

// Update
exports.update = (req, res) => {
    let updatedComp = {
        name: req.body.name,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        info: req.body.info
    };
    console.log("update recieved");
    Competition.findByIdAndUpdate(req.params.id, updatedComp, (err, competition) => {
        if (err) {
            console.log(err);
            req.flash("error", err);
            res.redirect("/competitions");
        } else {
            console.log("update processed and redirecting to /competitions/" + req.params.id);
            req.flash("success", "Competition updated!");
            res.redirect("/competitions/" + req.params.id);
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
            req.flash("succes", "Competition removed!");
            console.log("Competition removed!");
            res.redirect("/competitions");
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
