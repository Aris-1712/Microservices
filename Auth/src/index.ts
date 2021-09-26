import  Mongoose  from "mongoose"
import { app } from './app'
const start=()=>{
Mongoose.connect("mongodb://mongo-serv/ecom",(err)=>{
    if(err){
        console.log("Mongo not connected",err)
        return
    }
    console.log("Mongo Connected")
    app.listen(3002,()=>{
        console.log("Listenng at 3002")
    })
})

}

start()