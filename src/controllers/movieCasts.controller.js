const movieCastsModel = require("../models/movieCasts.model");
const errorHandler = require("../helpers/errorHandler.helper");

exports.readAllMovieCasts = (req, res) => {
  movieCastsModel.selectAllMovieCasts((err, data) => {
    return res.status(200).json({
      success: true,
      message: "List all movie casts",
      results: data?.rows,
    });
  });
};

exports.readMovieCasts = (req, res) => {
  movieCastsModel.selectMovieCasts(req.params.id, (err, data) => {
    return res.status(200).json({
      success: true,
      message: "Detail movie casts",
      results: data?.rows[0],
    });
  });
};

exports.createMovieCasts = (req, res) => {
  movieCastsModel.insertMovieCasts(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Movie casts created successfully",
      results: data.rows[0],
    });
  });
};

exports.updateMovieCasts = (req, res) => {
  movieCastsModel.updateMovieCasts(req, (err, data) => {
    return res.status(200).json({
      success: true,
      message: "Movie casts updated successfully",
      results: data.rows[0],
    });
  });
};

exports.deleteMovieCasts = (req, res) => {
  movieCastsModel.deleteMovieCasts(req.params.id, (err, data) => {
    return res.status(200).json({
      success: true,
      message: "Delete movie casts successfully",
      results: data.rows[0],
    });
  });
};
