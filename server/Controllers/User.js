import user from "../Models/Users"

export const signUp = async (req, res) => {
    const newUser = new user{
        username : req.body.username,
        password : req.body.password,
        email : req.body.email
    }
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
    if(req.user.id === req.params.id || req.user.isAdmin)
    {
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
}