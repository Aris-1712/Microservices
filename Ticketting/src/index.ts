import {app} from './app'
import Mongoose from 'mongoose'

const start=()=>{
    Mongoose.connect("mongodb://localhost:27017/ticketing",(err)=>{
        if(err){
            throw new Error("MongoDB failed to connect")
        }
        app.listen(3001,()=>{
            console.log("listening on 3001")
        })
    })
}
start()

