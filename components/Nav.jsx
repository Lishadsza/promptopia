'use client';
import Link from 'next/link';
import Image from 'next/image';
import {usestate,useEffect, useState} from 'react';
import {  signIn ,signOut,useSession,getproviders} from 'next-auth/react';

const nav = () => {
    const isUserLoggedIn=false;
    const [providers,setproviders]=useState
    (null);


    useEffect(() =>{
        const setProviders=async () => {
            const response =await getProviders();
            setProviders(presponse);
        }
        setProviders();
    },[])

  return (
    <nav className="flex-between w-full mb-16
    pt-3 ">
      <Link href="/" className="flex gap-2 flex-center">
         <Image
         src="/assets/images/logo.svg"
         alt="promptopia Logo"
         width={30}
         height={30}
         className="object-contain"
         />
         <p className="logo_text">Promptopia</p>
      </Link>
      <div className="sm:flex hidden">
       {isUserLoggedIn ? (
       <div className= "flex gap-3 md:gp-5">
        <Link href="/create-prompt"
        className="black_btn">
            Create Post
        </Link>
        <button type="button" onClick={signOut} className="outline_btn">
            Sign Out
        </button>
        <Link href="/profile"> 
         <Image src="/assets/images/logo.svg" width={37}
           height={37}
           className="rounded-full" alt="profile"/>
        </Link>
       </div>
       ): ( 
        <>

        </>
       )}
       </div>
    </nav>
  )
}

export default nav