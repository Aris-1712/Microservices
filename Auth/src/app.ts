import express from 'express'
import {SignupRouter} from './Routes/Signup/signup' 
import {ErrorHandler} from './Middleware/ErrorHandler'
import cors from 'cors'
import  'express-async-errors'
import Mongoose from 'mongoose'
import cookieSession from 'cookie-session'
const app=express()
app.use(express.json())
app.use(cors())
app.use(cookieSession({secure:false,signed:false}))
app.use('/api',SignupRouter)

app.use(ErrorHandler)

export {app}