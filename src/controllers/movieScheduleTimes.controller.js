const movieScheduleTimesModel = require("../models/movieScheduleTimes.model");
const errorHandler = require("../helpers/errorHandler.helper");

exports.readAllMovieScheduleTimes = (req, res) => {
  movieScheduleTimesModel.selectAllMovieScheduleTimes((err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "List all movie schedule times",
      results: data?.rows,
    });
  });
};

exports.readMovieScheduleTimes = (req, res) => {
  movieScheduleTimesModel.selectMovieScheduleTimes(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Detail movie schedule time",
      results: data?.rows[0],
    });
  });
};

exports.createMovieScheduleTimes = (req, res) => {
  movieScheduleTimesModel.insertMovieScheduleTimes(req.body, (err, data) => {
    if (err) {
      console.log(err);
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Movie schedule time created successfully",
      results: data.rows[0],
    });
  });
};

exports.updateMovieScheduleTimes = (req, res) => {
  movieScheduleTimesModel.updateMovieScheduleTimes(req, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Movie schedule time updated successfully",
      results: data.rows[0],
    });
  });
};

exports.deleteMovieScheduleTimes = (req, res) => {
  movieScheduleTimesModel.deleteMovieScheduleTimes(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Delete movie schedule time successfully",
      results: data.rows[0],
    });
  });
};
