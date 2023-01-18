const transactionsModel = require("../models/transactions.model");
const reservedSeat = require("../models/reservedSeat.model");
const errorHandler = require("../helpers/errorHandler.helper");
const filter = require("../helpers/filter.helper");

exports.readAllTransactions = (req, res) => {
  const sortable = ["bookingDate", "fullName", "email", "phoneNumber"];
  filter(req.query, sortable, transactionsModel.selectCountAllTransactions, res, (filter, pageInfo) => {
    transactionsModel.selectAllTransactions(filter, (err, data) => {
      if (err) {
        return errorHandler(err, res);
      }
      return res.status(200).json({
        success: true,
        message: "List all transactions",
        pageInfo,
        results: data?.rows,
      });
    });
  });
};

exports.readTransactions = (req, res) => {
  transactionsModel.selectTransactions(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
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
    if (err) {
      console.log(err);
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Transaction updated successfully",
      results: data.rows[0],
    });
  });
};

exports.deleteTransactions = (req, res) => {
  transactionsModel.deleteTransactions(req.params.id, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Delete transaction successfully",
      results: data.rows[0],
    });
  });
};

exports.orderTransaction = (req, res) => {
  transactionsModel.orderTransaction(req.body, (err, results) => {
    if (err) {
      console.log(err);
      return errorHandler(err, res);
    }
    req.body.transactionId = results.rows[0].id;
    transactionsModel.seatNum(req.body, (err, data) => {
      if (err) {
        console.log(err);
        return errorHandler(err, res);
      }

      return res.status(200).json({
        success: true,
        message: "Transaction created",
        results: { ...results.rows[0], ...data.rows[0] },
      });
    });
  });
};

// exports.orderTransaction = (req, res) => {

//   const result = {
//     bookingDate: req.body.bookingDate,
//     movieId: req.body.movieId,
//     cinemaId: req.body.cinemaId,
//     movieScheduleid: req.body.movieScheduleid,
//     fullName: req.body.fullName,
//     email: req.body.email,
//     phoneNumber: req.body.phoneNumber,
//     statusId: req.body.statusId,
//     paymentMethodId: req.body.paymentMethodId,
//     // userId: id,
//   };
//   orderTransaction(result, (err, data) => {
//     if (err) {
//       return errorHandler(err, res);
//     }
//     return res.status(200).json({
//       success: true,
//       message: "Order created successfully",
//       results: data,
//     });
//   });

//   transactionsModel.seatNum(req.body, (err, data) => {
//     if(err){
//       return errorHandler(err, res)
//     }
//   })
// };

// const authorization = req.headers.authorization.split(" ")[1];
// const auth = jwt.verify(authorization, "backend-secret");
// const { id } = auth;

// exports.createTransactionReservedSeat = (req, res) => {
//   transactionsModel.insertTransactions(req.body, (err, data) => {
//     if (err) {
//       return errorHandler(err, res);
//     }
//     req.body.transactionsId = data.rows[0].id;

//     reservedSeat.insertReservedSeat(req.body, (err, result) => {
//       if (err) {
//         return errorHandler(err, res);
//       }

//       return res.status(200).json({
//         success: true,
//         message: "Transaction success",
//         results: data.rows[0],
//       });
//     });
//   });
// };
