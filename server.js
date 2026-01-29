import dotenv from "./config/dotenv.js";
import express from "express";
import connectDB from "./config/db.js";
import router from "./router/userRouter.js"

// connect to database
connectDB();

const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());
app.use("/api/auth",router);

app.use((err,req,res,next)=>{
    res.status(500).json({
        sucess : false,
        message : err.message
    })
})

app.listen(PORT , ()=>console.log(`server is running on ${PORT}`));


