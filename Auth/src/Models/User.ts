import Mongoose from 'mongoose'

interface UserSchemaType {
    email:string,
    password:string
} 

const UserSchema=new Mongoose.Schema<UserSchemaType>({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const User=Mongoose.model<UserSchemaType>("User",UserSchema)

export {User}

