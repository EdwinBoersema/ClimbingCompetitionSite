//Importing required modules
const 
    express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");
    app = express(),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    User = require("./models/user.model");
    methodOverride = require("method-override"),
    flash = require('connect-flash');

// Importing Routers
const   competitionsRoute = require('./routes/competitions.route'),
        defaultRoute = require('./routes/default.route'),
        athletesRoute = require('./routes/athletes.route');


//Connecting to the DB
mongoose.connect("mongodb://localhost:27017/ClimbingCompetitions", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(
    () => {
      console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

// Passport configuration
app.use(require("express-session")({
    secret: "flaters",
    resave: false,
    saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// locals configuration
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

// Express configuration
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

// ==================
// ROUTES
// ==================

app.use('/competitions', competitionsRoute);
app.use('/', defaultRoute);
app.use('/athletes', athletesRoute);

// ===============
// Starting server
// ===============

const port = 3000;
app.listen(port, () => {
    console.log("server started on " + port)
});