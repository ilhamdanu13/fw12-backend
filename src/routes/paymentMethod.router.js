const paymentMethodRouter = require("express").Router();
const { readAllPaymentMethod, readPaymentMethod, createPaymentMethod, updatePaymentMethod, deletePaymentMethod } = require("../controllers/paymentMethod.controller");

paymentMethodRouter.get("/", readAllPaymentMethod);

paymentMethodRouter.get("/:id", readPaymentMethod);

paymentMethodRouter.post("/", createPaymentMethod);

paymentMethodRouter.patch("/:id", updatePaymentMethod);

paymentMethodRouter.delete("/:id", deletePaymentMethod);

module.exports = paymentMethodRouter;
