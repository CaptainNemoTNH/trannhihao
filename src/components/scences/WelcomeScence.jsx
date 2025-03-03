"use client";

import {
  CameraControls,
  Environment,
  MeshReflectorMaterial,
  Text,
  useFont,
  useScroll,
} from "@react-three/drei";
import Pacman3D from "@/components/3Ds/Pacman3D";
import { degToRad } from "three/src/math/MathUtils.js";
import { useEffect, useRef } from "react";
import { Color } from "three";
import { useFrame } from "@react-three/fiber";

const bloomColor = new Color("#fff");
bloomColor.multiplyScalar(1);

const WelcomeScence = () => {
  const controls = useRef();
  const meshFitCameraHome = useRef();
  const scroll = useScroll();

  const intro = async () => {
    controls.current.dolly(-30);
    controls.current.smoothTime = 1;
    fitCamera();
  };

  const fitCamera = async () => {
    controls.current.fitToBox(meshFitCameraHome.current, true);
  };

  useFrame(() => {
    if (scroll) {
      const scrollOffset = scroll.offset || 0;
      const xPos = 0;
      const yPos = 0.5;
      const zPos = 16.3 - scrollOffset * 100;

      console.log(zPos);

      controls.current.setLookAt(
        xPos,
        yPos,
        zPos,
        zPos < 10 ? 4 : 0, //x
        0.5, //y
        zPos < 10 ? 1 : 0, //z
        true
      );
    }
  });

  useEffect(() => {
    if (controls.current) {
      controls.current.mouseButtons.wheel = 0;
    }
  }, []);

  useEffect(() => {
    intro();
  }, []);

  useEffect(() => {
    fitCamera();
    window.addEventListener("resize", fitCamera);
    return () => window.removeEventListener("resize", fitCamera);
  }, []);

  return (
    <>
      <CameraControls ref={controls} />
      <mesh ref={meshFitCameraHome} position={[0, 0.5, 1.5]} visible={false}>
        <boxGeometry args={[11, 5, 5]} />
        <meshBasicMaterial color="orange" transparent opacity={0.5} />
      </mesh>
      <Text
        font={"/fonts/Poppins-Black.ttf"}
        position-x={-3}
        position-y={-0.5}
        position-z={1}
        lineHeight={1}
        textAlign="left"
        rotation-y={degToRad(30)}
        anchorY={"bottom"}
      >
        WELCOME{"\n"}STRANGER!!!
        <meshBasicMaterial color={bloomColor} toneMapped={false} />
      </Text>
      <group
        rotation-y={degToRad(-25)}
        position-x={4}
        position-y={-0.5}
        position-z={1}
      >
        <Pacman3D scale={0.3} />
      </group>
      <mesh position-y={-0.6} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
          blur={[100, 100]}
          resolution={360}
          mixBlur={1}
          mixStrength={5}
          roughness={1}
          depthScale={1}
          opacity={0.3}
          transparent
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#171720"
          metalness={0.5}
        />
      </mesh>
      <Environment preset="sunset" />
    </>
  );
};

useFont.preload("/fonts/Poppins-Black.ttf");

export default WelcomeScence;
