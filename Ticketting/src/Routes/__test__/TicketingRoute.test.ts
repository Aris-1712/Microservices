import request from 'supertest'
import { app } from '../../app'
import { generateSession } from './GlobalTest'
it("check if Routes are  working without cookies ", async () => {
    return await request(app).post('/api/ticketing').send({}).expect(500)
})
it("check if Routes are  working with cookies ", async () => {
    let session =  generateSession("asdasdasd@asdasd.com", "asdasdasdasd")
    let response= await request(app).post('/api/ticketing').set("Cookie", session).send({})
    expect(response.status).not.toEqual(500)

})
it("check if Routes are  checking body without title and price ", async () => {
    let session =  generateSession("asdasdasd@asdasd.com", "asdasdasdasd")
    return await request(app).post('/api/ticketing').set("Cookie", session).send({title:"",price:""}).expect(401)
})
it("check if Routes are  checking body with title and price ", async () => {
    let session =  generateSession("asdasdasd@asdasd.com", "asdasdasdasd")
    return await request(app).post('/api/ticketing').set("Cookie", session).send({title:"asdasd",price:10}).expect(201)
})
it("check if Routes are  checking body with title and no price ", async () => {
    let session =  generateSession("asdasdasd@asdasd.com", "asdasdasdasd")
    return await request(app).post('/api/ticketing').set("Cookie", session).send({title:"asdasd",price:""}).expect(401)
})
it("check if Routes are  checking body with  title and invalid price ", async () => {
    let session =  generateSession("asdasdasd@asdasd.com", "asdasdasdasd")
    return await request(app).post('/api/ticketing').set("Cookie", session).send({title:"asdads",price:-200}).expect(401)
})