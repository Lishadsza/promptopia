'use client';
import {useState} from 'react'
import {useSession} from 'next-auth/react';
import {userouter} from 'next/navigation';
import Form from '@components/Form';
const  CreatePrompt= () => {
    const [submitting,setSubmitting]=useState(false);
    const[post,setPost]=useState({
        prompt:'',
        tag:'',
    });

    const createPrompt=async(e)=>{
      e.preventDefault();

      setSubmitting(true);
      try{
        const respone=await fetch('/api/prompt/new',
          {
            method:'POST',
            body:JSON.stringify({
              prompt:post.prompt,
              userId:session?.user.id,
              tag:post.tag
            })
          })
          if(respone.ok){
            Router.push('/');
          }
      }catch(error){
        console.log(error);
      }finally{
        setSubmitting(false);
      }

      }

    
  return (
    <Form 
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handLeSubmit={createPrompt}
   />
  );
};


export default CreatePrompt