import User from "../model/user.model.js";
import { createUser } from "../Services/user.service.js";
import { validationResult } from "express-validator";
import BlacklistToken from "../blacklist/blackListToken.model.js";

export const registerUser = async (req, res,) => {
  console.log("hello")
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password } = req.body;
    const isUserAlreadyExist=await User.findOne({email});
    if(isUserAlreadyExist){
     return res.status(400).json({message:'User Already Exist'})
    }
 
    const hashedPassword = await User.hashPassword(password);

    const user = await createUser({
      firstname:fullname.firstname,
      lastname:fullname.lastname,
      email,
      password: hashedPassword
    });

    const token = user.generateAuthToken();
    res.status(201).json({
      success: true,
      user,
      token
    });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export  const loginUser = async (req,res)=>{
     try{
     const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email,password} =req.body;
 

    const user=await User.findOne({email}).select('+password');

    if(!user){
    
     res.status(401).json({
          error:"Invalid email or password"
     })
    }
    const isMatch=await user.comparePassword(password);

    if(!isMatch){
     return res.status(401).json({
          message:"Invalid email or password"
     })
    } 

    const token=user.generateAuthToken();
    res.cookie('token',token)
    res.status(200).json({
     token:token,
     user:user
    })
}
catch(err){
console.error("Registration error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
}
}

export const getUserProfile=async (req,res,next)=>{
    return res.status(200).json(req.user) 
}

export const logoutUser=async(req,res,next)=>{
  res.clearCookie('token');
  const token=req.cookies.token || req.headers.authorization.split(' ')[1]

  await BlacklistToken.create({token});

  res.status(200).json({
    message:"User logout Successfully"
  })
}