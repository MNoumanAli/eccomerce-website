import mongoose from "mongoose";
const productSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            required : true,
            unique : true
        },
        id : {
            type : String,
            required : true,
            unique : true
        },
        categories : {
            type : Array,
            required : true
        },
        size: {
            type : String
           
        },
        color : {
            type : String
        },
        price : {
            type : String,
            required : true
        }
        
    },
    {
    
        timestamps : true
    }
)
const product = mongoose.model('product' , productSchema)
export default product