'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import ThemeToggle from '../actions/ThemeToggle'
import SearchInput from '../actions/SearchInput';
import Logo from '../custom/Logo';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='h-[100px] w-full bg-[var(--background-color)] fixed left-1/2 -translate-x-1/2 z-20 font-[family-name:var(--font-work-sans)] text-[16px] font-[400] duration-300'>
        <div className='h-full w-[90%] lg:w-[80%] mx-auto flex items-center justify-between'>
            <div className='flex items-center gap-2'>
                <Logo/>
                <h1 className={`text-[22px] font-[400] font-[family-name:var(--font-plus-jakarta-sans)] duration-300 text-[var(--logo-text-color)]`}>Meta<span className='font-[800]'>Blog</span></h1>
            </div>
            
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden z-30 text-[var(--nav-links-text-color)]"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Mobile Menu with Search and Theme Toggle */}
            <div className={`fixed top-[100px] right-0 w-full bg-[var(--background-color)] p-4 
              lg:relative lg:top-0 lg:p-0 lg:bg-transparent lg:w-auto lg:flex lg:items-center
              transform transition-transform duration-300 ease-in-out
              ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}`}>
                 {/* Search and Theme Toggle */}
                 <div className="flex flex-col lg:flex-row items-center gap-4 lg:hidden mb-5">
                    <ThemeToggle />
                    <SearchInput />
                </div>
                <ul className='flex flex-col lg:flex-row items-center gap-6 lg:gap-8 xl:gap-10 mb-6 lg:mb-0 text-[var(--nav-links-text-color)]'>
                    <Link href="/home">Home</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/home/1">Single Post</Link>
                    <Link href="/home/author/Jason%20Francisco">Pages</Link>
                    <Link href="/">Contact</Link>
                </ul>
                {/* Search and Theme Toggle */}
            </div>
                <div className="hidden lg:flex flex-col lg:flex-row items-center gap-2 xl:gap-4">
                    <SearchInput />
                    <ThemeToggle />
                </div>
        </div>
    </nav>
  )
}
