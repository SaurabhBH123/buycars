const mongoose = require("mongoose")
// mongoose.set('bufferCommands', false);
const oemSchema = mongoose.Schema({
    modelName:String,
    year:String,
    listPrice:Number,
    colors:[String],
    mileage:Number,
    power_bhp:Number,
    maxSpeed:Number
},{
    versionKey:false
})

const OEMModel = mongoose.model("OEM",oemSchema)

module.exports = {OEMModel}