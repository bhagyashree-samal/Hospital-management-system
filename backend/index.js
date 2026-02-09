import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import { clerkMiddleware } from '@clerk/express'
import { connectDB } from './config/db.js';
import doctorRouter from './routes/doctorRouter.js';

const app=express();
const port=8080;

const corsOption={
    origin:"http://localhost:5173",
    credentials:true
}

app.use(cors(corsOption));
app.use(clerkMiddleware());
app.use(express.json({limit:"20mb"}));
app.use(express.urlencoded({limit:"20mb",extended:true}));

app.use("/api/doctors",doctorRouter);


app.listen(port,()=>{
    console.log("Server Started on http://localhost:8080 ");
    connectDB();
})