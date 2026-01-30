import express from "express";
import {registerUser,loginUser,getUser} from "../controller/userController.js";
import decoder from "../middleware/userMiddleware.js"

const router = express.Router();

router.post("/registerUser", registerUser);
router.post("/loginUser", loginUser);
router.get("/getUser", decoder,getUser);


export default router