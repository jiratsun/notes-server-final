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

exports.create = create;
exports.read = read;
