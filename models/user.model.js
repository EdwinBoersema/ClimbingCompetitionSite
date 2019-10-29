const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

let userSchema = Schema({
    name: {type: String, required: true},
    gender: {type: String},
    dob: {type: Date},
    roles: [{type: String}],
    climber: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Climber"
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ],
    competitions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Competition"
        }
    ]
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);