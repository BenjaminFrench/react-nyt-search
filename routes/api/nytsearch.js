const router = require("express").Router();
const nytSearchController = require("../../controllers/nytSearchController");

router.route("/").get(nytSearchController.search);

module.exports = router;