import Image from "next/image"

type SocialPlatform = 'twitter' | 'facebook' | 'instagram' | 'youtube' | 'github'

interface SocialIconProps {
  platform: string
  size?: number
}

export default function SocialIcon({ platform, size = 14 }: SocialIconProps) {
  const iconPath = `/icons/${platform.toLowerCase()}.svg`
  
  return (
    <div className="w-[32px] h-[32px] rounded-[8px] flex items-center justify-center bg-[#696A75]">
      <Image
        src={iconPath}
        alt={`${platform} icon`}
        width={size}
        height={size}
        />
      </div>
  )
} 