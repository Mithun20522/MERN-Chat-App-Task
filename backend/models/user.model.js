import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate: {
            validator: function(email){
                const emailRegx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}/
                return emailRegx.test(email);

            },
            message: 'Email format is invalid.'
        }
    },
    password:{
        type:String,
        required:true,
        validate: {
            validator: function(password){
                return password.length >= 6;
            },
            message: 'Password must be of atleast 6 character long.'
        }
    },

},{timestamps:true});

const User = mongoose.model('User', userSchema);

export default User;