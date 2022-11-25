const subscriberRouter = require("express").Router();
const { readAllSubscriber, readSubscriber, createSubscriber, updateSubscriber, deleteSubscriber } = require("../controllers/subscriber.controller");

subscriberRouter.get("/", readAllSubscriber);

subscriberRouter.get("/:id", readSubscriber);

subscriberRouter.post("/", createSubscriber);

subscriberRouter.patch("/:id", updateSubscriber);

subscriberRouter.delete("/:id", deleteSubscriber);

module.exports = subscriberRouter;
