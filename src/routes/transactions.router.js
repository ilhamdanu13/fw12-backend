const transactionsRouter = require("express").Router();
const { readAllTransactions, readTransactions, createTransactions, updateTransactions, deleteTransactions, orderTransaction, readDetailTransactions } = require("../controllers/transactions.controller");

transactionsRouter.get("/", readAllTransactions);

transactionsRouter.get("/:detail/:id", readDetailTransactions);

transactionsRouter.get("/:id", readTransactions);

transactionsRouter.post("/orderTransaction", orderTransaction);

transactionsRouter.post("/", createTransactions);

transactionsRouter.patch("/:id", updateTransactions);

transactionsRouter.delete("/:id", deleteTransactions);

module.exports = transactionsRouter;
