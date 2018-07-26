const router = require("express").Router();
const doeRoutes = require("./doeAPI");
const collegeRoutes = require('./college');
const logoRoutes = require('./logo');

// DOE API routes
router.use("/doequery", doeRoutes);
// College routes
router.use("/college", collegeRoutes);
//Search College Logo routes
router.use('/logo', logoRoutes);

module.exports = router;
