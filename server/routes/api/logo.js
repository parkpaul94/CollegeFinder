const router = require("express").Router();
const logoController = require("../../controllers/logoController");

router
router
    .route("/:name")
    .get(logoController.findByName)

module.exports = router;