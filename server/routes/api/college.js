const router = require("express").Router();
const collegeController = require("../../controllers/collegeController");

router
    .route("/all")
	.get(collegeController.findAllwDetails)
    
router
    .route("/")
	.get(collegeController.findAll)
	.post(collegeController.create)

router
    .route("/:id")
    .get(collegeController.findById)

module.exports = router;
