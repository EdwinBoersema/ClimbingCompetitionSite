
// DEFAULT ROUTE Controller


// register
exports.register = (req, res) => {
    res.render("./default/register");
};

exports.register_post = (req, res) => {
    res.send("registering...");
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
    req.flash("succes", "Logged out");
    res.redirect("/");
};

// landing
exports.default = (req, res) => {
    res.render("./default/landing");
};
