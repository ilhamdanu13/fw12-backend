const { insertUser, selectAllUsers, selectUser, updateUser, deleteUser } = require("../models/users.model");
const errorHandler = require("../helpers/errorHandler.helper");

exports.readAllUsers = (req, res) => {
  selectAllUsers((err, data) => {
    return res.status(200).json({
      success: true,
      message: "List data of users",
      results: data?.rows,
    });
  });
};

exports.createUser = (req, res) => {
  insertUser(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "User created successfully",
      results: data.rows[0],
    });
  });
};

exports.updateUser = (req, res) => {
  updateUser(req, (err, data) => {
    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      results: data.rows[0],
    });
  });
};

exports.deleteUser = (req, res) => {
  deleteUser(req.params.id, (err, data) => {
    return res.status(200).json({
      success: true,
      message: "Delete user successfully",
      results: data.rows[0],
    });
  });
};

exports.readUser = (req, res) => {
  selectUser(req.params.id, (err, data) => {
    return res.status(200).json({
      success: true,
      message: "Detail user",
      results: data?.rows[0],
    });
  });
};
