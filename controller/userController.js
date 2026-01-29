import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";


// REGISTER USER
export const registerUser = asyncHandler(async(req,res)=>{
    const {name,email,password} = req.body;
    const existingUser = await User.findOne({email});
    if(existingUser) throw new Error("User already exist.");

    // hashed password
    const genSalt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,genSalt);

    const newUser = await User.create({name,email,password : hashedPassword});
    res.status(201).json({message : "user created", newUser});

})