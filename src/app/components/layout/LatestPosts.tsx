import React, { Suspense } from 'react'
import { getPosts } from '../../utils/getPosts'
import PostCard from '../styledElements/PostCard'
import Loading from '../styledElements/Loading'
import Link from 'next/link'

async function Posts() {
  const posts = await getPosts()
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.slice(0, 9).map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}

export default async function LatestPosts() {
  return (
    <>
      <div className='w-full pt-10 pb-8 font-[family-name:var(--font-work-sans)]'>
        <h2 className='text-[24px] font-[700] leading-[28px]'>Latest Post</h2>
      </div>
      <div>
        <Suspense fallback={<Loading />}>
          <Posts />
        </Suspense>
        <div className='w-full flex justify-center items-center py-10'>
          <Link 
            className='text-[16px] font-[500] leading-[24px] text-[#696A75] font-[family-name:var(--font-work-sans)] border-[1px] p-4 py-3 rounded-[6px] border-[#696A754D]' 
            href={"/"}
          >
            View All Posts
          </Link>
        </div>    
      </div>
    </>
  )
} 