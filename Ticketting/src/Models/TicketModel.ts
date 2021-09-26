import Mongoose from 'mongoose'

interface ticketModelInt{
title:string,
price:number,
userId:string
}

const ticketSchema=new Mongoose.Schema<ticketModelInt>({
    title:{type:String,required:true},
    price:{type:Number,required:true},
    userId:{type:String,required:true}
})

const ticketModel=Mongoose.model<ticketModelInt>("ticket",ticketSchema)


export {ticketModel}