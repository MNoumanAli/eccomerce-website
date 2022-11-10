
import order from "../Models/Order"

const createOrder = async (req,res) => {
    const newOrder = new order(req.body)
    try{
        const savePro = await newOrder.save()
        res.status(200).json(savePro)
    }catch(err){
        res.status(500).json(err)
    }
}
// only admin can 
const updateOrder = async (res,res) => {
    try{
        const updated  = await order.findByIdAndUpdate(res.params.id , {
            $set : res.body
        }, {new : true})
        res.status(200).json(updated)
    }catch(err)
    {
        res.status(500).json(err)
    }
}
// only admin can
const deleteOrder = async (res,res) => {
    try{
        await order.findByIdAndDelete(res.params.id)
        res.status(200).json('order delete Successfully')
    }catch(err)
    {
        res.status(500).json(err)
    }
}

const getUserOrder = async (res,res) => {
    try{
        const orders  = await order.find({userID : req.params.userID}) //
        res.status(200).json(orders)
    }catch(err)
    {
        res.status(500).json(err)
    }
}

// get all order , this for admin
const getAllodrer = async (res,res) => {
    try{
        const allOrder = await order.find()
        res.status(200).json(allOrder)
    }catch(err){
        res.status(500).json(err)
    }
}
 
// Stats Order

// Income Controller
