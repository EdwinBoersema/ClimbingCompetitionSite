const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let climberSchema = Schema({
    name: {type: String, required: true},
    gender: {type: String, required: true},
    dob: {type: Date, required: true},
    nationality: {type: String},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    scores: [
        {
            name: {type: String, required: true},
            date: {type: String, required: true},
            qual1: String,
            qual2: String,
            semi: String,
            final: String
        }
    ]
});

module.exports = mongoose.model("Climber", climberSchema);