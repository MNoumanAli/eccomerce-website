import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenve from "dotenv";
import router from "./Routes/Users.js"
dotenve.config()
const app = express()

app.use(bodyParser.json({extended : true}))
app.use(bodyParser.urlencoded({extended: true}))


app.use("/", router)

const CONNECTION_URL = "mongodb+srv://Nouman:Laptop2017@eccomerce.s721mtr.mongodb.net/Eccomerce?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000
mongoose.connect(CONNECTION_URL , {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log("Server is Running on PORT :" + PORT )))
    .catch((error) => console.log(error.message));