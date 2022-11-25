const movieScheduleTimesRouter = require("express").Router();
const { readAllMovieScheduleTimes, readMovieScheduleTimes, createMovieScheduleTimes, updateMovieScheduleTimes, deleteMovieScheduleTimes } = require("../controllers/movieScheduleTimes.controller");

movieScheduleTimesRouter.get("/", readAllMovieScheduleTimes);

movieScheduleTimesRouter.get("/:id", readMovieScheduleTimes);

movieScheduleTimesRouter.post("/", createMovieScheduleTimes);

movieScheduleTimesRouter.patch("/:id", updateMovieScheduleTimes);

movieScheduleTimesRouter.delete("/:id", deleteMovieScheduleTimes);

module.exports = movieScheduleTimesRouter;
