const mongoose = require("mongoose");
const { connection } = require("../services/db.service");

const pageSchema = new mongoose.Schema(
    {
        collectionName: {
            type: String,
            required: [true, "collectionName required"],
        },
        pageName: {
            type: String,
            required: [true, "pageName required"],
        },
        noUpdateDate: { type: Date, default: () => new Date() },
    },
    { versionKey: false }
);

pageSchema.set("toJSON", {
    virtuals: true,
    transform: (_, ret) => {
        delete ret._id;
    },
});

exports.pageModel = () => connection.model("Page", pageSchema, "Pages");
