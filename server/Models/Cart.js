import mongoose from "mongoose";
const cartSchema = new mongoose.Schema(
    {
       userID : {
        type : String,
        required : true
       },
       products : [
       { 
        productId : {
            type: String,
            required : true
        },
        quantity : {
            type : String,
            required : true
        }
    }
       ]
    },
    {
    
        timestamps : true
    }
)
const cart = mongoose.model('cart' , cartSchema)
export default cart