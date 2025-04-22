import React, { useRef } from 'react'; // Removed useEffect
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { MathUtils } from 'three'; // Import MathUtils for lerp

export default function Portfolio(props) {
  const { nodes, materials } = useGLTF('/models/portfolio1.glb');
  const top = useRef();
  const left = useRef(); // Target ref
  const center = useRef();
  const right = useRef();
  const sphere = useRef();
  const object = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();

    // --- Animate the 'left' cube: Quick Spin Every 0.5 Seconds ---
    if (left.current) {
      // 1. Calculate the target rotation angle based on 0.5s intervals
      // How many full 0.5s intervals have passed?
      const intervalCount = Math.floor(time / 2);
      // Target angle is intervalCount * 360 degrees (2 * PI radians)
      const targetRotationY = intervalCount * (Math.PI * 2);

      // 2. Smoothly interpolate (lerp) the current rotation towards the target
      // The '0.1' is the interpolation factor (alpha). Higher = faster snap.
      // Adjust 0.1 (e.g., to 0.15 or 0.2) to make the spin faster/snappier.
      left.current.rotation.y = MathUtils.lerp(
        left.current.rotation.y, // Current value
        targetRotationY,       // Target value
        0.05                    // Interpolation factor (controls speed)
      );
    }

    // --- Animate the sphere (Keep existing animation) ---
    if (sphere.current) {
      sphere.current.position.y = 0.913 + Math.sin(time * 3) * 0.1;
    }

    // --- Animate the entire group (Keep existing animation) ---
    if (object.current) {
      object.current.position.y = Math.sin(time * 2) * 0.05;
    }
  });

  // --- JSX Structure (remains the same) ---
  return (
    <group {...props} dispose={null} onPointerEnter={() => { console.log("w") }}>
      <group ref={object}>
        {/* ... all mesh elements ... */}
        <mesh // Decorative Cube 1
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials['Material.003']}
          position={[-1.477, 0.983, 0.929]}
          scale={0.421}
        />
        <mesh // Decorative Cube 2
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials['Material.001']}
          position={[1.528, 0.955, -1.859]}
          scale={0.411}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials['Material.008']}
          position={[0.046, 0.482, -0.576]}
          scale={[1.936, 0.474, 1.936]}
        />

        {/* Left Box (Periodic Spin) */}
        <mesh
          ref={left}
          castShadow
          receiveShadow
          geometry={nodes.topleft.geometry}
          material={materials.topright}
          position={[-1.297, 2.362, -1.218]}
          scale={0.385}
        />

        {/* Center Box */}
        <mesh
          ref={center}
          castShadow
          receiveShadow
          geometry={nodes.topcenter.geometry}
          material={materials.topright}
          position={[-1.309, 2.362, -2]}
          scale={0.385}
        />

        {/* Right Box */}
        <mesh
          ref={right}
          castShadow
          receiveShadow
          geometry={nodes.topright.geometry}
          material={materials.topright}
          position={[-0.528, 2.362, -1.994]}
          scale={0.385}
        />

        {/* Top Box */}
        <mesh
          ref={top}
          castShadow
          receiveShadow
          geometry={nodes.topmost.geometry}
          material={materials.topmost}
          position={[-0.528, 3.13, -1.24]}
          scale={0.385}
        />

        {/* Sphere (Floating) */}
        <mesh
          ref={sphere}
          castShadow
          receiveShadow
          geometry={nodes.ball.geometry}
          material={materials['Material.009']}
          position={[1.178, 0.913, 0.505]}
          scale={0.278}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/models/portfolio1.glb');