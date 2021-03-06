// Include middleware here

const middleware = {};

middleware.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash("error", "You have to be logged in to do that!");
    res.redirect("back");
}

module.exports = middleware;