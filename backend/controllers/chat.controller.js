import Chat from "../models/chat.model.js";
import User from '../models/user.model.js';

export const sendMessage = async(req, res) => {
    try {
        const {user, message} = req.body;
        if(user.length !== 2 || !message) return res.status(400).json({message:'all fields are mandatory'});
        const userInfo = await User.findById(user[0]);
        if(!userInfo) return res.status(404).json({message: 'User not found'});

        const newMessage = new Chat({
            user:[{userId:userInfo._id, username:userInfo.username}],
            message
        });

        await newMessage.save();

        return res.status(200).json(newMessage);

    } catch (error) {
        return res.status(500).json({message:error});
    }
}


export const getMessage = async(req, res) => {
    try {
        const {chatId} = req.params;
        const isExist = await Chat.findById(chatId);
        if(!isExist) return res.status(404).json({message: 'user not found'});
        return res.status(200).json(isExist.message);
    } catch (error) {
        return res.status(500).json({message:error});
    }
}