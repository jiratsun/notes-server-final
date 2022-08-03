const express = require("express");

const {
    collectionSelector,
} = require("../middlewares/notes-collection-selector.middleware");
const notesController = require("../controllers/notes.controller");

const router = express.Router();

router.use(collectionSelector);

router.route("/").get(notesController.readAll).post(notesController.create);

router
    .route("/:id")
    .patch(notesController.update)
    .delete(notesController.deleteOne);

module.exports = router;
