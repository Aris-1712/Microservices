import { NextFunction, Request, Response } from "express"
import {GeneralErrors,verifyToken} from '@arisorg/common'
 
declare global{ namespace Express{
    export interface Request{
        userId?: string
    }
}
}
const authcheck=async(req:Request,res:Response,next:NextFunction)=>{
    if(req.session!.jwt){
        let payLoad:any=await verifyToken(req.session!.jwt)
        req["userId"]=payLoad!._id
        next()
    }else{
        throw new GeneralErrors([{msg:"Unauthorized"}])
    }
}


export {authcheck}