import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import User from '../models/userModel.js'
import { generateToken,isAuth } from '../middleware/webToken.js';
const userRouter = express.Router();

userRouter.post(
    '/register',
    expressAsyncHandler(async(req, res) => {    
        console.log(req.body,"ppppp")
        const creatingNewUser = new User({
            email: req.body.email,
            password:req.body.password,
            age:req.body.age,
            gender:req.body.gender,
            phone_number:req.body.mobileNo
        });
        const createdUser = await creatingNewUser.save();
        res.send({
            _id: createdUser._id,
            email: createdUser.email,
            age:createdUser.age
        });
    })
);

userRouter.post(
    '/signin',
    expressAsyncHandler(async(req, res) => {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            if (req.body.password == user.password) {
                
                res.send({
                    _id: user._id,
                    email: user.email,
                    token: generateToken(user),
                    is_admin:user.is_admin
                });
                return;
            }
        }
        res.status(401).send({ message: 'Invalid email or password' });
    })
);

userRouter.put( 
    '/profile',
    isAuth, 
       expressAsyncHandler(async(req, res) => {

        const user = await User.findById(req.user._id);
        if (user) {
            user.name = req.body.age || user.age;
            user.email = req.body.email || user.email;
            if (req.body.password) {
                user.password = req.body.password || user.password;
            }
            const updatedUser = await user.save();
            res.send({
                _id: updatedUser._id,
                email: updatedUser.email,
                token: generateToken(updatedUser),
            });
        }
    })
);

export default userRouter