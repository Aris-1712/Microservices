import {app} from './app'
import Mongoose from 'mongoose'
import {stan} from './Events/Publisher'
const start=()=>{
    
           
    Mongoose.connect("mongodb://mongo-ticket-serv:27017/ticketing",(err)=>{
        if(err){
            throw new Error("MongoDB failed to connect")
        }
        app.listen(3001,()=>{
            console.log("listening on 3001")
           stan.on("connect",()=>{
               console.log("Stan connected")
           })
        })
    })
}
start()

