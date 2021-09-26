import  request from 'supertest';
import { app } from '../../../app';

it('send post request to signup route with email and password return status 200'
,async()=>{
    return request(app).post('/api/signup').send({
        email:"test.test@test.com",
        password:"Arisgani17"
    }).expect(200)
}
)

it('returns 400 invalid email'
,async()=>{
    return request(app).post('/api/signup').send({
        email:"test.testtest.com",
        password:"Arisgani17"
    }).expect(500)
}
)

it('returns 400 invalid pass'
,async()=>{
    return request(app).post('/api/signup').send({
        email:"test.testtest.com",
        password:"Arisgani17"
    }).expect(500)
}
)

it('disallows duplicate email'
,async()=>{
    await request(app).post('/api/signup').send({
        email:"aris.gani@gmail.com",
        password:"Arisgani17"
    }).expect(200)

    return request(app).post('/api/signup').send({
        email:"aris.gani@gmail.com",
        password:"Arisgani17"
    }).expect(500)
}
)


it('jwt cookie'
,async()=>{
    const response=await request(app).post('/api/signup').send({
        email:"test.test@test1.com",
        password:"Arisgani17"
    }).expect(200)
    expect(response.get('Set-Cookie')).toBeDefined()
}
)