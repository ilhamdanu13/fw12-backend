const moviesRouter = require("express").Router();
const { readAllMovies, readMovies, createMovies, updateMovies, deleteMovies } = require("../controllers/movies.controller");

moviesRouter.get("/", readAllMovies);

moviesRouter.get("/:id", readMovies);

moviesRouter.post("/", createMovies);

moviesRouter.patch("/:id", updateMovies);

moviesRouter.delete("/:id", deleteMovies);

module.exports = moviesRouter;
