const usersModel = require("../models/users.model");
const errorHandler = require("../helpers/errorHandler.helper");
const fs = require("fs");

exports.readProfile = (req, res) => {
  usersModel.selectUser(req.params.id, (err, data) => {
    if (err) {
      console.log(err);
      return errorHandler(err, res);
    }

    return res.status(200).json({
      success: true,
      message: "Get profile user by id",
      results: data.rows[0],
    });
  });
};

exports.updateProfile = (req, res) => {
  if (req.file) {
    console.log(req.file);
    req.body.picture = req.file.filename;
    usersModel.selectUser(req.params.id, (err, data) => {
      if (data.rows.length) {
        const [user] = data.rows;
        if (user.picture) {
          fs.rm("uploads/" + user.picture, { force: true }, (err) => {
            if (err) {
              return errorHandler(err, res);
            }
          });
        }
      }
    });
  }
  usersModel.updateUser(req.params.id, req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Profile updated",
      results: data?.rows[0],
    });
  });
};
