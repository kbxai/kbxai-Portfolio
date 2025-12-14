import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// Global JSX definitions
declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: any;
      group: any;
      meshBasicMaterial: any;
      line: any;
      lineBasicMaterial: any;
      points: any;
      bufferGeometry: any;
      bufferAttribute: any;
      pointsMaterial: any;
    }
  }
}

const DriftingSpace: React.FC = () => {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        if (groupRef.current) {
            // Very slow, natural rotation to simulate drifting through space
            // This is smoother and more natural than complex geometry calculations
            groupRef.current.rotation.y -= delta * 0.05;
            groupRef.current.rotation.x -= delta * 0.03;
        }
    });

    return (
        <group ref={groupRef}>
             {/* Deep background stars - High density but distant */}
            <Stars 
                radius={50} 
                depth={50} 
                count={5000} 
                factor={4} 
                saturation={0} 
                fade 
                speed={1} 
            />
            
            {/* Floating 'Dust' particles - White/Grey - The "Sprinkle" */}
            <Sparkles 
                count={100} 
                scale={12} 
                size={2} 
                speed={0.4} 
                opacity={0.5}
                color="#ffffff"
            />

             {/* Accent particles - Cyan (Primary) - Fewer but larger for depth */}
            <Sparkles 
                count={40} 
                scale={10} 
                size={4} 
                speed={0.3} 
                opacity={0.6}
                color="#00f2ea" 
                noise={0.2}
            />

             {/* Secondary Accent particles - Pink (Secondary) */}
             <Sparkles 
                count={20} 
                scale={10} 
                size={3} 
                speed={0.2} 
                opacity={0.4}
                color="#ff0050" 
            />
        </group>
    )
}

const Scene3D: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 1], fov: 60 }} 
        gl={{ 
          antialias: false, 
          powerPreference: "high-performance",
          alpha: true
        }}
        dpr={[1, 2]}
      >
        <DriftingSpace />
        {/* Soft fog to blend distant stars into the darkness */}
        <fog attach="fog" args={['#050505', 5, 30]} />
      </Canvas>
    </div>
  );
};

export default Scene3D;