"use client";
import { ReactNode } from "react";

type MarqueeProps = {
  title: ReactNode;
  classname:string
  fn?: () => void
}


export default function MarqueeButton({title,classname}:MarqueeProps) {

  return (
      <button
        className={`relative overflow-hidden border-1 sm:text-[2rem] text-[1.2rem] cursor-pointer border-white rounded-full px-5 uppercase font-medium transition-colors ${classname}`}
      >
        <span className="inline-block text-center">{title}</span>
        <div className="absolute inset-0 flex whitespace-nowrap marquee-inner">
          <span className="mx-4">{title}</span>
          <span className="mx-4">{title}</span>
        </div>
      </button>
  );
}