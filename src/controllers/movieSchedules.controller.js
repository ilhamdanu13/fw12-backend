const movieSchedulesModel = require("../models/movieSchedules.model");
const errorHandler = require("../helpers/errorHandler.helper");

exports.readAllMovieSchedules = (req, res) => {
  movieSchedulesModel.selectAllMovieSchedules((err, data) => {
    return res.status(200).json({
      success: true,
      message: "List all movie schedules",
      results: data?.rows,
    });
  });
};

exports.readMovieSchedules = (req, res) => {
  movieSchedulesModel.selectMovieSchedules(req.params.id, (err, data) => {
    return res.status(200).json({
      success: true,
      message: "Detail movie schedule",
      results: data?.rows[0],
    });
  });
};

exports.createMovieSchedules = (req, res) => {
  movieSchedulesModel.insertMovieSchedules(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Movie schedule created successfully",
      results: data.rows[0],
    });
  });
};

exports.updateMovieSchedules = (req, res) => {
  movieSchedulesModel.updateMovieSchedules(req, (err, data) => {
    return res.status(200).json({
      success: true,
      message: "Movie schedule updated successfully",
      results: data.rows[0],
    });
  });
};

exports.deleteMovieSchedules = (req, res) => {
  movieSchedulesModel.deleteMovieSchedules(req.params.id, (err, data) => {
    return res.status(200).json({
      success: true,
      message: "Delete movie schedule successfully",
      results: data.rows[0],
    });
  });
};
