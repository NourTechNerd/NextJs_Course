import React from 'react'
import { Post } from '../../page';
import {client} from '@/sanity/lib/client'
import {STARTUP_QUERY} from '@/sanity/lib/queries'
import { formatDate } from '@/lib/utils';
import Image from 'next/image'
import Link from 'next/link'
import markdownit from 'markdown-it'
import { write_client } from '@/sanity/lib/write-client';

const md = markdownit();

export default async function Startup_page({params}:{params : Promise<{id :string}> }) {
  const id = (await params).id
  const post:Post = (await client.fetch(STARTUP_QUERY,{id :id})); //Ordinary fetch
  //console.log("post :",post)
  const parsedContent = md.render(post?.Pitch || '');
  //console.log("parsedContent :",parsedContent)
  // Update the number of views 
  write_client.patch(id).set({views:post.views +1}).commit();
  return (
     <div className='bg-white'>
        <section className='pink_container'>
          <h1 className='tag'> {formatDate(post._createdAt)}</h1>
          <h1 className='heading'>{post.title}</h1>
          <p className='sub-heading'>{post.description}</p>
      
        </section>

        <section className='section_container relative'>
           <Image 
              src={post.image} 
              alt= {"startup image"} 
              width = {400} 
              height={400}
              className='rounded-md w-full h-auto'
            />
            <div className='flex flex-between mt-10'>
              <div className='flex flex-row gap-2 items-center'>
                <Link href = {`/user/${post.Author._id}`}>
                    <img src= {post.Author.image} alt="author avatar" className='rounded-full w-10 h-10 drop-shadow-lg' />
                </Link>

                <div className='flex flex-col'>
                  <h1 className='font-blinker font-bold text-xl'>{post.Author.name} - {post.title}</h1>
                  <p className='font-blinker text-black-300 font-bold'>@{post.Author.username}</p>

                </div>
              </div>
              
              <p className='category-tag font-blinker'>{post.category}</p>

            </div>
            <h1 className='text-3xl font-blinker mt-7'>Pitch Details</h1>
            {
              parsedContent ? 
              (<article 
                className='prose mt-5 font-blinker'
                dangerouslySetInnerHTML={{__html : parsedContent}} />)
              :
              ( <p className='no-result'>
                  No details found
              </p>
              )
            }
            <hr className='divider' />
            <div className='absolute right-2 bottom-2'>
              <p className='text-lg font-blinker font-bold bg-primary-100 rounded-full p-2'>Views : {post.views}</p>
          </div>
            {/* TODO: SIMILAR STARTUPS */}
        </section>

     </div>
  )
}
