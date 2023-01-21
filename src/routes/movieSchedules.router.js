const movieSchedulesRouter = require("express").Router();
const { readAllMovieSchedules, readMovieSchedules, createMovieSchedules, updateMovieSchedules, deleteMovieSchedules } = require("../controllers/movieSchedules.controller");
const { selectCinemaSchedules } = require("../models/movieSchedules.model");

movieSchedulesRouter.get("/", readAllMovieSchedules);

movieSchedulesRouter.get("/:id", readMovieSchedules);

movieSchedulesRouter.post("/", createMovieSchedules);

movieSchedulesRouter.patch("/:id", updateMovieSchedules);

movieSchedulesRouter.delete("/:id", deleteMovieSchedules);

module.exports = movieSchedulesRouter;
