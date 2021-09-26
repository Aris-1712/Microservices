import Mongoose from 'mongoose'

beforeAll(async()=>{
    // mongod=await MongoMemoryServer.create()
    // const mongouri=mongod.getUri()
    await Mongoose.connect("mongodb://localhost:27017/ticktest")
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