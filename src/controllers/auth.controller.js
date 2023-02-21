const userModel = require("../models/users.model");
const resetPasswordModel = require("../models/resetPassword.model");
const jwt = require("jsonwebtoken");
const errorHandler = require("../helpers/errorHandler.helper");
const {transport, mailOptions} = require("../helpers/mail.helper")

exports.login = (req, res) => {
  userModel.selectUserByEmail(req.body.email, (err, { rows }) => {
    if (rows.length) {
      const [user] = rows;
      if (req.body.password === user.password) {
        const token = jwt.sign({ id: user.id }, "backend-secret");
        return res.status(200).json({
          success: true,
          message: "Login success",
          results: {
            token,
          },
        });
      }
    }
    return res.status(401).json({
      success: false,
      message: "Wrong email or password",
    });
  });
};

exports.register = (req, res) => {
  userModel.insertUser(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Register successfully",
    });
  });
};

exports.forgotPassword = async (req, res) => {
  try {
  const { email } = req.body;
  const mailer = await transport()
  userModel.selectUserByEmail(email, (err, { rows: users }) => {
    if (err) {
      return errorHandler(err, res);
    }
    if (users.length) {
      const [user] = users;
      const data = {
        email,
        userId: user.id,
        code: Math.ceil(Math.random() * 90000),
      };
      mailer.sendMail(mailOptions(email, data.code))
      resetPasswordModel.insertResetPassword(data, (err, { rows: results }) => {
        if (results.length) {
          return res.status(200).json({
            success: true,
            message: "Reset password has been requested",
          });
        }
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }
  });
  } catch (err){
    console.log(err)
    return res.status(500).json({
      success: false, 
      message: 'Failed to request'
    })
  }
};

exports.resetPassword = (req, res) => {
  const { password, confirmPassword } = req.body;
  if (password === confirmPassword) {
    resetPasswordModel.selectResetPasswordByEmailAndCode(req.body, (err, { rows: users }) => {
      if (err) {
        console.log(err);
        return errorHandler(err, res);
      }
      if (users.length) {
        const [resetRequest] = users;
        userModel.updateUser(resetRequest.userId, { password }, (err, { rows: users }) => {
          if (err) {
            console.log(err);
            return errorHandler(err, res);
          }
          if (users.length) {
            resetPasswordModel.deleteResetPassword(resetRequest.id, (err, { rows }) => {
              if (rows.length) {
                return res.status(200).json({
                  success: true,
                  message: "Password updated, please relogin",
                });
              }
            });
          }
        });
      } else {
        return res.status(400).json({
          success: false,
          message: "Reset request not found",
        });
      }
    });
  } else {
    return res.status(400).json({
      success: false,
      message: "password and confirm password not match",
    });
  }
};
