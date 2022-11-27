const genreModel = require("../models/genre.model");
const errorHandler = require("../helpers/errorHandler.helper");
const filter = require("../helpers/filter.helper");

exports.readAllGenre = (req, res) => {
  const sortable = ["name", "createdAt", "updatedAt"];
  filter(req.query, sortable, genreModel.selectCountAllGenre, res, (filter, pageInfo) => {
    genreModel.selectAllGenre(filter, (err, data) => {
      if (err) {
        return errorHandler(err, res);
      }
      return res.status(200).json({
        success: true,
        message: "List all genre",
        pageInfo,
        results: data.rows,
      });
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
