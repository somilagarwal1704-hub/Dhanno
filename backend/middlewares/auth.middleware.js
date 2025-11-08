import User from "../model/user.model.js";
import jwt from "jsonwebtoken";
import BlacklistToken from "../blacklist/blackListToken.model.js";
import Captain from "../model/captain.model.js";


export const authUser=async (req,res,next)=>{
     const token=req.cookies.token || req.headers.authorization?.split(' ')[1];
     if(!token){
         return res.status(401).json({message:"Unauthorized"})
     }

     const isBlackListed=await BlacklistToken.findOne({token:token});
     if(isBlackListed){
        return res.status(401).json({message:"Unauthorized"})
     }
     try{
     const decoded=jwt.verify(token,process.env.JWT_SECRET);
     const user=await User.findById(decoded._id)
     
     req.user=user;
     return next();

     }catch(err){
         return res.status(401).json({message:"Unauthorized"}) 
     }
}

export const authCaptain=async (req,res,next)=>{
     const token=req.cookies.token || req.headers.authorization?.split(' ')[1];
     if(!token){
         return res.status(401).json({message:"Unauthorized"})
     }

     const isBlackListed=await BlacklistToken.findOne({token:token});
     if(isBlackListed){
        return res.status(401).json({message:"Unauthorized"})
     }
     try{
     const decoded=jwt.verify(token,process.env.JWT_SECRET);
     const captain=await Captain.findById(decoded._id)
     
     req.captain=captain;
     return next();

     }catch(err){
         return res.status(401).json({message:"Unauthorized"}) 
     }
}