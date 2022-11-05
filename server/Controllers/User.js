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
        res.s
    }
    catch(error{
        console.log(error)
        res.status(500).json(error)
    }
}