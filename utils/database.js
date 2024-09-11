import mongoose from 'mongoose';

let isConnected=false;

export const connecttoDB=async() =>{
    mongoose.set('strictQuery',true);
}

if(isConected){
    console.log('MongoDB is already')
}