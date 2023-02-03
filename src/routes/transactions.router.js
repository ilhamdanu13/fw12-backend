const transactionsRouter = require("express").Router();
const { readAllTransactions, readTransactions, createTransactions, updateTransactions, deleteTransactions, orderTransaction, readHistoryTransactions, readHistoryTicket } = require("../controllers/transactions.controller");
const authMiddleware = require("../middlewares/auth.middleware");

transactionsRouter.get("/", readAllTransactions);

transactionsRouter.get("/history/:id", authMiddleware, readHistoryTransactions);

transactionsRouter.get("/ticket/:id", authMiddleware, readHistoryTicket);

transactionsRouter.get("/:id", readTransactions);

transactionsRouter.post("/orderTransaction", orderTransaction);

transactionsRouter.post("/", createTransactions);

transactionsRouter.patch("/:id", updateTransactions);

transactionsRouter.delete("/:id", deleteTransactions);

module.exports = transactionsRouter;
