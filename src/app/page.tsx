"use client";

import MeshContainer from "@/components/mesh-container";
import Spaceship from "@/components/meshes/Spaceship.Mesh";
import Earth from "@/components/meshes/Earth.Mesh";
import TextMesh from "@/components/meshes/Text.Mesh";

export default function ModeToggle() {
  return (
    <div>
      <div className="h-screen relative flex items-center justify-center overflow-hidden">
        <div className="w-1/2 h-full absolute -translate-x-1/2">
          <MeshContainer
            ambientLightIntensity={1}
            directionalLightIntensity={2}
            directionalLightPosition={[-10, 10, -10]}
            autoRotate
          >
            <Earth scale={2} />
          </MeshContainer>
        </div>
        <div className="w-1/2 h-full absolute translate-x-1/2 translate-y-1/4 animate-slide">
          <MeshContainer
            ambientLightIntensity={1}
            camera={{ position: [-20, 1, -20], fov: 45 }}
            directionalLightIntensity={2}
            directionalLightPosition={[-10, 10, -10]}
            castShadow
          >
            <Spaceship scale={80} />
          </MeshContainer>
        </div>
        <div className="w-full h-full absolute">
          <MeshContainer camera={{ position: [-5, 1, 10], fov: 35 }}>
            <TextMesh />
          </MeshContainer>
        </div>
      </div>
    </div>
  );
}
