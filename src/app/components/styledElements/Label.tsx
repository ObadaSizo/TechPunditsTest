import React from 'react'

interface LabelProps {
  text: string;
  type?: "filled" | "notfilled";
}

export default function Label({ text , type = "filled" }: LabelProps) {
  return (
    <span className={`${type === "filled" ? "text-[white] bg-[#4B6BFB]" : "text-[#4B6BFB] bg-[#4B6BFB0D]"} rounded-[6px] px-2 py-1 text-[14px] font-[500]`}>{text}</span>
  )
}
