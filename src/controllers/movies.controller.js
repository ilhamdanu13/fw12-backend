const moviesModel = require("../models/movies.model");
const errorHandler = require("../helpers/errorHandler.helper");
const filter = require("../helpers/filter.helper");

exports.readAllMovies = (req, res) => {
  console.log(req.userData);
  const sortable = ["title", "releaseDate", "duration", "director", "synopsis"];
  filter(req.query, sortable, moviesModel.selectCountAllMovies, res, (filter, pageInfo) => {
    moviesModel.selectAllMovies(filter, (err, data) => {
      if (err) {
        return errorHandler(err, res);
      }
      return res.status(200).json({
        success: true,
        message: "List all movie",
        pageInfo,
        results: data.rows,
      });
    });
  });
};

exports.readMovies = (req, res) => {
  moviesModel.selectMovies(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
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
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Movie updated successfully",
      results: data.rows[0],
    });
  });
};

exports.deleteMovies = (req, res) => {
  moviesModel.deleteMovies(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Delete movie successfully",
      results: data.rows[0],
    });
  });
};
