const castsModel = require("../models/casts.model");
const errorHandler = require("../helpers/errorHandler.helper");

exports.readAllCasts = (req, res) => {
  castsModel.selectAllCasts((err, data) => {
    return res.status(200).json({
      success: true,
      message: "List all casts",
      results: data.rows,
    });
  });
};

exports.readCasts = (req, res) => {
  castsModel.selectCasts(req.params.id, (err, data) => {
    return res.status(200).json({
      success: true,
      message: "Detail casts",
      results: data?.rows[0],
    });
  });
};

exports.createCasts = (req, res) => {
  castsModel.insertCasts(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Casts created successfully",
      results: data.rows[0],
    });
  });
};

exports.updateCasts = (req, res) => {
  castsModel.updateCasts(req, (err, data) => {
    return res.status(200).json({
      success: true,
      message: "Casts updated successfully",
      results: data.rows[0],
    });
  });
};

exports.deleteCasts = (req, res) => {
  castsModel.deleteCasts(req.params.id, (err, data) => {
    return res.status(200).json({
      success: true,
      message: "Delete casts successfully",
      results: data.rows[0],
    });
  });
};
