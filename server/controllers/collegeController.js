
const db = require("../models");

module.exports = {

    findAll: function (req, res) {
        db.College
            .find({},
                { _id: 1, collegeName: 1, state: 1, weblink: 1, sat: 1, annualAveCost: 1 }
            )
            .then(dbModel => res.json({
                dbModel
            }))
            .catch(err => res.status(422).json(err));
    },

    findAllwDetails: (req, res) => {
        db.College
            .find({})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    findById: (req, res) => {
        db.College
            .findById({ _id: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    create: (req, res) => {
        console.log('The req.body is \n', req.body);
        db.College
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    remove: (req, res) => {
        db.College
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }

}