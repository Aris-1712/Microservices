import {MongoMemoryServer} from 'mongodb-memory-server'
import Mongoose from 'mongoose'
import {app} from '../app'


let mongod:any
beforeAll(async()=>{
    // mongod=await MongoMemoryServer.create()
    // const mongouri=mongod.getUri()
    await Mongoose.connect("mongodb://localhost:27017/ecomtest")
})

beforeEach(async()=>{
    const collecions=await Mongoose.connection.db.collections()
    for(let connection of collecions){
        await connection.deleteMany({})
    }
})
afterAll(async()=>{
    // await mongod.stop()
    await Mongoose.connection.close()
})