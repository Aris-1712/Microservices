import express from 'express'
import { TicketingRouter } from './Routes/TicketingRoute'
import cookieSession from 'cookie-session'
import  {ErrorHandler} from '@arisorg/common'
const app=express()
app.use(express.json())
app.use(cookieSession({secure:false,signed:false}))
app.use(TicketingRouter)
app.use(ErrorHandler)



export {app}
