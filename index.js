const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
// const { connection } = require("./db")
const { dealerRouter } = require("./routes/dealer.routes")
const { inventoryRouter } = require("./routes/inventory.routes")
const { oemRouter } = require("./routes/oem.routes")
const dotenv = require("dotenv")
dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

app.use("/auth",dealerRouter)
app.use("/inventory",inventoryRouter)
app.use("/oem",oemRouter)

app.get("/",(req,res)=>{
    res.send("Home Page for Buyc Corp")
})

app.listen(process.env.PORT,async()=>{
    try {
        console.log(process.env.mongoURL)
        await mongoose.connect("mongodb+srv://bhandarisaurabh:bhandarisaurabh@cluster0.k9ntg6n.mongodb.net/buyccorp?retryWrites=true&w=majority")
        console.log("connected to DB")
    } catch (error) {
        console.log(error)
    }
    console.log(`server is running at port ${process.env.PORT}`)
})
