const transactionsModel = require("../models/transactions.model");
const errorHandler = require("../helpers/errorHandler.helper");

exports.readAllTransactions = (req, res) => {
  transactionsModel.selectAllTransactions((err, data) => {
    return res.status(200).json({
      success: true,
      message: "List all transactions",
      results: data?.rows,
    });
  });
};

exports.readTransactions = (req, res) => {
  transactionsModel.selectTransactions(req.params.id, (err, data) => {
    return res.status(200).json({
      success: true,
      message: "Detail transaction",
      results: data?.rows[0],
    });
  });
};

exports.createTransactions = (req, res) => {
  transactionsModel.insertTransactions(req.body, (err, data) => {
    if (err) {
      console.log(err);
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Transaction created successfully",
      results: data.rows[0],
    });
  });
};

exports.updateTransactions = (req, res) => {
  transactionsModel.updateTransactions(req, (err, data) => {
    return res.status(200).json({
      success: true,
      message: "Transaction updated successfully",
      results: data.rows[0],
    });
  });
};

exports.deleteTransactions = (req, res) => {
  transactionsModel.deleteTransactions(req.params.id, (err, data) => {
    return res.status(200).json({
      success: true,
      message: "Delete transaction successfully",
      results: data.rows[0],
    });
  });
};
