import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"


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

// LOGIN USER
export const loginUser = asyncHandler(async(req,res)=>{
    const {email,password}= req.body;
    const user = await User.findOne({email});
            if (!user) throw new Error("User doesn't exist");
            //verify password 
            const isMatch = bcrypt.compare(password, user.password);
            if(!isMatch) throw new Error("Wrong Incredeint");

            const token = jwt.sign({id: user._id,name:user.name}, process.env.TOKEN,{expiresIn:"1h"});
            res.status(200).json({
                message : "LOGIN SUCESSFULLY",
                token
            })

    
})