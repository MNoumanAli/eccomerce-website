import user from "../Models/Users"

export const signUp = async (req, res) => {
    const newUser = new user({
        username : req.body.username,
        password : req.body.password,
        email : req.body.email
    })
    try{
        const savedUser = await newUser.save()
        console.log(savedUser)
        res.status(201).json(savedUser)
    }
    catch(error){
        console.log(error)
        res.status(500).json(error)
    }
}

export const login = async (req, res) => {
    const existUser = await user.findOne({username : req.body.username})

    !existUser && res.status(401).json("Invalid Credentials")

    if(existUser.password === req.body.password)
    {
        const SECRET_KEY = "Nouman"
        const accessToken = jwt.sign({
            id : existUser._id,
            isAdmin : existUser.isAdmin,
        },
        SECRET_KEY,
        {expiresIn : "2d"})

        const {password, ...others} = existUser._doc
        return res.status(200).json({...others, accessToken})
    }
    res.status(401).json("Invalid Credentials")
}

export const updateUser = (req, user) => {
        try{
            const updateUser = user.findByIdAndUpdate(req.params.id , {
                // this will set everything we have in req.body
                $set : req.body
            } , {new : true} /*to return new user*/)
            res.status(200).json(updateUser)
        }
        catch(err)
        {
            res.status(500).json(err)
        }
}

export const deleteUser  = async (req,res) => {
    try{
        await user.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted.")
    }
    catch(err)
    {
        res.status(500).json(err)
    }
}

export const getUser = async(req, res) => {
    try{
        const newUser = await user.findById(req.params.id)
        const {password, ...others} = newUser
        res.status(200).json(others)
    }
    catch(err)
    {
        res.status(500).json(err)
    }
}

export const getAllUsers = async(req, res) => {
    // query paramer pass to get only first 7 latest user then
    const query = req.query.new
    try{

        const users = query ? await user.find().sort({id : -1}).limit(7) :await user.find()
    
        res.status(200).json(users)
    }
    catch(err)
    {
        res.status(500).json(err)
    }
}

export const getUserStats = (req, res) => {
    // 1:18:00
}
