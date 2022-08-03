const create = async (req, res, next) => {
    const { Note } = res.locals;
    const { title, comment, isCertain } = req.body;
    try {
        const note = await Note.create({
            title: title,
            comment: comment,
            isCertain: isCertain,
        });
        res.json(note);
    } catch (err) {
        next(err);
    }
};

const readAll = async (_, res, next) => {
    const { Note } = res.locals;
    try {
        const notes = await Note.find({}).sort({ insertDate: "desc" });
        res.json(notes);
    } catch (err) {
        next(err);
    }
};

const update = async (req, res, next) => {
    const { Note } = res.locals;
    const { id } = req.params;
    try {
        const page = await Note.findOneAndUpdate(
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
    const { Note } = res.locals;
    const { id } = req.params;
    try {
        await Note.deleteOne({ _id: id });
        res.end();
    } catch (err) {
        next(err);
    }
};

exports.create = create;
exports.readAll = readAll;
exports.update = update;
exports.deleteOne = deleteOne;
