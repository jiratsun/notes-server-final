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

exports.create = create;
