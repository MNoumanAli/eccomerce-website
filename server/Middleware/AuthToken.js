
const AuthUser = (req, res, next) => {
    const accessToken = req.headers.accessToken
    if(accessToken)
    {
        const token = accessToken.split(" ")[1]
        jwt.verify(token , "Nouman" , (err, user) => {
            if(error)
            {
                res.status(403).json("Token is not Right")
            }
            else
            {
                req.user = user
                next;
            }
        })
    }
    else
    {
        return res.status(401).json("Not Authenticated")
    }
}

const verifyTokenAndAuthorization = (req, res, next) => {
    AuthUser(req, res , () => {
        if(req.user.id === req.params.id || req.user.isAdmin)
        {
            next()
        }
        else
        {
            res.status(403).json("You are not allowes to do that.")
        }
    })
}