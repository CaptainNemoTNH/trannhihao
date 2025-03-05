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
import LightMushrooms3D from "@/components/3Ds/LightMushrooms3D";
import { degToRad, lerp } from "three/src/math/MathUtils.js";
import { useEffect, useRef, useState } from "react";
import { Color } from "three";
import { useFrame } from "@react-three/fiber";

const bloomColor = new Color("#fff");
bloomColor.multiplyScalar(1.1);

const WelcomeScence = (props) => {
  const controls = useRef();
  const meshFitCameraHome = useRef();
  const meshFitCameraPacman3D = useRef();
  const meshFitCameraLightMushroom3D = useRef();
  const scroll = useScroll();
  const welcomeTextRef = useRef();
  const introTextRef = useRef();
  const skillsTextRef = useRef();
  const mushroomRef = useRef();

  const intro = async () => {
    controls.current.dolly(-30);
    controls.current.smoothTime = 0.5;
    fitCameraHome();
  };

  const fitCameraHome = async () => {
    controls.current.fitToBox(meshFitCameraHome.current, true);
  };

  const fitCameraPacman3D = async () => {
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

  const fitCameraLightMushroom3D = async () => {
    controls.current.fitToBox(meshFitCameraLightMushroom3D.current, true);
    const meshPosition = meshFitCameraLightMushroom3D.current.position;
    controls.current.setLookAt(
      17,
      0.5,
      11,
      meshPosition.x,
      meshPosition.y,
      meshPosition.z,
      true
    );
  };

  useFrame((_, delta) => {
    if (scroll) {
      const scrollOffset = scroll.offset || 0;
      // console.log(visibleRef.current);

      welcomeTextRef.current.opacity = lerp(
        welcomeTextRef.current.opacity,
        scrollOffset < 1 / props.pages ? 1 - scrollOffset * props.pages : 0,
        delta * 10
      );

      introTextRef.current.opacity = lerp(
        introTextRef.current.opacity,
        scrollOffset >= 1 / props.pages && scrollOffset < 2 / props.pages
          ? (scrollOffset - 1 / props.pages) * props.pages
          : 0,
        delta * 10
      );

      skillsTextRef.current.opacity = lerp(
        skillsTextRef.current.opacity,
        scrollOffset >= 2 / props.pages
          ? (scrollOffset - 2 / props.pages) * props.pages
          : 0,
        delta * 10
      );

      mushroomRef.current.traverse((child) => {
        if (child.isMesh && child.material) {
          child.material.transparent = true;
          child.material.opacity = lerp(
            child.material.opacity,
            scrollOffset >= 2 / props.pages
              ? 1
              : 0,
            delta * 10
          );
        }
      });

      if (scrollOffset < 1 / props.pages) {
        fitCameraHome();
      } else if (scrollOffset < 2 / props.pages) {
        fitCameraPacman3D();
      } else if (scrollOffset < 1) {
        fitCameraLightMushroom3D();
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
      <mesh
        ref={meshFitCameraLightMushroom3D}
        position={[17, 1, 1.5]}
        visible={false}
      >
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
        <meshBasicMaterial
          color={bloomColor}
          toneMapped={false}
          ref={welcomeTextRef}
        />
      </Text>

      <group
        rotation-y={degToRad(-25)}
        position-x={4}
        position-y={-1.2}
        position-z={-1}
      >
        <Pacman3D scale={0.3} />

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
          <meshBasicMaterial
            color={bloomColor}
            toneMapped={false}
            ref={introTextRef}
          />
        </Text>
      </group>
      <group scale={20} position-x={5} position-y={0} position-z={-10}>
        <Nature3D />
      </group>
      <group position-x={21} position-y={-0.8} position-z={1}>
        <Text
          font={"/fonts/Poppins-Black.ttf"}
          position-x={-3.5}
          position-y={0.5}
          position-z={1}
          lineHeight={1.5}
          textAlign="left"
          anchorY={"bottom"}
          scale={0.2}
        >
          MY SKILLS:{"\n\n"}
          FRONT-END:{"\n"}
          Languages: JavaScript, TypeScript, SASS, CSS, HTML{"\n"}
          JS Libs/Frameworks: React, NextJs{"\n"}
          UI Libs/frameworks: Tailwindcss, Bootstrap, Material UI, ShadcnUi, Ant
          Design, Charka UI{"\n"}
          Third-party libraries: Redux toolkit, React Query, React Router,
          Axios, ...{"\n\n"}
          BACK-END:{"\n"}
          Frameworks: ExpressJs{"\n"}
          Database: PostgreSQL, SQL Server, MySQL, MongoDB{"\n"}
          Others:{"\n"}
          Tools: Firebase, Figma, xTiles, Jira, Trello, Docker, Git
          <meshBasicMaterial
            color={bloomColor}
            toneMapped={false}
            ref={skillsTextRef}
          />
        </Text>
        <LightMushrooms3D ref={mushroomRef} />
      </group>
      <Environment preset="sunset" />
    </>
  );
};

useFont.preload("/fonts/Poppins-Black.ttf");

export default WelcomeScence;
