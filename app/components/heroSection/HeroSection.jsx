'use client';
import { OrbitControls, Sphere } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { pointsInner, pointsOuter } from "../threeD/utils";

const HeroSection = () => {
    return (
        <div className="relative ">
            <Canvas 
                camera={{ position: [10, 7.5, 5] }}
                className="bg-[rgb(250,250,250)]" 
                style={{ height: '100vh', width: '100%' }}
            >
                <directionalLight />
                <OrbitControls enableZoom={false} enableRotate={false} enablePan={false}/>
                <pointLight position={[-30, -1, -30]} power={10} />
                <PointCircle />
            </Canvas>
        </div>


    );
};

const PointCircle = () => {
    const ref = useRef();

    useFrame(({clock}) => {
        ref.current.rotation.z = clock.getElapsedTime() * 0.1;
    });

    return (
        <group ref={ref}>
            {pointsInner.map((point) => (
                <Point key={point.idx} position={point.position} color={point.color} />
            ))}
            {pointsOuter.map((point) => (
                <Point key={point.idx} position={point.position} color={point.color} />
            ))}
        </group>
    );



};

const Point = ({position, color}) => {
    return (
        <Sphere args={[0.1,2,2]} position={position}>
            <meshStandardMaterial color={color} emissive={color} flatShading={true} emissiveIntensity={0.9} roughness={0.5} />
        </Sphere>
    );
};



export default HeroSection;