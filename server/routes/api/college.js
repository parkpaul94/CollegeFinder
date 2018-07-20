const router = require("express").Router();
const articleController = require("../../controllers/collegeController");


router
    .route("/:id")
    // .post(articleController.create)
    // .get(articleController.findById)
	// .delete(articleController.remove);

module.exports = router;


