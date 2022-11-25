const genreRouter = require("express").Router();
const { readAllGenre, readGenre, createGenre, updateGenre, deleteGenre } = require("../controllers/genre.controller");

genreRouter.get("/", readAllGenre);

genreRouter.get("/:id", readGenre);

genreRouter.post("/", createGenre);

genreRouter.patch("/:id", updateGenre);

genreRouter.delete("/:id", deleteGenre);

module.exports = genreRouter;
