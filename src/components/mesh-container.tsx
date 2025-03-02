"use client";

import { CameraControls, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

interface MeshContainerProps {
  children: Readonly<React.ReactNode>;
  autoRotate?: boolean;
  enableZoom?: boolean;
  enablePan?: boolean;
  enableRotate?: boolean;
  ambientLightIntensity?: number;
  camera?: { position: [number, number, number]; fov: number };
  directionalLightPosition?: [number, number, number];
  directionalLightIntensity?: number;
  castShadow?: boolean;
}

export default function MeshContainer({
  children,
  ambientLightIntensity = 0,
  autoRotate = false,
  enableZoom = false,
  enablePan = false,
  enableRotate = false,
  camera = { position: [0, 0, 10], fov: 45 },
  directionalLightPosition = [0, 0, 0],
  directionalLightIntensity = 0,
  castShadow = false,
}: MeshContainerProps) {
  return (
    <Canvas camera={camera}>
      <ambientLight intensity={ambientLightIntensity} />
      <directionalLight
        position={directionalLightPosition}
        intensity={directionalLightIntensity}
        castShadow={castShadow}
      />
      {children}
      <OrbitControls
        autoRotate={autoRotate}
        enableZoom={enableZoom}
        enablePan={enablePan}
        enableRotate={enableRotate}
      />
    </Canvas>
  );
}
