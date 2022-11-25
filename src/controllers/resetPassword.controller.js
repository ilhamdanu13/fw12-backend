const resetPasswordModel = require("../models/resetPassword.model");
const errorHandler = require("../helpers/errorHandler.helper");

exports.readAllResetPassword = (req, res) => {
  resetPasswordModel.selectAllResetPassword((err, data) => {
    return res.status(200).json({
      success: true,
      message: "List all reset passwords",
      results: data?.rows,
    });
  });
};

exports.readResetPassword = (req, res) => {
  resetPasswordModel.selectResetPassword(req.params.id, (err, data) => {
    return res.status(200).json({
      success: true,
      message: "Detail reset password",
      results: data?.rows[0],
    });
  });
};

exports.createResetPassword = (req, res) => {
  resetPasswordModel.insertResetPassword(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Reset password created successfully",
      results: data.rows[0],
    });
  });
};

exports.updateResetPassword = (req, res) => {
  resetPasswordModel.updateResetPassword(req, (err, data) => {
    return res.status(200).json({
      success: true,
      message: "Reset password updated successfully",
      results: data.rows[0],
    });
  });
};

exports.deleteResetPassword = (req, res) => {
  resetPasswordModel.deleteResetPassword(req.params.id, (err, data) => {
    return res.status(200).json({
      success: true,
      message: "Delete reset password successfully",
      results: data.rows[0],
    });
  });
};
