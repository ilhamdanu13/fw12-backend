const moviesModel = require("../models/movies.model");
const errorHandler = require("../helpers/errorHandler.helper");

exports.readAllMovies = (req, res) => {
  moviesModel.selectAllMovies((err, data) => {
    return res.status(200).json({
      success: true,
      message: "List all movie",
      results: data.rows,
    });
  });
};

exports.readMovies = (req, res) => {
  moviesModel.selectMovies(req.params.id, (err, data) => {
    return res.status(200).json({
      success: true,
      message: "Detail movie",
      results: data?.rows[0],
    });
  });
};

exports.createMovies = (req, res) => {
  moviesModel.insertMovies(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Movie created successfully",
      results: data.rows[0],
    });
  });
};

exports.updateMovies = (req, res) => {
  moviesModel.updateMovies(req, (err, data) => {
    return res.status(200).json({
      success: true,
      message: "Movie updated successfully",
      results: data.rows[0],
    });
  });
};

exports.deleteMovies = (req, res) => {
  moviesModel.deleteMovies(req.params.id, (err, data) => {
    return res.status(200).json({
      success: true,
      message: "Delete movie successfully",
      results: data.rows[0],
    });
  });
};
