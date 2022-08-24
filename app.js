const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { errorHandler } = require("./src/middlewares/error-handler.middleware");
const pagesRouter = require("./src/routes/pages.route");
const notesRouter = require("./src/routes/notes.route");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.options("*", cors());

app.use("/pages", pagesRouter);
app.use("/notes", notesRouter);

app.use(errorHandler);

app.listen(process.env.PORT || 3001);
