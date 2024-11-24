import { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getAuthorByName } from '../../../utils/getAuthors'
import { getPosts } from '../../../utils/getPosts'
import Link from 'next/link'
import LatestPosts from '@/src/app/components/layout/LatestPosts'
import SocialIcon from '@/src/app/components/ui/SocialIcon'

interface Props {
  params: { name: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function AuthorPage({ params }: Props) {
  const author = await getAuthorByName(decodeURIComponent(params.name))
  const posts = await getPosts()
  
  if (!author) {
    notFound()
  }

  const authorPosts = posts.filter(post => post.author.name === author.name)

  return (
    <div className='w-[90%] lg:w-[80%] mx-auto pt-10 pb-20 font-[family-name:var(--font-work-sans)]'>
      <div className='flex flex-col items-center gap-[34px] mb-16 bg-[var(--background-color-2)] p-[48px] rounded-[12px] duration-300'>
        <div className='flex items-center gap-4'>
        <Image 
          src={author.image}
          alt={author.name}
          width={64}
          height={64}
          className='rounded-full'
          />
          <div>
            <h1 className='text-[20px] font-[500] leading-[28px]'>{author.name}</h1>
            <p className='text-[14px] font-[400] leading-[20px] text-[var(--author-text-color)]'>{author.expertise.join(', ')}</p>
          </div>
        </div>
        <p className='text-center max-w-[600px] text-[18px] font-[400] leading-[26px] text-[var(--nav-links-text-color)]'>
          {author.bio}
        </p>
        
        <div className='flex gap-[8px] items-center'>
          {Object.entries(author.socialLinks).map(([platform, link]) => (
            <Link 
              key={platform}
              href={link}
              target="_blank"
              className='text-[var(--text-color)] hover:text-[#696A75] transition-colors'
            >
              <SocialIcon platform={platform} />
            </Link>
          ))}
        </div>
      </div>

      <div className='flex flex-col'>
        <LatestPosts />
      </div>
    </div>
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const author = await getAuthorByName(decodeURIComponent(params.name))
  
  if (!author) {
    return {
      title: 'Author Not Found'
    }
  }

  return {
    title: `${author.name} | MetaBlog Author`,
    description: author.bio,
    openGraph: {
      title: author.name,
      description: author.bio,
    },
  }
} 