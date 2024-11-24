'use client'
import React from 'react'
import { useTheme } from '../../context/ThemeContext';

export default function SearchInput() {
    const { theme } = useTheme();
  return (
    <div className='flex items-center gap-2 relative'>
        <input
        type="text"
        placeholder="Search"
        className={`px-4 py-2 border rounded-[5px] text-[14px] font-[400] font-[family-name:var(--font-work-sans)] duration-300 ${
            theme === 'light' 
                ? 'bg-[#F4F4F5] text-[#52525B] placeholder-[#A1A1AA] border-none' 
                : 'bg-[#242535] text-[#fff] placeholder-[#A1A1AA] border-none'
        } lg:pe-4 xl:pe-10`}
        />
        <svg 
        className={`w-5 h-5 absolute right-2 ${theme === 'light' ? 'text-[#52525B]' : 'text-[#52525B]'}`} // adjust size as needed
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
        >
        <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
        />
        </svg>
    </div>
  )
}
