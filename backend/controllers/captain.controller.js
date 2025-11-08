import BlacklistToken from "../blacklist/blackListToken.model.js";
import Captain from "../model/captain.model.js";
import { createCaptain } from "../Services/captain.services.js";
import { validationResult } from "express-validator";


export const registerCaptain = async (req, res,) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstname,lastname, email, password,color,plate,capacity,vehicleType } = req.body;
 
    const isCaptainAlreadyExist=await Captain.findOne({email});
    if(isCaptainAlreadyExist){
     return res.status(400).json({message:'Captain Already Exist'})
    }
    const hashedPassword = await Captain.hashPassword(password);

    const captain = await createCaptain({
      firstname,
      lastname,
      email,
      password: hashedPassword,
      color,
      plate,
      capacity,
      vehicleType
    });

    const token = captain.generateAuthToken();
    res.status(201).json({
      success: true,
      captain,
      token
    });
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

export  const loginCaptain = async (req,res)=>{
     try{
     const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email,password} =req.body;

    const captain=await Captain.findOne({email}).select('+password');

    if(!captain){
     res.status(401).json({
          error:"Invalid email or password"
     })
    }
    const isMatch=await captain.comparePassword(password);

    if(!isMatch){
     return res.status(401).json({
          message:"Invalid email or password"
     })
    } 

    const token=captain.generateAuthToken();
    res.cookie('token',token)
    res.status(200).json({
     token:token,
     captain:captain
    })
}
catch(err){
console.error("Registration error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
}
}

export const getCaptainProfile=async (req,res,next)=>{
    return res.status(200).json(req.captain) 
}

export const logoutCaptain=async(req,res,next)=>{
  res.clearCookie('token');
  const token=req.cookies.token || req.headers.authorization.split(' ')[1]

  await BlacklistToken.create({token});

  res.status(200).json({
    message:"Captain logout Successfully"
  })
}