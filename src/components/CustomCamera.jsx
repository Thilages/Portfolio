import React, { useRef, useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import { OrthographicCamera } from '@react-three/drei'

const CustomCamera = (props) => {
  const cameraRef = useRef()
  const { size } = useThree()

  useEffect(() => {
    if (!cameraRef.current) return

    const width = window.innerWidth;
    const height = window.innerHeight;
    const aspectRatio = width / height;

    if (aspectRatio < 1) {
      // Portrait mode (likely Mobile or Tablet)
      if (width < 720) {
        cameraRef.current.position.set(2, 5.5, 5.5);
        cameraRef.current.rotation.set(-0.7, 0.6, 0.45);
        cameraRef.current.zoom = 70;
      }
      else {
        cameraRef.current.position.set(2.267, 5.795, 6.0009);
        cameraRef.current.rotation.set(-0.7003, 0.6603, 0.4771);
        cameraRef.current.zoom = 130;
      }
    } else {
      // Desktop (Wider Screens)
      cameraRef.current.position.set(2.267, 5.795, 6.0009);
      cameraRef.current.rotation.set(-0.7003, 0.6603, 0.4771);
      cameraRef.current.zoom = 120;
    }

    cameraRef.current.updateProjectionMatrix()
  }, [size])
  return (
    <OrthographicCamera ref={cameraRef} {...props} />
  )
}

export default CustomCamera