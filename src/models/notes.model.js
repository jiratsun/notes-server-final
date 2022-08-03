const mongoose = require("mongoose");
const connection = require("../services/db.service");

const noteSchema = new mongoose.Schema(
    {
        title: { type: String, required: [true, "content required"] },
        comment: { type: String, required: [true, "comment required"] },
        isCertain: { type: Boolean, required: [true, "isCertain required"] },
        isFavorite: { type: Boolean, default: false },
        insertDate: { type: Date, default: () => new Date() },
        editDate: { type: Date, default: () => new Date() },
        isCurrent: { type: Boolean, default: false },
        currentDate: { type: Date, default: null },
        currentComment: { type: String, default: "" },
    },
    { versionKey: false }
);

noteSchema.set("toJSON", {
    virtuals: true,
    transform: (_, ret) => {
        delete ret._id;
    },
});

exports.noteModel = (collectionName) =>
    connection.model("Note", noteSchema, collectionName);
