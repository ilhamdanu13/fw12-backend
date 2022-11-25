// endpoint users
const routes = require("express").Router();

routes.use("/users", require("./users.router"));
routes.use("/genre", require("./genre.router"));
routes.use("/casts", require("./casts.router"));
routes.use("/cinemas", require("./cinemas.router"));
routes.use("/movies", require("./movies.router"));
routes.use("/movieScheduleTimes", require("./movieScheduleTimes.router"));
routes.use("/movieSchedules", require("./movieSchedules.router"));
routes.use("/paymentMethod", require("./paymentMethod.router"));
routes.use("/reservedSeat", require("./reservedSeat.router"));
routes.use("/resetPassword", require("./resetPassword.router"));
routes.use("/status", require("./status.router"));
routes.use("/subscriber", require("./subscriber.router"));
routes.use("/transactions", require("./transactions.router"));
routes.use("/movieCasts", require("./movieCasts.router"));
routes.use("/movieGenre", require("./movieGenre.router"));

// export router so that can use in index.js
module.exports = routes;