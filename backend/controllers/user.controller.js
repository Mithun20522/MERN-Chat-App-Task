import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';

export const register = async (req, res) => {
    try {
        const {username, email, password} = req.body;
        if(!username || !email || !password) return res.status(400).json({message: 'All fields are mandatory!'});
        const isExist = await User.findOne({email});
        if(isExist) return res.status(409).json({message: 'User already registered!'});
        const hashedPassword = bcrypt.hashSync(password, 10);
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });
        await newUser.save();
        return res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({error, message: 'Internal server error'});
    }
}