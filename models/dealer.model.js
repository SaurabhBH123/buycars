const mongoose = require("mongoose")
// mongoose.set('bufferCommands', false);
const dealerSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
},{
    versionKey:false
})

const DealerModel = mongoose.model("Dealer",dealerSchema)

module.exports = {DealerModel}