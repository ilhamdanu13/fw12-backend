const paymentMethodModel = require("../models/paymentMethod.model");
const errorHandler = require("../helpers/errorHandler.helper");
const filter = require("../helpers/filter.helper");

exports.readAllPaymentMethod = (req, res) => {
  const sortable = ["name"];
  filter(req.query, sortable, paymentMethodModel.selectCountAllMethod, res, (filter, pageInfo) => {
    paymentMethodModel.selectAllPaymentMethod(filter, (err, data) => {
      if (err) {
        return errorHandler(err, res);
      }
      return res.status(200).json({
        success: true,
        message: "List all payment methods",
        pageInfo,
        results: data?.rows,
      });
    });
  });
};

exports.readPaymentMethod = (req, res) => {
  paymentMethodModel.selectPaymentMethod(req.params.id, (err, data) => {
    return res.status(200).json({
      success: true,
      message: "Detail payment method",
      results: data?.rows[0],
    });
  });
};

exports.createPaymentMethod = (req, res) => {
  paymentMethodModel.insertPaymentMethod(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Payment method created successfully",
      results: data.rows[0],
    });
  });
};

exports.updatePaymentMethod = (req, res) => {
  paymentMethodModel.updatePaymentMethod(req, (err, data) => {
    return res.status(200).json({
      success: true,
      message: "Payment method updated successfully",
      results: data.rows[0],
    });
  });
};

exports.deletePaymentMethod = (req, res) => {
  paymentMethodModel.deletePaymentMethod(req.params.id, (err, data) => {
    return res.status(200).json({
      success: true,
      message: "Delete payment method successfully",
      results: data.rows[0],
    });
  });
};
