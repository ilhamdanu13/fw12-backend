const usersModel = require("../models/users.model");
const errorHandler = require("../helpers/errorHandler.helper");

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

// exports.updateProfile = async (req, res) => {
//   try {
//     if (req.file) {
//       req.body.picture = req.file.path;
//       await selectUser(req.userData.id);
//     }
//     const updateUser = await updateUser(req.body, req.userData.id);
//     return res.status(200).json({
//       success: true,
//       message: "Profile updated",
//       results: updateUser,
//     });
//   } catch (error) {
//     return errorHandler(error, res);
//   }
// };

// exports.updateProfile = (req, res) => {
//   if (req.file) {
//     console.log(req.file);
//     req.body.picture = req.file.filename;
//     usersModel.selectUser(req.params.id, (err, data) => {
//       if (data.rows.length) {
//         const [user] = data.rows;
//         if (user.picture) {
//           fs.rm("uploads/" + user.picture, { force: true }, (err) => {
//             if (err) {
//               return errorHandler(err, res);
//             }
//           });
//         }
//       }
//     });
//   }
//   usersModel.updateUser(req.params.id, req.body, (err, data) => {
//     if (err) {
//       return errorHandler(err, res);
//     }
//     return res.status(200).json({
//       success: true,
//       message: "User updated successfully",
//       results: data?.rows[0],
//     });
//   });
// };
