
const db = require("../models");

module.exports = {

    findAll: function (req, res) {
        db.College
            .findAll()
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    fundById: function(req,res) {
        db.College
            .findById({ _id: req.params.id })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    create: function (req, res) {
        console.log('called \n', req.body);
        db.College
            .create(req.body)
            .then(dbArticle => res.json(dbArticle))
            .catch(err => res.status(422).json(err));
    },

    remove: function (req, res) {
        db.College
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }

}