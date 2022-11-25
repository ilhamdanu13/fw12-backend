const castsRouter = require("express").Router();
const { readAllCasts, readCasts, createCasts, updateCasts, deleteCasts } = require("../controllers/casts.controller");

castsRouter.get("/", readAllCasts);

castsRouter.get("/:id", readCasts);

castsRouter.post("/", createCasts);

castsRouter.patch("/:id", updateCasts);

castsRouter.delete("/:id", deleteCasts);

module.exports = castsRouter;
