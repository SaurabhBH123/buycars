const express = require("express")
const { OEMModel } = require("../models/oem.model")
const oemRouter = express.Router()

oemRouter.get("/",async(req,res)=>{
    const {orderByPrice,orderByMil,modelName} = req.query
    try {
        if(modelName){
            const data = await OEMModel.find()
            const filteredData = data?.filter((car)=>car.modelName.toLowerCase().includes(modelName.toLowerCase()||car.year.includes(year)))
            res.status(200).send(filteredData)
        }else if(orderByPrice){
            if(orderByPrice === 'asc'){
                const data = await OEMModel.find().sort({listPrice:1})
                res.status(200).send(data)
            }else if(orderByPrice === 'desc'){
                const data = await OEMModel.find().sort({listPrice:-1})
                res.status(200).send(data)
            }
        }else if(orderByMil){
            if(orderByMil === 'asc'){
                const data = await OEMModel.find().sort({mileage:1})
                res.status(200).send(data)
            }else if(orderByMil === 'desc'){
                const data = await OEMModel.find().sort({mileage:-1})
                res.status(200).send(data)
            }
        }else if(orderByPrice&&orderByMil){
            if(orderByMil === 'asc'&&orderByPrice === 'asc'){
                const data = await OEMModel.find().sort({mileage:1,price:1})
                res.status(200).send(data)
            }else if(orderByMil === 'desc'&& orderByPrice === "desc"){
                const data = await OEMModel.find().sort({mileage:-1,price:-1})
                res.status(200).send(data)
            }else if(orderByMil === 'asc'&& orderByPrice === "desc"){
                const data = await OEMModel.find().sort({mileage:1,price:-1})
                res.status(200).send(data)
            }else if(orderByMil === 'desc'&& orderByPrice === "asc"){
                const data = await OEMModel.find().sort({mileage:-1,price:1})
                res.status(200).send(data)
            }
        }else{
            const data = await OEMModel.find()
            res.status(200).send(data)
        }
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})

oemRouter.get("/:id",async(req,res)=>{
    const ID = req.params.id
    try {
        const data = await OEMModel.findOne({_id:ID})
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})

oemRouter.post("/add",async(req,res)=>{
    const payload = req.body
    try {
        const newOem = new OEMModel(payload)
        await newOem.save()
        res.status(200).send({"msg":"New OEM Added"})
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})

module.exports = {oemRouter}