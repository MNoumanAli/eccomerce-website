import express from "express"
import { deleteUser, getAllUsers, getUser, login, signUp, updateUser } from "../Controllers/User"
import {AuthUser, verifyTokenAndAdmin} from '../Middleware/AuthToken'
const router = express.Router()


router.post('/register' , signUp)
router.post('/login'  , login)
router.put('/:id' , AuthUser, updateUser)
router.delete('/:id' , AuthUser , deleteUser)
router.get('/find/:id', verifyTokenAndAdmin , getUser)
router.get('/' , verifyTokenAndAdmin , getAllUsers)

export default router