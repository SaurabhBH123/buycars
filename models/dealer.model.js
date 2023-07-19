const mongoose = require("mongoose")

const dealerSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
},{
    versionKey:false
})

const DealerModel = mongoose.model("Dealer",dealerSchema)

module.exports = {DealerModel}