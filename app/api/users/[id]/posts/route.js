import {connectToDB} from '@utils/database';
import Prompt from '@models/prompt';


export const GET =async(request,{paramas})=>{
    try{
        await connectToDB();
        

        const prompts=await Prompt.find({creator:paramas.id}).populate('creator');

        return new Response(JSON.stringify(prompts),{
        status:200})
        
      }catch(error){
       return new Response("Failed to fetch all prompts",{
       status:500})
}
}