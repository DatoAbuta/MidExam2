const {Router} = require("express")

const usersRouter = Router()

const users = [
    {
        id:1,
        name:"daviti",
        isSmoker:true
    }
]

usersRouter.get("/",(req,res) => {
    res.json({success:true,data:users})
})


module.exports = usersRouter