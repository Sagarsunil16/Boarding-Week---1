import express from 'express'
import dotenv from 'dotenv'
import userRouter from './src/routes/user.router.js'
import loggerMiddleware from './src/middleware/loggerMiddleware.js'
import connectDb from './src/config/db.js'
import eventEmitter from 'events'

dotenv.config()
connectDb()
const app =  express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(loggerMiddleware)
app.use('/api/',userRouter)

const emitter = new eventEmitter()
emitter.on("greet",(name)=>{
  console.log(`Hello ${name}!. How you doing`)
})

emitter.emit("greet","Sagar")

app.use((error,req,res,next)=>{
    console.error(error); // Optional: log the error for debugging
  res.status(500).json({ message: "Internal Server Error" });
})

app.listen(port,()=>{
    console.log(`Server is listening on http://localhost:${port}`)
})