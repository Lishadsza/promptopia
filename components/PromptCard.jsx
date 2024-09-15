"use client"

import {useState} from 'react';
import Image from 'next/image';
import {useSession} from 'next-auth/react';
import {usePathname,useRouter} from 'next/navigation';

const PromptCard = ({ post,handleTagClick,handleEdit,handleDelete}) => {

  const creatorImage = post?.creator?.image || '/default-avatar.png'; 
  const creatorUsername = post?.creator?.username || 'Unknown User'; 
  const creatorEmail = post?.creator?.email || 'No Email'; 




  return (
    <div className="prompt_card">
      <div className='flex justify-between items-start gap-5'>
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image
          src= {creatorImage}/*{post.creator.image}*/
          alt="user_image"
          width={40}
          height={40}
          className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3>
              {creatorUsername}
              </h3>  {/*{post.creator.username}*/}
            <p>{creatorEmail}</p>  {/*{post.creator.email}*/}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PromptCard