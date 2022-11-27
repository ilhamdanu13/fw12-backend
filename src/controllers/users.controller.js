const usersModel = require("../models/users.model");
const errorHandler = require("../helpers/errorHandler.helper");
const filter = require("../helpers/filter.helper");

exports.readAllUsers = (req, res) => {
  const sortable = ["firstName", "lastName", "email"];
  filter(req.query, sortable, usersModel.selectCountAllUsers, res, (filter, pageinfo) => {
    usersModel.selectAllUsers(filter, (err, data) => {
      if (err) {
        return errorHandler(err, res);
      }
      return res.status(200).json({
        success: true,
        message: "List data of users",
        pageinfo,
        results: data?.rows,
      });
    });
  });
};

exports.createUser = (req, res) => {
  usersModel.insertUser(req.body, (err, data) => {
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
  usersModel.updateUser(req, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      results: data?.rows[0],
    });
  });
};

exports.deleteUser = (req, res) => {
  usersModel.deleteUser(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Delete user successfully",
      results: data.rows[0],
    });
  });
};

exports.readUser = (req, res) => {
  usersModel.selectUser(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Detail user",
      results: data?.rows[0],
    });
  });
};
