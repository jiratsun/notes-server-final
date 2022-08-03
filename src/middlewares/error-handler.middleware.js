const errorHandler = (err, _, res, __) => {
    res.json({ message: err.message });
};

exports.errorHandler = errorHandler;
