const movieGenreModel = require("../models/movieGenre.model");
const errorHandler = require("../helpers/errorHandler.helper");

exports.readAllMovieGenre = (req, res) => {
  movieGenreModel.selectAllMovieGenre((err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "List all movie genres",
      results: data?.rows,
    });
  });
};

exports.readMovieGenre = (req, res) => {
  movieGenreModel.selectMovieGenre(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Detail movie genre",
      results: data?.rows[0],
    });
  });
};

exports.createMovieGenre = (req, res) => {
  movieGenreModel.insertMovieGenre(req.body, (err, data) => {
    if (err) {
      console.log(err);
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Add movie genre successfully",
      results: data.rows[0],
    });
  });
};

exports.updateMovieGenre = (req, res) => {
  movieGenreModel.updateMovieGenre(req, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Movie genre updated successfully",
      results: data.rows[0],
    });
  });
};

exports.deleteMovieGenre = (req, res) => {
  movieGenreModel.deleteMovieGenre(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Delete movie genre successfully",
      results: data.rows[0],
    });
  });
};
