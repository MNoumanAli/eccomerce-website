
const AuthUser = (req, res, next) => {
    const accessToken = req.headers.accessToken
    if(accessToken)
    {
        const token = accessToken.split(" ").[1]
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