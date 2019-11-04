const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let climberSchema = new Schema({
    name: {type: String, required: true},
    gender: {type: String, required: true},
    dob: {type: Date, required: true},
    nationality: {type: String},
    user: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    scores: [
        {
            name: { type: String, required: true},
            qual1: {
                score: String,
                date: Date
            },
            qual2: {
                score: String,
                date: Date
            },
            semi: {
                score: String,
                date: Date
            },
            final: {
                score: String,
                date: Date
            }
        }
    ]
});

module.exports = mongoose.model("Climber", climberSchema);