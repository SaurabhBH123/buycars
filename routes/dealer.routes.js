const express = require("express");
const { DealerModel } = require("../models/dealer.model");
const dealerRouter = express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

dealerRouter.post("/register",async(req,res)=>{
    const {name,email,password} = req.body
    // console.log(name,email,password)
    try {
        bcrypt.hash(password, 5, async(err, hash)=> {
            // Store hash in your password DB.
            const dealer = new DealerModel({name,email,password:hash})
            await dealer.save()
            res.status(200).send({"msg":"New Dealer Registered!"})
        });
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})

dealerRouter.post("/login",async(req,res)=>{
    const {email,password} = req.body
    try {
        const dealer = await DealerModel.find({email})
        if(dealer.length>0){
            bcrypt.compare(password, dealer.password, async(err, result)=> {
                // result == true
                res.status(200).send({"msg":"Login Successful!","token":jwt.sign({dealerID:dealer._id},"buycars")})
            });
        }else{
            res.status(400).send({"msg":"Wrong Credentials!"})
        }
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})
module.exports = {dealerRouter}