const router = require("express").Router();
const doeRoutes = require("./doeAPI");
const collegeRoutes = require('./college');

// DOE API routes
router.use("/doequery", doeRoutes);
// College routes
router.use("/college", collegeRoutes);

module.exports = router;
