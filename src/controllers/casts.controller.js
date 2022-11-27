const castsModel = require("../models/casts.model");
const errorHandler = require("../helpers/errorHandler.helper");
const filter = require("../helpers/filter.helper");

exports.readAllCasts = (req, res) => {
  const sortable = ["name", "createdAt", "updatedAt"];
  filter(req.query, sortable, castsModel.selectCountAllCasts, res, (filter, pageInfo) => {
    castsModel.selectAllCasts(filter, (err, data) => {
      if (err) {
        console.log(err);
        return errorHandler(err, res);
      }
      return res.status(200).json({
        success: true,
        message: "List all casts",
        pageInfo,
        results: data.rows,
      });
    });
  });
};

exports.readCasts = (req, res) => {
  castsModel.selectCasts(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
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
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Casts updated successfully",
      results: data.rows[0],
    });
  });
};

exports.deleteCasts = (req, res) => {
  castsModel.deleteCasts(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Delete casts successfully",
      results: data.rows[0],
    });
  });
};
