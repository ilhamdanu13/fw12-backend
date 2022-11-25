const cinemasModel = require("../models/cinemas.model");
const errorHandler = require("../helpers/errorHandler.helper");

exports.readAllCinemas = (req, res) => {
  cinemasModel.selectAllCinemas((err, data) => {
    return res.status(200).json({
      success: true,
      message: "List all cinemas",
      results: data.rows,
    });
  });
};

exports.readCinemas = (req, res) => {
  cinemasModel.selectCinemas(req.params.id, (err, data) => {
    return res.status(200).json({
      success: true,
      message: "Detail cinemas",
      results: data?.rows[0],
    });
  });
};

exports.createCinemas = (req, res) => {
  cinemasModel.insertCinemas(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Cinemas created successfully",
      results: data.rows[0],
    });
  });
};

exports.updateCinemas = (req, res) => {
  cinemasModel.updateCinemas(req, (err, data) => {
    return res.status(200).json({
      success: true,
      message: "Cinemas updated successfully",
      results: data.rows[0],
    });
  });
};

exports.deleteCinemas = (req, res) => {
  cinemasModel.deleteCinemas(req.params.id, (err, data) => {
    return res.status(200).json({
      success: true,
      message: "Delete cinemas successfully",
      results: data.rows[0],
    });
  });
};
