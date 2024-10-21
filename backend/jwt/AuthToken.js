import jwt from 'jsonwebtoken';
import {User} from '../model/user.model.js';

const createTokenAndSaveCookies = async (userId,res) => {
    const token = jwt.sign({userId},process.env.JWT_SECRET_KEY,{
        expiresIn: "30d"
    });
    res.cookie("jwt",token,{
        httpOnly: true, // xss protection 
        secure: true,
        sameSite: "strict" // csrf protection
    })

    await User.findByIdAndUpdate(userId,{token})
    return token;
}

export default createTokenAndSaveCookies;