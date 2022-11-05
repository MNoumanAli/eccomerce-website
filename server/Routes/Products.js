import express from "express"
const router = express.Router()

router.get("/dummy", (req,res) => {
    console.log("Request Success")
})

export default router