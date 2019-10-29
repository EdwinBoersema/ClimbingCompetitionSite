//Importing required modules
const 
    express = require("express"),
    app = express(),
    bodyParser = require("body-parser");


// starting server
const port = 3000;
app.listen(port, () => {
    console.log("server started on " + port)
});
