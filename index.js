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

const   competitionsRoute = require('./routes/competitions.route');


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
    secret: "Puss in boots",
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
// Competition ROUTES
// ==================

app.use('/competitions', competitionsRoute);

// ==============
//Default ROUTES
// ==============

// register
app.get("/register", (req, res) => {
    res.render("./default/register");
});

app.post("/register", (req, res) => {
    res.send("registering...");
});

// login
app.get("/login", (req, res) => {
    res.render("./default/login");
});

app.post("/login", (req, res) => {
    res.send("logging in...");
});

// logout
app.get("/logout", (req, res) => {
    req.logOut();
    res.redirect("/");
});

// landing
app.get("/", (req, res) => {
    res.render("./default/landing");
});


// Starting server ==============================
const port = 3000;
app.listen(port, () => {
    console.log("server started on " + port)
});