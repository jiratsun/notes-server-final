const mongoose = require("mongoose");

const connection = mongoose.createConnection(
    `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@master.p7hdq9h.mongodb.net/Guest?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
);

mongoose.set("setDefaultsOnInsert", false);

exports.connection = connection;
