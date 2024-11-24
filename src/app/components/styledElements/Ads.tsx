import React from 'react'

export default function Ads() {

  return (
    <div className={`w-[750px] h-[100px] rounded-[12px] text-[#696A75] font-[family-name:var(--font-work-sans)] bg-[--ads-bg] flex flex-col justify-center gap-[8px] items-center`}>
        <span className='text-[14px] font-[400] leading-[20px]'>Advertisement</span>
        <p className='text-[20px] font-[600] leading-[24px]'>You can place ads</p>
        <span className='text-[18px] font-[400] leading-[26px]'>750x100</span>
    </div>
  )
}
