const cinemasModel = require("../models/cinemas.model");
const errorHandler = require("../helpers/errorHandler.helper");
const filter = require("../helpers/filter.helper");

exports.readAllCinemas = (req, res) => {
  const sortable = ["name", "address", "city"];
  filter(req.query, sortable, cinemasModel.selectCountAllCinemas, res, (filter, pageInfo) => {
    cinemasModel.selectAllCinemas(filter, (err, data) => {
      if (err) {
        return errorHandler(err, res);
      }
      return res.status(200).json({
        success: true,
        message: "List all cinemas",
        pageInfo,
        results: data.rows,
      });
    });
  });
};

exports.readCinemas = (req, res) => {
  cinemasModel.selectCinemas(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
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
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Cinemas updated successfully",
      results: data.rows[0],
    });
  });
};

exports.deleteCinemas = (req, res) => {
  cinemasModel.deleteCinemas(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Delete cinemas successfully",
      results: data.rows[0],
    });
  });
};
