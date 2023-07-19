const express = require("express")
const cors = require("cors")
const { connection } = require("./db")
const { dealerRouter } = require("./routes/dealer.routes")
const { inventoryRouter } = require("./routes/inventory.routes")
const { oemRouter } = require("./routes/oem.routes")
require("dotenv").config()

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
        await connection
        console.log("connected to DB")
    } catch (error) {
        console.log(error)
    }
    console.log(`server is running at port ${process.env.PORT}`)
})
