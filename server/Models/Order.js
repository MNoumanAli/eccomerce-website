import mongoose from "mongoose";
const orderSchema = new mongoose.Schema(
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
       ],
       amount : {
        type :Number,
        required : true,
       },
       address : {
        type : Object,
        required : true,
       },
       status : {
        type : String,
        reuqired : true,
        default : pending
       }
    },
    {
    
        timestamps : true
    }
)
const order = mongoose.model('order' , orderSchema)
export default order