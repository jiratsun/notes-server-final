const express = require("express");

const pagesController = require("../controllers/pages.controller");

const router = express.Router();

router.route("/").get(pagesController.read).post(pagesController.create);

router.route("/:id").patch(pagesController.update);

module.exports = router;
