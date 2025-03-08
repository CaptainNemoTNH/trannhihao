"use client";

import WelcomeScence from "@/components/scences/WelcomeScence";
import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Suspense } from "react";


export default function HomePage() {
  return (
    <div className="w-full h-[100vh] max-h-screen overflow-hidden">
      <Canvas shadows camera={{ position: [0, 0.5, 8], fov: 42 }}>
        <color attach="background" args={["#171720"]} />
        <fog attach="fog" args={["#171720", 15, 30]} />
        <Suspense>
          <ScrollControls pages={5} damping={0.1}>
            <WelcomeScence pages={5} />
          </ScrollControls>
        </Suspense>
        <EffectComposer>
          <Bloom mipmapBlur intensity={0.3} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
