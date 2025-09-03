"use client";

type MarqueeProps = {
  title: string
  link?: string
  classname:string
  fn?: () => void
}


export default function MarqueeButton({title,classname}:MarqueeProps) {

  return (
    <a
      href='https://mail.google.com/mail/?view=cm&fs=1&to=christopherglenn.bedis@wvsu.edu.ph'
      target="_blank"
      rel="noopener noreferrer"
    >
      <button
        className={`relative overflow-hidden sm:border-2 border-1 sm:text-[2rem] text-[1.4rem] cursor-pointer border-white rounded-full sm:w-full px-5 uppercase font-medium transition-colors ${classname}`}
      >
        <span className="inline-block text-center">{title}</span>
        <div className="absolute inset-0 flex whitespace-nowrap marquee-inner">
          <span className="mx-4">{title}</span>
          <span className="mx-4">{title}</span>
        </div>
      </button>
    </a>
  );
}