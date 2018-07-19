const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CollegeSchema = new Schema({

    collegename: {
        type: String,
        trim: true,
        required: "College Name is Required"
    },

});

const College = mongoose.model("College", CollegeSchema);

module.exports = College;



