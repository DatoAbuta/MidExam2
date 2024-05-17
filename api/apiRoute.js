const {Router} = require("express")
const usersRouter = require("./users/userRoute")
const productRouter = require("./porducts/productRoute")
const { isAuth } = require("../middlewares2/isAuth")

const apiRouter = Router()

apiRouter.use("/users",isAuth,usersRouter)
apiRouter.use("/products",productRouter)

module.exports = apiRouter