'use client';
import Image from 'next/image'
import React from 'react'
import BlackLogo from '@/public/logo-black.png'
import WhiteLogo from '@/public/logo-white.png'
import { useTheme } from '../../context/ThemeContext';

export default function Logo() {
  const { theme } = useTheme();

  return (
    <div className="relative w-[36px] h-[36px]">
        <Image
            src={BlackLogo} 
            alt="MetaBlog" 
            width={36} 
            height={36} 
            className={`absolute transition-opacity duration-300 ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`}
        />
        <Image 
            src={WhiteLogo} 
            alt="MetaBlog" 
            width={36} 
            height={36} 
            className={`absolute transition-opacity duration-300 ${theme === 'light' ? 'opacity-0' : 'opacity-100'}`}
        />
    </div>
  )
}
