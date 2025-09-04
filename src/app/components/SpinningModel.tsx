'use client';

import { useRef, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Group } from 'three';

const SpinningModel = () => {
  const modelRef = useRef<Group>(null);
  const gltf = useGLTF('/3d/optimized-model.glb');
  const [scale, setScale] = useState(5);
  const [position, setPosition] = useState([0, -2.2, 0.3]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setScale(5); 
        setPosition([0, -2, 0.4]); 
      } else {
        setScale(5); 
        setPosition([0, -2.2, 0.3]); 
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  return <primitive ref={modelRef} object={gltf.scene} scale={scale} position={position} />;
};

export default SpinningModel;