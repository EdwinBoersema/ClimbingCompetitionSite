const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema({
    name: { type: String },
    password: String,
    gender: { type: String },
    roles: [{ type: String, default: "user" }],
    climber: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Climber"
        },
        name: String
    },
    competitions: [
        {
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Competition"
            },
            name: String
        }
    ]
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);