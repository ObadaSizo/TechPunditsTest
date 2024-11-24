import Link from 'next/link'
import React from 'react'
import Logo from '../custom/Logo'

export default function Footer() {
  return (
    <footer className='bg-[var(--footer-color)] font-[family-name:var(--font-plus-jakarta-sans)] py-[64px] duration-300'>
        <div className='w-[90%] md:w-[90%] lg:w-[80%] mx-auto'>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-6">
                <div className="w-full lg:w-[25%] flex flex-col items-start gap-[12px] text-[var(--nav-secondry-text-color)] text-[16px] font-[400] leading-[24px]">
                    <h3 className="text-[var(--text-color)] text-[18px] font-[600]">About</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                    <div>
                        <p className='mt-5 leading-[24px]'>Email: <span>info@jstemplate.net</span></p>
                        <p className='leading-[24px]'>Phone: <span>880 123 456 789</span></p>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-[21%] flex justify-start lg:justify-center text-[var(--nav-links-text-color)] text-[16px] font-[400]">
                    <div className='flex flex-col items-start gap-[24px]'>
                        <h3 className="text-[var(--text-color)] text-[18px] font-[600]">Quick Link</h3>
                        <div className='flex flex-col items-start gap-[8px]'>
                            <Link href={"/"}>Home</Link>
                            <Link href={"/"}>About</Link>
                            <Link href={"/"}>Blog</Link>
                            <Link href={"/"}>Archived</Link>
                            <Link href={"/"}>Author</Link>
                            <Link href={"/"}>Contact</Link>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 lg:w-[21%] flex justify-start lg:justify-center text-[var(--nav-links-text-color)] gap-[24px] text-[16px] font-[400]">
                    <div className='flex flex-col items-start gap-[24px]'>
                        <h3 className="text-[var(--text-color)] text-[18px] font-[600]">Category</h3>
                        <div className='flex flex-col items-start gap-[8px]'>
                            <Link href={"/"}>Lifestyle</Link>
                            <Link href={"/"}>Technology</Link>
                            <Link href={"/"}>Travel</Link>
                            <Link href={"/"}>Business</Link>
                            <Link href={"/"}>Economy</Link>
                            <Link href={"/"}>Sports</Link>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-[33.5%] flex flex-col justify-center items-center bg-[var(--footer-box-bg-color)] p-6 lg:p-8 gap-[30px] font-[family-name:var(--font-work-sans)] rounded-[12px]">
                    <div className='flex flex-col items-center gap-[8px]'>
                        <h3 className="text-[var(--text-color)] text-[20px] font-[600] leading-[24px]">Weekly Newsletter</h3>
                        <p className='text-[16px] font-[400] text-[var(--nav-secondry-text-color)]'>Get blog articles and offers via email</p>
                    </div>
                    <div className='flex flex-col items-center gap-[8px] w-full'>
                        <div className='relative w-full'>
                            <input type="email" placeholder="Enter your email" className="w-full py-3 px-3 pe-8 rounded-[6px] border border-[var(--border-secondry-color)] bg-[var(--background-color)]" />
                            <svg className='absolute right-2 top-1/2 -translate-y-1/2' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.4375 4.375C2.91973 4.375 2.5 4.79473 2.5 5.3125V14.6875C2.5 15.2053 2.91973 15.625 3.4375 15.625H16.5625C17.0803 15.625 17.5 15.2053 17.5 14.6875V5.3125C17.5 4.79473 17.0803 4.375 16.5625 4.375H3.4375ZM1.25 5.3125C1.25 4.10438 2.22938 3.125 3.4375 3.125H16.5625C17.7706 3.125 18.75 4.10438 18.75 5.3125V14.6875C18.75 15.8956 17.7706 16.875 16.5625 16.875H3.4375C2.22938 16.875 1.25 15.8956 1.25 14.6875V5.3125Z" fill="#696A75"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M3.88165 5.86629C4.09357 5.59382 4.48625 5.54474 4.75871 5.75665L10 9.83321L15.2413 5.75665C15.5138 5.54474 15.9064 5.59382 16.1183 5.86629C16.3303 6.13875 16.2812 6.53143 16.0087 6.74335L10.3837 11.1183C10.158 11.2939 9.84198 11.2939 9.61629 11.1183L3.99129 6.74335C3.71882 6.53143 3.66974 6.13875 3.88165 5.86629Z" fill="#696A75"/>
                            </svg>
                        </div>
                        <button className="bg-[#4B6BFB] rounded-[6px] py-3 text-white w-full">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='bg-[var(--border-color)] my-[32px] h-[1px]' />
            <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-0">
                <div className="flex items-center gap-[10px]">
                    <Logo />
                    <div className='flex flex-col'>
                        <h1 className={`text-[20px] font-[400] leading-[28px] font-[family-name:var(--font-plus-jakarta-sans)] duration-300 text-[var(--logo-text-color)]`}>Meta<span className='font-[800]'>Blog</span></h1>
                        <h3 className='text-[12px] lg:text-[16px] font-[400] text-[var(--nav-links-text-color)]'>© <span className='text-[var(--footer-span)]'>JS Template</span> 2023. All Rights Reserved.</h3>
                    </div>
                </div>
                <div className="flex flex-wrap gap-4 sm:gap-[30px] text-[var(--nav-links-text-color)] text-[16px] font-[400]">
                    <Link href={"/"}>Terms of Use</Link>
                    <Link href={"/"}>Privacy Policy</Link>
                    <Link href={"/"}>Cookie Policy</Link>
                </div>
            </div>
        </div>
    </footer>
  )
}
