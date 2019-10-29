const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let climberSchema = Schema({
    name: {type: String, required: true},
    gender: {type: String, required: true},
    dob: {type: Date, required: true},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

module.exports = mongoose.model("Climber", climberSchema);