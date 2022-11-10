
import cart from "../Models/Cart"

const createCart = async (req,res) => {
    const newCart = new cart(req.body)
    try{
        const savePro = await newCart.save()
        res.status(200).json(savePro)
    }catch(err){
        res.status(500).json(err)
    }
}
const updateCart = async (res,res) => {
    try{
        const updated  = await cart.findByIdAndUpdate(res.params.id , {
            $set : res.body
        }, {new : true})
        res.status(200).json(updated)
    }catch(err)
    {
        res.status(500).json(err)
    }
}
const deleteCart = async (res,res) => {
    try{
        await cart.findByIdAndDelete(res.params.id)
        res.status(200).json('Cart delete Successfully')
    }catch(err)
    {
        res.status(500).json(err)
    }
}

const getUserCart = async (res,res) => {
    try{
        const products  = await cart.findOne({usrID : res.params.UserID}) //UserId not cart
        res.status(200).json(products)
    }catch(err)
    {
        res.status(500).json(err)
    }
}

// get all Cart , this for admin
const getAllCart = async (res,res) => {
    try{
        const allCart = await cart.find()
        res.status(200).json(allCart)
    }catch(err){
        res.status(500).json(err)
    }
}
 