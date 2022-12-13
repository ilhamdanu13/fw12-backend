const transactionsRouter = require("express").Router();
const { readAllTransactions, readTransactions, createTransactions, updateTransactions, deleteTransactions, orderTransaction } = require("../controllers/transactions.controller");

transactionsRouter.get("/", readAllTransactions);

transactionsRouter.get("/:id", readTransactions);

transactionsRouter.post("/orderTransaction", orderTransaction);

transactionsRouter.post("/", createTransactions);

transactionsRouter.patch("/:id", updateTransactions);

transactionsRouter.delete("/:id", deleteTransactions);

module.exports = transactionsRouter;
