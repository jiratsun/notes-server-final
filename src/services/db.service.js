const mongoose = require("mongoose");

const connection = mongoose.createConnection(
    `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@master.p7hdq9h.mongodb.net/Test?retryWrites=true&w=majority`,
    { useNewUrlParser: true }
);

exports.connection = connection;
