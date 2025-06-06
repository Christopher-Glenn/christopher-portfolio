"use client";

export default function MarqueeButton() {
  return (
    <button
      className="relative overflow-hidden border-2 text-[2.3rem] border-white rounded-full w-68 uppercase font-medium text-white  transition-colors"
    >
      <span className="inline-block text-center">Contact me</span>
      <div className="absolute inset-0 flex whitespace-nowrap marquee-inner">
        <span className="mx-4">Contact me</span>
        <span className="mx-4">Contact me</span>
      </div>
    </button>
  );
}