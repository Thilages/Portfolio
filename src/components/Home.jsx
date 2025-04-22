import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from "framer-motion";
import { Plane, SoftShadows } from '@react-three/drei';

import Portfolio from './Portfolio';
import CustomCamera from './CustomCamera';

const Home = () => {
  const directionalLightRef = useRef();

  // Variants for the animation
  const containerVariants = {
    hidden: { x: "10vw", opacity: 0 }, // Start from the right off-screen
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }, // Smooth animation
    },
  };

  return (
    <div className="absolute snap-start w-full h-screen top-0 left-0 -z-10 overflow-x-hidden">
      <div className="absolute w-full h-screen box-2 z-10"></div>
      <div className="absolute w-full h-screen box-1 z-10"></div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{amount:0.3}}
        variants={containerVariants}
        className="absolute w-full h-full top-0 left-0 z-10"
      >


        <Canvas shadows className="relative z-20">
          <ambientLight intensity={1.5} />
          <directionalLight
            castShadow
            position={[0, 1, 0]}
            intensity={3}
          />
          <directionalLight
            position={[1, 5, -5]}
            intensity={1.5}
            shadow-mapSize-width={1000}
            shadow-mapSize-height={1000}
          />
          <CustomCamera makeDefault near={0.1} far={1000} />
          <Portfolio light={directionalLightRef} />
          <Plane
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -0.5, 0]}
            args={[100, 100]}
          >
            <shadowMaterial opacity={0.3} />
          </Plane>
          <SoftShadows samples={10} size={10} />
        </Canvas>
      </motion.div>
    </div>
  );
};

export default Home;
