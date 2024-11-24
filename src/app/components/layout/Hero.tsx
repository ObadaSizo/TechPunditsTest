'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Label from '../styledElements/Label';
import { debounceProcess } from '@/src/app/utils/helpers';

interface Author {
  name: string;
  image: string;
  date: string;
}

interface Post {
  id: number;
  mainImage: string;
  label: string;
  title: string;
  author: Author;
}

interface HeroProps {
  posts: Post[];
}

export default function Hero({ posts }: HeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      debounceProcess(() => {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % posts.length);
          setIsTransitioning(false);
        }, 500);
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [posts.length]);

  const post = posts[currentIndex];

  return (
    <div className="relative w-full h-screen">
      <div className='relative h-[600px] rounded-[12px] overflow-hidden'>
        <div className={`transition-opacity duration-1000 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <Image 
            src={post.mainImage}
            alt={post.title} 
            className='object-cover w-full h-full'
            width={1920}
            height={1080} 
          />
          <div className="absolute inset-0 bg-[#14162466]"></div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start absolute bottom-[170px] lg:bottom-[100px] left-[4px] w-[100%] lg:w-[70%] h-[300px] bg-[transparent] rounded-[12px] p-[40px] font-[family-name:var(--font-work-sans)]">
        <div className={`w-full transition-opacity duration-1000 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
            <div className='flex flex-col items-start gap-[16px]'>
                <Label text={post.label} />
                <h2 className='text-[25px] lg:text-[36px] font-[600] leading-[40px] line-clamp-3 text-white'>{post.title}</h2>
            </div>
          <div className='flex items-center gap-[20px] pt-[24px]'>
            <Image 
              src={post.author.image} 
              alt={post.author.name} 
              className='w-[40px] h-[40px] rounded-full' 
              width={40} 
              height={40} 
            />
            <span className='text-[12px] lg:text-[16px] text-white'>{post.author.name}</span>
            <span className='text-[12px] lg:text-[16px] text-white'>{post.author.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}