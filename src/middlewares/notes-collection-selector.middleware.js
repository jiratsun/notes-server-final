const { noteModel } = require("../models/notes.model");

const collectionSelector = (req, res, next) => {
    const { collectionName } = req.query;
    res.locals.Note = noteModel(collectionName);
    next();
};

exports.collectionSelector = collectionSelector;
