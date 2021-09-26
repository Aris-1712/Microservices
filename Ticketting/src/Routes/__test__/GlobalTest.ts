import jwt from 'jsonwebtoken'
import { isJSDocUnknownTag } from 'typescript'



const generateSession=(email:string,id:string)=>{

    const token= jwt.sign({email:email,_id:id},"Arisgani1712")
    const session={jwt:token}
    const buffer=Buffer.from(JSON.stringify(session)).toString('base64')
    return `express:sess=${buffer}`

}


export {generateSession}