const statusModel = require("../models/status.model");
const errorHandler = require("../helpers/errorHandler.helper");
const filter = require("../helpers/filter.helper");

exports.readAllStatus = (req, res) => {
  const sortable = ["name", "createdAt"];
  filter(req.query, sortable, statusModel.selectCountAllStatus, res, (filter, pageInfo) => {
    statusModel.selectAllStatus(filter, (err, data) => {
      if (err) {
        console.log(err);
        return errorHandler(err, res);
      }
      return res.status(200).json({
        success: true,
        message: "List all status",
        pageInfo,
        results: data.rows,
      });
    });
  });
};

exports.readStatus = (req, res) => {
  statusModel.selectStatus(req.params.id, (err, data) => {
    return res.status(200).json({
      success: true,
      message: "Detail reserved status",
      results: data?.rows[0],
    });
  });
};

exports.createStatus = (req, res) => {
  statusModel.insertStatus(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Status created successfully",
      results: data.rows[0],
    });
  });
};

exports.updateStatus = (req, res) => {
  statusModel.updateStatus(req, (err, data) => {
    return res.status(200).json({
      success: true,
      message: "Status updated successfully",
      results: data.rows[0],
    });
  });
};

exports.deleteStatus = (req, res) => {
  statusModel.deleteStatus(req.params.id, (err, data) => {
    return res.status(200).json({
      success: true,
      message: "Delete status successfully",
      results: data.rows[0],
    });
  });
};
