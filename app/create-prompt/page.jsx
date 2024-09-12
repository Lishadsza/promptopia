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

    }
  return (
    <Form 
    type="Create"
    post={post}
    setPost={setPost}
    submitting={submitting}
    handLeSubmit={createPrompt}
   />
  )
}

export default CreatePrompt