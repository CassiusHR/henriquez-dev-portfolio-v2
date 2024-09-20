'use client';
import { useRef } from 'react';
import { useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber';
import { MeshTransmissionMaterial} from "@react-three/drei";

export default function Model() {

  const { nodes } = useGLTF("/models/logo.glb");
  const { viewport } = useThree();
  const logo = useRef(null);

  useFrame( () => {
    logo.current.rotation.x += 0.001;
    logo.current.rotation.z += 0.001;
  });


  return (
    <group scale={viewport.width / 3} >
      <mesh ref={logo} {...nodes.Curve001} position={[1, 0, 0]} scale={12}>
        <MeshTransmissionMaterial backside
          backsideThickness={1}
          samples={16}
          thickness={0.2}
          anisotropicBlur={0.1}
          iridescence={1}
          iridescenceIOR={1}
          iridescenceThicknessRange={[0, 1400]}
          clearcoat={1}
          envMapIntensity={0.5}/>
      </mesh>
    </group>
  );
}