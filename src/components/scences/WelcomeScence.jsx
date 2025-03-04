"use client";

import {
  CameraControls,
  Environment,
  Text,
  useFont,
  useScroll,
} from "@react-three/drei";
import Pacman3D from "@/components/3Ds/Pacman3D";
import Nature3D from "@/components/3Ds/Nature3D";
import { degToRad } from "three/src/math/MathUtils.js";
import { useEffect, useRef, useState } from "react";
import { Color } from "three";
import { useFrame } from "@react-three/fiber";

const bloomColor = new Color("#fff");
bloomColor.multiplyScalar(1);

const WelcomeScence = () => {
  const controls = useRef();
  const meshFitCameraHome = useRef();
  const meshFitCameraPacman3D = useRef();
  const scroll = useScroll();
  const [showIntroText, setShowIntroText] = useState(false);
  const [showWelcomeText, setShowWelcomeText] = useState(true);

  const intro = async () => {
    controls.current.dolly(-30);
    controls.current.smoothTime = 0.5;
    fitCameraHome();
  };

  const fitCameraHome = async () => {
    setShowWelcomeText(true);
    setShowIntroText(false);
    controls.current.fitToBox(meshFitCameraHome.current, true);
  };

  const fitCameraPacman3D = async () => {
    setShowWelcomeText(false);
    setShowIntroText(true);
    controls.current.fitToBox(meshFitCameraPacman3D.current, true);
    const meshPosition = meshFitCameraPacman3D.current.position;
    controls.current.setLookAt(
      -1,
      0.5,
      10,
      meshPosition.x,
      meshPosition.y,
      meshPosition.z,
      true
    );
  };

  useFrame(() => {
    if (scroll) {
      const scrollOffset = scroll.offset || 0;

      // console.log(scrollOffset);

      if (scrollOffset < 0.1) {
        fitCameraHome();
      } else if (scrollOffset < 0.2) {
        fitCameraPacman3D();
      }
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
    fitCameraHome();
    window.addEventListener("resize", fitCameraHome);
    return () => window.removeEventListener("resize", fitCameraHome);
  }, []);

  return (
    <>
      <CameraControls ref={controls} />
      <mesh ref={meshFitCameraHome} position={[-0.5, 1, 1.5]} visible={false}>
        <boxGeometry args={[11, 5, 5]} />
        <meshBasicMaterial color="orange" transparent opacity={0.5} />
      </mesh>
      <mesh
        ref={meshFitCameraPacman3D}
        position={[6, 0, 2.5]}
        rotation-y={degToRad(-40)}
        visible={false}
      >
        <boxGeometry args={[9, 5, 5]} />
        <meshBasicMaterial color="orange" transparent opacity={0.5} />
      </mesh>
      {showWelcomeText && (
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
      )}
      <group
        rotation-y={degToRad(-25)}
        position-x={4}
        position-y={-1.2}
        position-z={-1}
      >
        <Pacman3D scale={0.3} />
        {showIntroText && (
          <Text
            font={"/fonts/Poppins-Black.ttf"}
            position-x={5.5}
            position-y={1}
            position-z={3}
            lineHeight={1.5}
            textAlign="left"
            rotation-y={degToRad(-20)}
            anchorY={"bottom"}
            scale={0.3}
          >
            MY NAME IS TRAN NHI HAO,{"\n"}aka HENRY!{"\n"}
            GRADUATED FROM FPT UNIVERSITY,{"\n"}
            I'M EXCITED TO BE ON THE PATH OF{"\n"}WEB DEVELOPMENT AND WILL DO MY
            BEST{"\n"}TO EXCEL IN THIS ROLE.
            <meshBasicMaterial color={bloomColor} toneMapped={false} />
          </Text>
        )}
      </group>
      <group scale={20} position-x={5} position-y={0} position-z={-10}>
        <Nature3D />
      </group>
      <Environment preset="sunset" />
    </>
  );
};

useFont.preload("/fonts/Poppins-Black.ttf");

export default WelcomeScence;
