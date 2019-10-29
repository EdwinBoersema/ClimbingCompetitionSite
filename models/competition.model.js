const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let competitionSchema = new Schema({
    name: {type: String, required: true},
    startDate: {type: Date, required: true},
    endDate: {type: Date, required: true},
    info: {type: String},
    category: [
        {
            name: {type: String, required: true},
            gender: {type: String, required: true},
            climbers: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Climber"
                }
            ]
        }
    ]
});

module.exports = mongoose.model("Competition", competitionSchema);
