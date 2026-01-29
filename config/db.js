import mongoose from "mongoose";

const connectDB = async(req ,res)=>{
    try {
        await mongoose.connect(process.env.MONGO_STRING);
        console.log("connected to database");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

export default connectDB