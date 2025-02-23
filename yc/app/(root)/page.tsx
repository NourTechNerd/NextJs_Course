import React from 'react'
import SearchFiled from '@/components/SearchFiled'
import StartupCard from '@/components/StartupCard';




type SearchParams =
{
  query : string
}


export default function Home({searchParams}:{searchParams:SearchParams}) {
  const query = searchParams?.query || "";
  //console.log("query",query)
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
              posts.map((post)=>(
                <StartupCard key={post.id} startup = {post} />
              ))
            )
            :
            (
              <p className='no-result'>No Startups found !</p>
            )
           }
          </ul>
          
        </section>
    </div>
  )
}




















