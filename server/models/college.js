const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CollegeSchema = new Schema({

    doeId: {
        type: String,
        trim: true,
    },

    location : {
        lon: {
            type: String,
            trim: true,
        },
        lat: {
            type: String,
            trim: true,
        }
    },

    collegeName: {
        type: String,
        trim: true,
    },

    city: {
        type: String,
        trim: true,
    },

    state: {
        type: String,
        trim: true,
    },

    weblink: {
        type: String,
        trim: true,
    },

    phoneNum: {
        type: String,
        trim: true,
    },

    annualAveCost: {
        type: String,
        trim: true,
    },

    graduationRate: {
        type: String,
        trim: true,
    },

    popularprogram: [
        {
            type: String,
            trim: true,     
        }
    ],

    sat: {
        type: String,
        trim: true,
    },

    annualInCost: {
        type: String,
        trim: true,
    },

    annualOutCost: {
        type: String,
        trim: true,
    },

});

const College = mongoose.model("College", CollegeSchema);

module.exports = College;



