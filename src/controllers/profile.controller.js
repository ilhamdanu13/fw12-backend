// const usersModel = require("../models/users.model");
// const errorHandler = require("../helpers/errorHandler.helper");

// exports.uploadProfile = (req, res) => {
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
//       message: "Profile picture updated successfully",
//       results: data?.rows[0],
//     });
//   });
// };
