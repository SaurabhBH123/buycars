const jwt = require("jsonwebtoken")

const auth = (req,res,next)=>{
    const token = req.headers.authorization
    if(token){
        const decoded = jwt.verify(token,"buycars")
        if(decoded){
            req.body.dealer = decoded.dealerID
            next()
        }else{
            res.status(400).send({"msg":"Login Required"})
        }
    }else{
        res.status(400).send({"msg":"Login Required"})
    }
}

module.exports = {auth}