//Importing required modules
const 
    express = require("express"),
    bodyParser = require("body-parser"),
    competitions = require('./routes/competitions.route'),
    app = express();

app.use('/competitions', competitions);

// starting server
const port = 3000;
app.listen(port, () => {
    console.log("server started on " + port)
});
