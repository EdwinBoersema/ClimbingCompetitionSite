const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let competitionSchema = new Schema({
    name: { type: String, required: true},
    gender: {type: String, required: true},
    category: {type: String, required: true},
    first: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Climber",
    },
    second: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Climber",
    },
    Third: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Climber",
    },
    climbers: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Climber"
        }
    ]
});

module.exports = mongoose.model("Competition", competitionSchema);