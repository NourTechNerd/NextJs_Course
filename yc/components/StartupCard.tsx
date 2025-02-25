import React from 'react'
import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'


type Post = 
{
    _createdAt : string,
    views : number,
    _id:string, 
    description :string,
    image: string,
    category:string,
    title:string,
    slug:string,
    Pitch:string,
    Author : {
        _id:number,
        name:string,
        username:string,
        email:string,
        image:string,
        bio:string,
      },

  }

type StartupCardTypes = {
    startup : Post,
}

export default function StartupCard({startup}:StartupCardTypes) {
  return (
    <li 
    className='startup-card w-auto flex flex-col'>
        <div className='flex-between'>
           <p className='startup-card_date font-blinker'>
             {formatDate(startup._createdAt)}
           </p>
           <div className='flex flex-row gap-1.5'>
            <EyeIcon  className='text-primary'/>
            <span className='font-josefin font-semibold'>{startup.views}</span>
           </div>
        </div>
        <div className='flex-between'>
            <div className='flex flex-col'>
                <Link href = {`/user/${startup.Author._id}`}>
                <p className='font-blinker font-bold mt-2'>{startup.Author.name}</p>
                </Link>
                <Link href = {`/startup/${startup._id}`}>
                <p className='font-blinker font-bold text-2xl line-clamp-1 mt-3'>{startup.title}</p>
                </Link>
            </div>
            <Link href = {`/user/${startup.Author._id}`}>
                  <Image 
                  src={startup.Author.image} 
                  alt= {"user avatar"} 
                  width = {40} 
                  height={40}
                  className='rounded-full'
                  />
            </Link>

        </div>
        <p className='text-black-300 font-blinker mt-1 line-clamp-1'>{startup.description}</p>
        <Image 
            src={startup.image} 
            alt= {"user avatar"} 
            width = {400} 
            height={200}
            className='rounded-md mt-2'
        />
        <div className='flex-between mt-3'>
            <Link
            href = {`/?query=${startup.category.toLowerCase()}`}
            >
            <p className='font-blinker font-bold'>{startup.category}</p>
            </Link>        
     
            <Link
            href = {`/startup/${startup._id}`}
            className='startup-card_btn'
            >
            <p>Details</p>
            </Link>
                  
        </div>



    </li>
  )
}
