const router = require("express").Router();
const doeRoutes = require("./doeAPI");
const collegeRoutes = require('./college');

// NYT API routes
router.use("/doequery", doeRoutes);
// User routes
router.use("/college", collegeRoutes);

module.exports = router;
