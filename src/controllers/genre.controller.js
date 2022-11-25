const genreModel = require("../models/genre.model");
const errorHandler = require("../helpers/errorHandler.helper");

exports.readAllGenre = (req, res) => {
  genreModel.selectAllGenre((err, data) => {
    return res.status(200).json({
      success: true,
      message: "List all genre",
      results: data.rows,
    });
  });
};

exports.readGenre = (req, res) => {
  genreModel.selectGenre(req.params.id, (err, data) => {
    return res.status(200).json({
      success: true,
      message: "Detail genre",
      results: data?.rows[0],
    });
  });
};

exports.createGenre = (req, res) => {
  genreModel.insertGenre(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Genre created successfully",
      results: data.rows[0],
    });
  });
};

exports.updateGenre = (req, res) => {
  genreModel.updateGenre(req, (err, data) => {
    return res.status(200).json({
      success: true,
      message: "Genre updated successfully",
      results: data.rows[0],
    });
  });
};

exports.deleteGenre = (req, res) => {
  genreModel.deleteGenre(req.params.id, (err, data) => {
    return res.status(200).json({
      success: true,
      message: "Delete genre successfully",
      results: data.rows[0],
    });
  });
};
