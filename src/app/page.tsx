"use client";

import WelcomeScence from "@/components/scences/WelcomeScence";
import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Suspense } from "react";

export default function HomePage() {
  return (
    <div className="w-full h-[100vh]">
      <Canvas shadows camera={{ position: [0, 0.5, 8], fov: 42 }}>
        <color attach="background" args={["#171720"]} />
        <fog attach="fog" args={["#171720", 10, 40]} />
        <Suspense>
          <WelcomeScence />
        </Suspense>
        <EffectComposer>
          <Bloom mipmapBlur intensity={0.3} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
