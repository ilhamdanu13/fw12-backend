const subscriberModel = require("../models/subscriber.model");
const errorHandler = require("../helpers/errorHandler.helper");

exports.readAllSubscriber = (req, res) => {
  subscriberModel.selectAllSubscriber((err, data) => {
    return res.status(200).json({
      success: true,
      message: "List all reserved seat",
      results: data?.rows,
    });
  });
};

exports.readSubscriber = (req, res) => {
  subscriberModel.selectSubscriber(req.params.id, (err, data) => {
    return res.status(200).json({
      success: true,
      message: "Detail subscribers",
      results: data?.rows[0],
    });
  });
};

exports.createSubscriber = (req, res) => {
  subscriberModel.insertSubscriber(req.body, (err, data) => {
    if (err) {
      return errorHandler(err, res);
    }
    return res.status(200).json({
      success: true,
      message: "Subscriber created successfully",
      results: data.rows[0],
    });
  });
};

exports.updateSubscriber = (req, res) => {
  subscriberModel.updateSubscriber(req, (err, data) => {
    return res.status(200).json({
      success: true,
      message: "Subscriber updated successfully",
      results: data.rows[0],
    });
  });
};

exports.deleteSubscriber = (req, res) => {
  subscriberModel.deleteSubscriber(req.params.id, (err, data) => {
    return res.status(200).json({
      success: true,
      message: "Delete subscriber successfully",
      results: data.rows[0],
    });
  });
};
