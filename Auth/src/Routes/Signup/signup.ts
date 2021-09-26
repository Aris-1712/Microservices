import express, { Request, Response } from 'express'
import {body,validationResult} from 'express-validator'
import GeneralErrors from '../../Errors/GeneralErrors'
import {User} from '../../Models/User'
import 'express-async-errors';
import jwt from 'jsonwebtoken'
import { comparePass, hashedPass } from '../../utils/auth';
import { genToken,verifyToken } from '@arisorg/common'
const SignupRouter=express.Router()

SignupRouter.post('/auth/signup',body('email').isEmail(),body('password').isLength({min:4,max:10}).withMessage("Password should be of length between 4 and 10"),async(req:Request,res:Response)=>{

        const errors=validationResult(req)
        console.log(req.body)
        if(!errors.isEmpty()){
            console.log(errors.array())
            throw new GeneralErrors(errors.array())
        }
        const {email,password}=req.body
        const existing=await User.findOne({email})
        if(existing){
            console.log("here2")
            throw new GeneralErrors([{msg:"User Existing"}])
        }
        const hashedPassword=await hashedPass(password)
        const newUser=new User({email,password:hashedPassword})
        const user=await newUser.save()
        const token= await genToken({email:email,_id:user._id})
        req.session={jwt:token}
        res.status(200).send(user)
 
})

SignupRouter.post('/auth/signin',body('email').isEmail(),body('password').isLength({min:4,max:10}).withMessage("Password should be of length between 4 and 10"),async(req:Request,res:Response)=>{
        
        const errors=validationResult(req)
        console.log(req.body)
        if(!errors.isEmpty()){
            console.log(errors.array())
            throw new GeneralErrors(errors.array())
        }
        const {email,password}=req.body
        const existing=await User.findOne({email})
        if(!existing){
            console.log("here2")
            throw new GeneralErrors([{msg:"User Not Existing"}])
        }
        const hashed=existing.password
        const passCheck=await comparePass(password,hashed)
        if(!passCheck){
            throw new GeneralErrors([{msg:"Password incorrect"}]) 
        }
        const token=await genToken({email:email,_id:existing._id})
        req.session={jwt:token}
        res.status(200).send({email:email,_id:existing._id})
 
})
SignupRouter.get('/auth/currentUser',async(req:Request,res:Response)=>{
        console.log(req.session)
       if(!req.session!.jwt){
           res.send({currentUser:null})
           return
       } 
       
       const payLoad=  await verifyToken(req.session!.jwt)
       if(payLoad){
           res.send({currentUser:payLoad})
       }
       else{
           res.send({currentUser:null})
       }

})
export {SignupRouter}