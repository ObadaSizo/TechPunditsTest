import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getPosts } from '../../utils/getPosts'
import Label from '../../components/styledElements/Label'
import Ads from '../../components/styledElements/Ads'
import Link from 'next/link'

interface Props {
  params: { postId: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Post({ params }: Props) {
  const posts = await getPosts()
  const post = posts.find(post => post.id === parseInt(params.postId))
  
  if (!post) {
    notFound()
  }

  // Calculate middle index for sections
  const halfLength = Math.ceil(post.content.sections.length / 2)
  const firstHalfSections = post.content.sections.slice(0, halfLength)
  const secondHalfSections = post.content.sections.slice(halfLength)

  return (
    <div className='w-[90%] lg:max-w-[800px] mx-auto pt-10 pb-20 font-[family-name:var(--font-work-sans)]'>
      {/* Label */}
      <Label text={post.label} />

      {/* Title */}
      <h1 className='text-[36px] font-[600] leading-[40px] mb-6 mt-4'>{post.title}</h1>
      
      {/* Author info */}
      <div className='flex items-center gap-4 mb-8'>
        <Image 
          src={post.author.image} 
          alt={post.author.name} 
          width={40} 
          height={40} 
          className='rounded-full'
        />
        <Link 
          href={`/home/author/${encodeURIComponent(post.author.name)}`}
          className='text-gray-600 hover:text-[#696A75] transition-colors'
        >
          {post.author.name}
        </Link>
        <span className='text-gray-600'>{post.author.date}</span>
      </div>

      {/* Main Image */}
      <div className='relative h-[400px] rounded-[12px] overflow-hidden mb-8'>
        <Image 
          src={post.mainImage} 
          alt={post.title}
          fill
          className='object-cover'
        />
      </div>
      
      <div className='prose max-w-none'>
        {/* Intro */}
        <div className='text-[var(--paragraph-color-bolgs)] font-[400] text-[20px] leading-[32px] font-[family-name:var(--font-source-serif)]' dangerouslySetInnerHTML={{ __html: post.content.intro }} />
        
        {/* First half of sections */}
        {firstHalfSections.map((section, index) => (
          <div className='flex flex-col gap-4 mt-5' key={index}>
            <h2 className='text-[24px] font-[600] leading-[28px] text-[var(--text-color)]'>{section.title}</h2>
            <div className='text-[var(--paragraph-color-bolgs)] font-[400] text-[20px] leading-[32px] font-[family-name:var(--font-source-serif)]' dangerouslySetInnerHTML={{ __html: section.content }} />
          </div>
        ))}
        
        {/* Quote */}
        <blockquote className='relative italic font-[400] text-[24px] leading-[32px] font-[family-name:var(--font-source-serif)] my-8 bg-[var(--background-color-2)] rounded-[12px] p-[32px] box-shadow-left'>
        “ {post.content.quote} <span>”</span>
        </blockquote>

        {/* Sub Image */}
        <div className='relative h-[400px] rounded-[12px] overflow-hidden my-8'>
          <Image 
            src={post.content.subImage} 
            alt={post.title}
            fill
            className='object-cover'
          />
        </div>
        <div className='w-full flex justify-center items-center py-10'>
            <Ads />
        </div>
        {/* Second half of sections */}
        {secondHalfSections.map((section, index) => (
          <div className='flex flex-col gap-4 mt-5' key={index}>
            <h2 className='text-[24px] font-[600] leading-[28px] text-[var(--text-color)]'>{section.title}</h2>
            <div className='text-[var(--paragraph-color-bolgs)] font-[400] text-[20px] leading-[32px] font-[family-name:var(--font-source-serif)]' dangerouslySetInnerHTML={{ __html: section.content }} />
        </div>
        ))}
      </div>
    </div>
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const posts = await getPosts()
  const post = posts.find(post => post.id === parseInt(params.postId))
  
  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }

  return {
    title: post.title,
    description: post.shortDescription,
    openGraph: {
      title: post.title,
      description: post.shortDescription,
    },
  }
}

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({
    postId: post.id.toString(),
  }))
}