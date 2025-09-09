import React from 'react';

export const BigHeading = ({ children }: { children: React.ReactNode }) => (
  <div className="overflow-visible h-[7.5rem] md:overflow-hidden md:h-[18.5rem] sm:leading-none">
    <h1 className="text-cozywhite font-tusker sm:text-[18rem] text-[7.5rem] uppercase">
      {children}
    </h1>
  </div>
);

export default BigHeading;