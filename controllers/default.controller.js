const    passport = require('passport'),
         User = require('../models/user.model'),
         mw = require('../middleware/index');

// DEFAULT ROUTE Controller


// register
exports.register = (req, res) => {
    res.render("./default/register");
};

exports.register_post = (req, res) => {
    if (req.body.registerToken == "flaters") {
        let newUser = new User({
            name: req.body.username,
            gender: req.body.gender
        });
        User.register(newUser, req.body.password, (err, user) => {
            if (err) {
                req.flash("error", err.message);
                console.log(err);
                return res.render("./default/register");
            }
            passport.authenticate("local")(req, res, () => {
                req.flash("success", "Welcome to the Climbing Competition Database!");
                res.redirect("/");
            });
        });
    } else {
        req.flash("error", "Invalid register token!");
        res.redirect("register");
    }
};

// login
exports.login = (req, res) => {
    res.render("./default/login");
};

exports.login_post = (req, res) => {
    res.send("logging in...");
};

// logout
exports.logout = (req, res) => {
    req.logOut();
    // req.flash("succes", "Logged out");
    res.redirect("/");
};

// landing
exports.default = (req, res) => {
    res.render("./default/landing");
};
