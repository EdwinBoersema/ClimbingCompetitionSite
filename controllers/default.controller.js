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
            username: req.body.username,
            gender: req.body.gender
        });
        User.register(newUser, req.body.password, (err, user) => {
            if (err) {
                req.flash("error", err.message);
                console.log(err.message);
                res.redirect("/register");
            }
            passport.authenticate("local")(req, res, () => {
                req.flash("success", "Welcome to the Climbing Competition Database!");
                res.redirect("/");
            });
        });
    } else {
        req.flash("error", "Invalid register token!");
        res.redirect("/register");
    }
};

// login
exports.login = (req, res) => {
    res.render("./default/login");
};

exports.login_post = (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
    if (err) {
        req.flash("error", err);
        return res.redirect("/login");
    } else if (!user) {
        req.flash("error", "Invalid username or password");
        return res.redirect("/login");
    }
    req.login(user, (err) => {
        if (err) { return next(err) }
        req.flash("success", "welcome");
        return res.redirect("back");
    });
})(req, res, next)}

// logout
exports.logout = (req, res) => {
    req.logOut();
    req.flash("success", "Logged out");
    res.redirect("/");
};

// landing
exports.default = (req, res) => {
    res.render("./default/landing");
};
