const { Router } = require("express");
const usersRouter = require("./users/userRoute");
const productRouter = require("./products/productRoute");

const apiRouter = Router();

apiRouter.use("/products", productRouter);

module.exports = apiRouter;
