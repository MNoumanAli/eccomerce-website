import express from "express"
const router = express.Router()
import {login} from "../Controllers/User.js"
router.get("/dummy", (req,res) => {
    console.log("Request Success")
})
router.get("/login" , login)
export default router