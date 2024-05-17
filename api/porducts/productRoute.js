const {Router} = require("express")
const { getAllProducts, getProductById } = require("./services")

const productRouter = Router()


productRouter.get("/",getAllProducts)

productRouter.get("/:id",getProductById)



module.exports = productRouter