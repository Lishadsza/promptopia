import NextAuth from "next-auth";
import GoogleProvider from 'next-auth/providers/google';
import User from '@models/user';
import { connectToDB } from '@utils/database';


/* 
  
console.log({
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_CSECRET,
})*/
  
/* removed the local connection 

let isConnected = false;

export const connectToDB = async () => {
 
    mongoose.set('strictQuery', true);
    if (isConnected) {
        console.log('MongoDB is already connected');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        isConnected = true;
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};
*/
 
const handler=NextAuth({
    providers:[
        GoogleProvider({
            clientId:process.env.GOOGLE_ID,
            clientSecret:process.env.GOOGLE_CSECRET,
        }),
    ],
    callbacks:{
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

         /*checking if user exists*/
         const userExists=await User.findOne({
            email:profile.email
        });
   /*if doesnt exist then create new*/
        if (!userExists){
            await User.create({
                email:profile.email,
                username:profile.name.replace(" ","").
                toLowerCase(),
                image:profile.picture,
            });
        }

         return true;
       }catch(error){
        console.log("Error checking if user exists:",error.message);
        return false;

       }
    },
}
})
export { handler as GET,handler as POST};





