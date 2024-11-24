import Image from 'next/image'
import React from 'react'
import HeroImage from '../../../public/main-bg.png'
import dummy from '../../../public/usersIcons/user5.png'
import Label from '.././components/styledElements/Label'
import Ads from '.././components/styledElements/Ads'
import LatestPosts from '../components/layout/LatestPosts'


async function page() {
  return (
    <div className='w-[90%] lg:w-[80%] mx-auto'>
      {/* Main container for the hero section */}
      <div className="relative w-full h-screen">
        {/* Hero image container */}
        <div className='relative h-[600px] rounded-[12px] overflow-hidden'>
          <Image src={HeroImage} alt='MetaBlog' className='object-cover w-full h-full' />
          {/* Overlay for the hero image */}
          <div className="absolute inset-0 bg-[#14162466] opacity-40"></div>
        </div>
        {/* Content overlay on the hero image */}
        <div className='flex flex-col gap-[16px] justify-center items-start absolute w-[90%] top-[300px] left-[50%]  -translate-x-1/2 lg:-translate-x-0 lg:top-[360px] lg:left-[64px] lg:w-[600px] lg:h-[300px] bg-[--background-color] rounded-[12px] shadow-md p-[40px] font-[family-name:var(--font-work-sans)]'>
          <Label text='Technology' />
          <h2 className='text-[25px] lg:text-[36px] font-[600] leading-[40px]'>The Impact of Technology on the Workplace: How Technology is Changing</h2>
          <div className='flex items-center gap-[20px]'>
            <Image src={dummy} alt='MetaBlog' className='w-[40px] h-[40px] rounded-full' />
            <span className='opacity-60 text-[12px] lg:text-[16px]'>Jason Francisco</span>
            <span className='opacity-60 text-[12px] lg:text-[16px]'>August 20, 2022</span>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-center items-center py-10'>
        <Ads />
      </div>
      
      <LatestPosts />
      
      <div className='w-full flex justify-center items-center py-10'>
        <Ads />
      </div>
    </div>
  )
}

export default page