const router = require("express").Router();
const articleRoutes = require("./articles");
const nytSearchRoutes = require("./nytsearch");

// Article routes
router.use("/articles", articleRoutes);

// nyt search route
router.use("/nytsearch", nytSearchRoutes);

module.exports = router;
