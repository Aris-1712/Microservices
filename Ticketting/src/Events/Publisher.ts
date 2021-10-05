import nats from 'node-nats-streaming'
import {randomBytes} from 'crypto'


   let stan= nats.connect('ticketing',randomBytes(4).toString("hex"),{
        url:"http://nats-serv:4222"
    })

 


// stan.on("connect",()=>{
//     console.log("connected")
// })



export {stan}