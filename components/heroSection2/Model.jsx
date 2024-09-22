'use client';
import { useRef, useMemo } from 'react';
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber';
import { MeshTransmissionMaterial } from "@react-three/drei";

export default function Model() {

  const { nodes } = useGLTF("/models/logo.glb");
  const { viewport } = useThree();
  const logo = useRef(null);

  // Memoize the material to prevent unnecessary re-creation
  const material = useMemo(() => (
    <MeshTransmissionMaterial
      backside
      backsideThickness={1}
      samples={16}
      thickness={0.2}
      anisotropicBlur={0.1}
      iridescence={1}
      iridescenceIOR={1}
      iridescenceThicknessRange={[0, 1400]}
      clearcoat={1}
      envMapIntensity={0.5}
    />
  ), []);

  // Use a fixed delta for rotation to ensure consistent animation speed
  useFrame((state, delta) => {
    logo.current.rotation.x += 0.001 * delta * 60;
    logo.current.rotation.z += 0.001 * delta * 60;
  });

  // Memoize the group scale
  const groupScale = useMemo(() => viewport.width / 3, [viewport.width]);

  return (
    <group scale={groupScale}>
      <mesh ref={logo} geometry={nodes.Curve001.geometry} position={[1, 0, 0]} scale={12}>
        {material}
      </mesh>
    </group>
  );
}