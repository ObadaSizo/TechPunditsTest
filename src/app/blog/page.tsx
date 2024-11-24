import React, { Suspense } from 'react'
import Ads from '.././components/styledElements/Ads'
import { getPosts } from '.././utils/getPosts'
import PostCard from '.././components/styledElements/PostCard'
import Loading from '.././components/styledElements/Loading'
import Link from 'next/link'
import Hero from '../components/layout/Hero'
import LatestPosts from '../components/layout/LatestPosts'

async function page() {
  const posts = await getPosts()
  return (
    <div className='w-[90%] lg:w-[80%] mx-auto'>
      <h1 className='text-[30px] font-[600] leading-[36px] pt-10 font-[family-name:var(--font-work-sans)] text-center'>Page Title</h1>
      <div className='w-full flex justify-center items-center pb-10 pt-[12px] font-[400] text-[#3B3C4A] text-[16px]'>Home <span className='text-[#E8E8EA] px-3 block'>|</span> <span className='text-[#696A75]'>Link One</span></div>
      <Hero posts={posts} />
      
      <LatestPosts />
      
      <div className='w-full flex justify-center items-center py-10'>
        <Ads />
      </div>
    </div>
  )
}

export default page