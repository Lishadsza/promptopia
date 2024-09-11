import mongoose from 'mongoose';

let isConnected=false;

export const connecttoDB=async() =>{
    mongoose.set('strictQuery', true);
}

if(isConected){
    console.log('MongoDB is already connected')
    return;
}

try{
    await mongoose.connect(process.env.MONGODB_URI, {
    dbName:"share_prompt",
    useNewUrlParser:true,
    useUnifiedTopology:true,
    })

    isConnected=true;
    console.log('MongoDB connected')
} catch(error){

}