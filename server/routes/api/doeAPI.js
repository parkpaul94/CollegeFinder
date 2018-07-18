const router = require("express").Router();
const doeAPIController = require('../../controllers/doeAPIController');

router
    .route("/:url")
    .get(doeAPIController.queryAPI)

module.exports = router;


