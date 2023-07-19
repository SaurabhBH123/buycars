const mongoose = require("mongoose")

const inventorySchema = mongoose.Schema({
    odometerKms:Number,
    majorScratches:Boolean,
    orgPaint:String,
    accidentsCount:Number,
    prevBuyersCount:Number,
    registerationPlace:String,
    price:Number,
    image:String,
    title:String,
    description:[String],
    dealer:{type:mongoose.Schema.Types.ObjectId,ref:"Dealer"},
    oem:{type:mongoose.Schema.Types.ObjectId,ref:"OEM"}
},{
    versionKey:false
})

const InventoryModel = mongoose.model("Inventory",inventorySchema)

module.exports = {InventoryModel}