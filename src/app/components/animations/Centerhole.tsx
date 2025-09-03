'use client';

import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

export default function CenterHoleOverlay({ state }: { state?: "diamond" | "expanded" }) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const controls = useAnimation();

  useEffect(() => {
    const updateSize = () =>
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });

    updateSize();
    window.addEventListener('resize', updateSize);

    // Landing animation
    setTimeout(() => {
      controls.start('expanded');
    }, 500);

    return () => window.removeEventListener('resize', updateSize);
  }, [controls]);

  useEffect(() => {
    if (!state) return; 
    controls.start(state);
  }, [state, controls]);

  useEffect(() => {
    if (state === "diamond") {
      controls.start("diamond");
    } else {
      controls.start("expanded");
    }
  }, [state, controls]);

  const { width, height } = dimensions;
  if (width === 0 || height === 0) return null;

  const diamondPoints = `
    ${width / 2},${height / 2 - 400}
    ${width / 2 + 170},${height / 2}
    ${width / 2},${height / 2 + 400}
    ${width / 2 - 170},${height / 2}
  `;

  const expandedPoints = `
    0,0
    ${width},0
    ${width},${height}
    0,${height}
  `;

  return (
    <div className="fixed inset-0 z-999 pointer-events-none">
      <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <mask id="centerHoleMask">
            <rect width={width} height={height} fill="white" />
            <motion.polygon
              fill="black"
              initial={{ points: diamondPoints }}
              animate={controls}
              variants={{
                diamond: {
                  points: diamondPoints,
                  transition: { duration: 0.7, ease: 'easeInOut' },
                },
                expanded: {
                  points: expandedPoints,
                  transition: { duration: 0.7, ease: 'easeInOut' },
                },
              }}
            />
          </mask>
        </defs>
        <rect width={width} height={height} fill="#131313" mask="url(#centerHoleMask)" />
      </svg>
    </div>
  );
}
