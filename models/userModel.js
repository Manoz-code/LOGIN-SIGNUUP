import mongoose from "mongoose";
import { defaultMaxListeners } from "node:events";

const userSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true 
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,

    }
})

export default mongoose.model("User", userSchema);