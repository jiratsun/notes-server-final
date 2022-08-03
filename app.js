require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");

const pagesController = require("./src/controllers/pages.controller");
const { errorHandler } = require("./src/middlewares/error-handler.middleware");

const app = express();

app.use(bodyParser.json());

app.route("/pages").get(pagesController.read).post(pagesController.create);
app.route("/pages/:id").patch(pagesController.update);

app.use(errorHandler);

app.listen(process.env.PORT || 3001);
