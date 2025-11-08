import dotenv from "dotenv"
dotenv.config()
import express from 'express'; 
import cors from "cors";
import connectToDB from "./db/db.js";
import userRouter from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import captainRouter from "./routes/captain.routes.js";


const app=express();
app.use(express.json())
app.use(cookieParser())
connectToDB();
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use("/users",userRouter)
app.use("/captains",captainRouter)


export default app;