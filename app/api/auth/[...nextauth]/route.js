import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import User from '@models/user';
import  { connectToDB } from '@utils/database';
import mongoose from 'mongoose';

console.log({

    clientId:process.env.GOOGLE_ID,
    clientSecret:process.env.GOOGLE_CSECRET,

})


let isConnected = false;

export const connecttoDB=async() =>{
    mongoose.set('strictQuery', true);
}

if(isConected){
    console.log('MongoDB is already connected');
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
const handler=NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_CSECRET,
        })
    ],
    async session ({session}) {
     const sessionUser=await User.findOne({
        email:session.user.email
     })


     session.user.id=sessionUser._id.toString();
        return session;
    },
    async signIn({profile}){
       try{
         await connectToDB();
         const userExists=await User.findOne({
            email:profile.email
        });

        if (!userExists){
            await User.create({
                email:profile.email,
                username:profile.name.replace(" ","").
                toLowerCase(),
                image:profile.picture
            })
        }

         return true;
       }catch(error){
        console.log(error);
        return false;

       }
    }
})
export { handler as GET,handler as POST};
