import product from "../Models/Products"

const createProduct = async (req,res) => {
    const newProduct = new product(req.body)
    try{
        const savePro = await newProduct.save()
        res.status(200).json(savePro)
    }catch(err){
        res.status(500).json(err)
    }
}
const updateProduct = async (res,res) => {
    try{
        const updated  = await product.findByIdAndUpdate(res.parms.id , {
            $set : res.body
        }, {new : true})
        res.status(200).json(updateProduct)
    }catch(err)
    {
        res.status(500).json(err)
    }
}
const deleteProduct = async (res,res) => {
    try{
        await product.findByIdAndDelete(res.parms.id)
        res.status(200).json('Product delete Successfully')
    }catch(err)
    {
        res.status(500).json(err)
    }
}

const getProduct = async (res,res) => {
    try{
        const products  = await product.findById(res.parms.id)
        res.status(200).json(products)
    }catch(err)
    {
        res.status(500).json(err)
    }
}

const getAllProduct = async (res,res) => {
   const qNew = req.query.new
   const qCatogery = res.query.catogery
   let allProduct;
   try{
        if(qNew)
        {
            allProduct = await product.find().sort({createdAt : -1}).limit(10)
        }
        else if(qCatogery)
        {
            allProduct = await product.find(
                {
                    categories : {
                        $in : [qCatogery]
                    }
                }
            )
        }
        else{
            allProduct = await product.find()
        }
        res.status(200).json(allProduct)
   }catch(err)
   {
    res.status(500).json(err)
   }
   
}
