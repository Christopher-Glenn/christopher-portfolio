'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, useState, useEffect } from 'react';
import SpinningModel from './SpinningModel';
import { Bounds, OrbitControls } from '@react-three/drei';

const ModelCanvas = () => {
  const [fov, setFov] = useState(70);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setFov(80); 
      } else {
        setFov(70); 
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full h-[40vh] sm:h-[50rem]">
      <Canvas camera={{ position: [0, 0, 5], fov: fov, near: 0.1, far: 100 }}>
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Bounds fit clip observe margin={1.2}>
            <SpinningModel />
          </Bounds>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ModelCanvas;