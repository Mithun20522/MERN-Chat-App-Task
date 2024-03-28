import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
    user:[{
        userId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        username:{
            type: String,
            ref: 'User'
        }
    }],
    
    message:{
        type:String,
        trim:true,
        required:true
    }
}, {timestamps:true});

const Chat = mongoose.model('Chat', chatSchema);

export default Chat;