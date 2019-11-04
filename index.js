//Importing required modules
const 
    express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");
    app = express(),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    User = require("./models/user.model");
    methodOverride = require("method-override");

const   competitionsRoute = require('./routes/competitions.route'),
        defaultRoute = require('./routes/default.route');


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
    secret: "Puss in boots never fails to land on it's feet",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Express configuration
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

// ==================
// ROUTES
// ==================

app.use('/competitions', competitionsRoute);
app.use('/', defaultRoute);

// ===============
// Starting server
// ===============

const port = 3000;
app.listen(port, () => {
    console.log("server started on " + port)
});