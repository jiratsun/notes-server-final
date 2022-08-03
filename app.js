require("dotenv").config();

const express = require("express");

const app = express();

app.use((err, _, res, __) => {
    res.json({ message: err.message });
});

app.listen(process.env.PORT || 3001);
