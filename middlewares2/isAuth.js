const KEY = "1234"


const isAuth = (req,res,next) => {
    const apiKey = req.headers.apikey
    if(apiKey !== KEY){
        return res.json({success:false,data:null,message:"you dont have access"})
    }
    next()
}

module.exports = {isAuth}