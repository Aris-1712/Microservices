import request from 'supertest'
import {app} from '../../app'

import { generateSession } from './GlobalTest'
it("check to post a new ticket and get it using the id",async()=>{
    let response=await request(app).post('/api/ticketing').set("Cookie",generateSession("aris.gani@gmail.com","1234")).send({
        title:"neeeew",price:123
    }).expect(201)
    let getTicket=await request(app).get(`/api/ticketing/${response.body._id}`).set("Cookie",generateSession("aris.gani@gmail.com","1234")).expect(201)

    expect(getTicket.body.title).toBe("neeeew")


})

it("check to get a ticket with an incorrect id",async()=>{
    return await request(app).get('/api/ticketing/123123123123').set("Cookie",generateSession("aris.gani@gmail.com","1234")).expect(500)
})

