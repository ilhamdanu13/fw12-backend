const reservedSeatModel = require("../models/reservedSeat.model");
const errorHandler = require("../helpers/errorHandler.helper");
const filter = require("../helpers/filter.helper");

exports.readAllReservedSeat = (req, res) => {
  const sortable = ["seatNum", "transactionId"];
  filter(req.query, sortable, reservedSeatModel.selectCountAllReservedSeat, res, (filter, pageInfo) => {
    reservedSeatModel.selectAllReservedSeat(filter, (err, data) => {
      if (err) {
        return errorHandler(err, res);
      }
      return res.status(200).json({
        success: true,
        message: "List all reserved seat",
        pageInfo,
        results: data?.rows,
      });
    });
  });
};

exports.readReservedSeat = (req, res) => {
  reservedSeatModel.selectReservedSeat(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Detail reserved seat",
      results: data?.rows[0],
    });
  });
};

exports.createReservedSeat = (req, res) => {
  reservedSeatModel.insertReservedSeat(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Reserved seat created successfully",
      results: data.rows[0],
    });
  });
};

exports.updateReservedSeat = (req, res) => {
  reservedSeatModel.updateReservedSeat(req, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Reserved seat updated successfully",
      results: data.rows[0],
    });
  });
};

exports.deleteReservedSeat = (req, res) => {
  reservedSeatModel.deleteReservedSeat(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Delete reserved seat successfully",
      results: data.rows[0],
    });
  });
};
