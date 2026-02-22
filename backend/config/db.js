import express from 'express';
import mongoose  from 'mongoose';

export const connectDB=async()=>{
   await mongoose.connect("mongodb+srv://samalbhagyashree75_db_user:cL8jUtLOaFUTOl96@cluster0.vwqucix.mongodb.net/").then(()=>{console.log("DB Connected")});
}
