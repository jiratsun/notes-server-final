require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");

const { errorHandler } = require("./src/middlewares/error-handler.middleware");
const pagesRouter = require("./src/routes/pages.route");
const notesRouter = require("./src/routes/notes.route");

const app = express();

app.use(bodyParser.json());

app.use("/pages", pagesRouter);
app.use("/notes", notesRouter);

app.use(errorHandler);

app.listen(process.env.PORT || 3001);
