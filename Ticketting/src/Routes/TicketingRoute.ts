
import express, { Request, Response } from 'express'
import  'express-async-errors'
import {authcheck} from '../Middlewares/auth'
import {GeneralErrors, InvalidParamsError} from '@arisorg/common'
import {ticketModel} from '../Models/TicketModel'
import {stan} from '../Events/Publisher'
const { body, validationResult } = require('express-validator');
const TicketingRouter=express.Router()

TicketingRouter.post('/api/ticketing',authcheck,body('title').not().isEmpty().withMessage("Please provide title"),body('price').isFloat({gt:0}).not().isEmpty().withMessage("Price cannot empty"),async(req:Request,res:Response)=>{
    const {title,price}=req.body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new InvalidParamsError(errors.array())
    }
    const ticket=new ticketModel({
        title,price,userId:req.userId
    })
    const savedTicket=await ticket.save()
    stan.publish("ticket:created", JSON.stringify({title,price,userId:req.userId}))
    res.status(201).send(savedTicket)
})
TicketingRouter.get('/api/ticketing/:id',authcheck,async(req,res)=>{
    const ticket=await ticketModel.findOne({_id:req.params.id})
    if(!ticket){
        throw new GeneralErrors([{msg:"no such ticket"}])
    }
    res.status(201).send(ticket)
})

TicketingRouter.get('/api/ticketing',authcheck,async(req,res)=>{
    const tickets=await ticketModel.find()
    res.status(201).send(tickets)
})

TicketingRouter.post('/api/ticketing/update',authcheck,body("_id").not().isEmpty().withMessage("ticket id unavailable"),body('title').not().isEmpty().withMessage("Please provide title"),body('price').isFloat({gt:0}).not().isEmpty().withMessage("Price cannot empty"),async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        throw new InvalidParamsError(errors.array())
    }
    const {title,price,_id}=req.body
    const updated=await ticketModel.findOneAndUpdate({_id},{title,price},{new:true})
    res.status(201).send(updated)
})


export {TicketingRouter}