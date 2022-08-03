const express = require("express");

const pagesController = require("../controllers/pages.controller");

const router = express.Router();

router.route("/").get(pagesController.readAll).post(pagesController.create);

router
    .route("/:id")
    .patch(pagesController.update)
    .delete(pagesController.deleteOne);

module.exports = router;
