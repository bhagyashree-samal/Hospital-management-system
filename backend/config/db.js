import express from 'express';
import mongoose  from 'mongoose';

export const connectDB=async()=>{
   await mongoose.connect("mongodb+srv://samalbhagyashree75_db_user:bAKcF2bm8pJBZNn3@cluster0.rkqt71v.mongodb.net/?appName=Cluster0").then(()=>{console.log("DB Connected")});
}