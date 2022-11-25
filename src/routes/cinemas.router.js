const cinemasRouter = require("express").Router();
const { readAllCinemas, readCinemas, createCinemas, updateCinemas, deleteCinemas } = require("../controllers/cinemas.controller");

cinemasRouter.get("/", readAllCinemas);

cinemasRouter.get("/:id", readCinemas);

cinemasRouter.post("/", createCinemas);

cinemasRouter.patch("/:id", updateCinemas);

cinemasRouter.delete("/:id", deleteCinemas);

module.exports = cinemasRouter;
