import React from 'react'
import SearchFiled from '@/components/SearchFiled'
import StartupCard from '@/components/StartupCard';
import {client} from '@/sanity/lib/client'
import {STARTUPS_QUERY} from '@/sanity/lib/queries'
import { sanityFetch,SanityLive } from '@/sanity/lib/live';


type SearchParams =
{
  query : string
}

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

export default async function Home({searchParams}:{searchParams:SearchParams}) {
  const query = searchParams?.query || "";
  const params = {search : query || null}
  //console.log("query",query)

  //const posts:Post[] = await client.fetch(STARTUPS_QUERY); Ordinary fetch
  const {data :posts}= await sanityFetch({query:STARTUPS_QUERY,params}) // Live fetch
  //console.log("posts",posts)

  /*
  const posts = [
    {
      createdAt : '2025-9-23',
      views : 50,
      author : {
        id:'1',
        name:'Mohamed'
      },
      id:'10', 
      description :"sdc bsdcsdcssdcsdcscassdasdcsdvdsvsscwsfcwef",
      image: 'https://www.challenge.ma/wp-content/uploads/2024/04/GettyImages-1290480010_477951_eitkzj.jpg',
      category:'Robots',
      title:'We are Robots masters',

    }
  ]
    */
  return (
    <div>
          <section className='pink_container'>
          <h1 className='heading'> Pith your Startup and <br />Connect with Enterpreneurs</h1>
          <p className='sub-heading'>Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions</p>
          <SearchFiled  />
        </section>
        {/* The posts */}
        <section className='section_container bg-white-100'>
          <p className='font-josefin font-bold text-[30px]'>
            {
              query ? `The Serch results for ${query}`:"All Startups"
            }
          </p>
          <ul className='mt-7 card_grid'>
           {
            (posts.length > 0) ?
            (
              posts.map((post:Post)=>(
                <StartupCard key={post._id} startup = {post} />
              ))
            )
            :
            (
              <p className='no-result'>No Startups found !</p>
            )
           }
          </ul>
          
        </section>
        <SanityLive />
    </div>
  )
}




















