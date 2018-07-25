const db = require("../models");

db.College
    .find({})
    .then(dbModel => {
        res.json(dbModel);
        console.log('Results return')
        });