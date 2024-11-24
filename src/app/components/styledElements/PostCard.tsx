import Image from 'next/image'
import Label from './Label'
import Link from 'next/link'

interface PostCardProps {
  post: {
    id: number
    mainImage: string
    label: string
    title: string
    shortDescription: string
    author: {
      name: string
      image: string
      date: string
    }
  }
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="flex flex-col relative p-4 pb-[80px] gap-4 bg-[var(--background-color)] rounded-lg overflow-hidden shadow-sm border-solid border-[var(--border-color)] border-[1px] font-[family-name:var(--font-work-sans)] duration-300">
      <Link href={`/home/${post.id}`} className="flex flex-col gap-4">
        <div className="relative h-[240px] w-full">
          <Image
            src={post.mainImage}
            alt={post.title}
            fill
            className="object-cover rounded-[6px]"
          />
        </div>
        
        <div className="flex flex-col items-start gap-3">
          <Label text={post.label} type='notfilled' />
          
          <h3 className="text-[24px] font-[600] leading-[28px] line-clamp-3">
            {post.title}
          </h3>
        </div>
      </Link>
      
      <div className="flex items-center gap-3 mt-2 absolute bottom-4">
        <Image
          src={post.author.image}
          alt={post.author.name}
          width={40}
          height={40}
          className="rounded-full"
        />
        <div className="flex gap-4 items-center">
          <Link 
            href={`/home/author/${encodeURIComponent(post.author.name)}`}
            className='text-[16px] text-[#97989F] hover:brightness-125 transition-colors'
          >
            {post.author.name}
          </Link>
          <span className="text-[#97989F] text-sm">{post.author.date}</span>
        </div>
      </div>
    </div>
  )
}