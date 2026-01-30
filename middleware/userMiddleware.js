import jwt from "jsonwebtoken";

const decoder = async(req,res,next)=>{
try {
        const  authHead = req.headers.authorization;
    if(!authHead || !authHead.startsWith("Bearer ")){
        return res.status(400).json({message : "wrong token"});

    };
    const token = authHead.split(" ")[1];
    //verify token
    const decodeToken = jwt.verify(token,process.env.TOKEN);
    req.user = decodeToken;
    next()
} catch (error) {
    res.status(404).json({message : error.message});
}
}
export default decoder