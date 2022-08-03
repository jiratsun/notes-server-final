const { pageModel } = require("../models/pages.model");

const create = async (req, res, next) => {
    const { pageName } = req.body;
    const Page = pageModel();
    try {
        const page = await Page.create({
            collectionName: pageName,
            pageName: pageName,
        });
        res.json(page);
    } catch (err) {
        next(err);
    }
};

const read = async (_, res, next) => {
    const Page = pageModel();
    try {
        const pages = await Page.find({}).sort({ pageName: "asc" });
        res.json(pages);
    } catch (err) {
        next(err);
    }
};

const update = async (req, res, next) => {
    const Page = pageModel();
    const { id } = req.params;
    try {
        const page = await Page.findOneAndUpdate(
            { _id: id },
            { $set: req.body },
            { new: true }
        );
        res.json(page);
    } catch (err) {
        next(err);
    }
};

const deleteOne = async (req, res, next) => {
    const Page = pageModel();
    const { id } = req.params;
    try {
        await Page.deleteOne({ _id: id });
        res.end();
    } catch (err) {
        next(err);
    }
};

exports.create = create;
exports.read = read;
exports.update = update;
exports.deleteOne = deleteOne;
