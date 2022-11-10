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
        img : {
            type : String,
            required : true
        },
        categories : {
            type : Array,
            required : true
        },
        size: {
            type : Array
           
        },
        color : {
            type : Array
        },
        price : {
            type : Number,
            required : true
        },
        inStock : {
            type : Boolean,
            default : true
        }
    },
    {
    
        timestamps : true
    }
)
const product = mongoose.model('product' , productSchema)
export default product