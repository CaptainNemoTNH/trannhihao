"use client";

import {
  CameraControls,
  Environment,
  Float,
  Text,
  useFont,
  useScroll,
} from "@react-three/drei";
import Pacman3D from "@/components/3Ds/Pacman3D";
import Telescope3D from "@/components/3Ds/Telescope3D";
import Lighthouse3D from "@/components/3Ds/Lighthouse3D";
import Plane3D from "@/components/3Ds/Plane3D";
import { degToRad, lerp } from "three/src/math/MathUtils.js";
import { useEffect, useRef } from "react";
import { Color } from "three";
import { useFrame } from "@react-three/fiber";

const bloomColor = new Color("#fff");
bloomColor.multiplyScalar(1.1);

const WelcomeScence = (props) => {
  const controls = useRef();
  const meshFitCameraHome = useRef();
  const meshFitCameraPacman3D = useRef();
  const meshFitCameraTelescope3D = useRef();
  const meshFitCameraLighthouse3D = useRef();
  const meshFitCameraPlane3D = useRef();

  const scroll = useScroll();

  const welcomeTextRef = useRef();
  const introTextRef = useRef();
  const skillsTextRef = useRef();
  const telescopeRef = useRef();
  const coverTextRef = useRef();

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

  const fitCameraTelescope3D = async () => {
    controls.current.fitToBox(meshFitCameraTelescope3D.current, true);
    const meshPosition = meshFitCameraTelescope3D.current.position;
    controls.current.setLookAt(
      17,
      1,
      13,
      meshPosition.x,
      meshPosition.y,
      meshPosition.z,
      true
    );
  };

  const fitCameraLighthouse3D = async () => {
    controls.current.fitToBox(meshFitCameraLighthouse3D.current, true);
    const meshPosition = meshFitCameraLighthouse3D.current.position;
    controls.current.setLookAt(
      17,
      2,
      -13,
      meshPosition.x,
      meshPosition.y,
      meshPosition.z,
      true
    );
  };

  const fitCameraPlane3D = async () => {
    controls.current.fitToBox(meshFitCameraPlane3D.current, true);
    const meshPosition = meshFitCameraPlane3D.current.position;
    controls.current.setLookAt(
      17,
      35,
      -14,
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

      telescopeRef.current.traverse((child) => {
        if (child.isMesh && child.material) {
          child.material.transparent = true;
          child.material.opacity = lerp(
            child.material.opacity,
            scrollOffset >= 2 / props.pages ? 1 : 0,
            delta * 10
          );
        }
      });

      coverTextRef.current.opacity = lerp(
        coverTextRef.current.opacity,
        scrollOffset >= 3 / props.pages
          ? (scrollOffset - 3 / props.pages) * props.pages
          : 0,
        delta * 10
      );

      if (scrollOffset < 1 / props.pages) {
        fitCameraHome();
      } else if (scrollOffset < 2 / props.pages) {
        fitCameraPacman3D();
      } else if (scrollOffset < 3 / props.pages) {
        fitCameraTelescope3D();
      } else if (scrollOffset < 4 / props.pages) {
        fitCameraLighthouse3D();
      } else if (scrollOffset <= 1) {
        fitCameraPlane3D();
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
        ref={meshFitCameraTelescope3D}
        position={[17, 1, 1.5]}
        visible={false}
      >
        <boxGeometry args={[13, 5, 5]} />
        <meshBasicMaterial color="orange" transparent opacity={0.5} />
      </mesh>
      <mesh
        ref={meshFitCameraLighthouse3D}
        position={[17, 2, -30]}
        visible={false}
      >
        <boxGeometry args={[15, 9, 5]} />
        <meshBasicMaterial color="orange" transparent opacity={0.5} />
      </mesh>
      <mesh ref={meshFitCameraPlane3D} position={[17, 35, -30]} visible={false}>
        <boxGeometry args={[15, 9, 5]} />
        <meshBasicMaterial color="orange" transparent opacity={0.5} />
      </mesh>
      <Text
        font={"/fonts/Poppins-Black.ttf"}
        position-x={-3}
        position-y={0.5}
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
          position-x={6}
          position-y={0.5}
          position-z={3}
          lineHeight={1.5}
          textAlign="left"
          rotation-y={degToRad(-20)}
          anchorY={"bottom"}
          scale={0.3}
        >
          MY NAME IS TRAN NHI HAO,{"\n"}aka HENRY!{"\n"}
          {"\n"}
          GRADUATED FROM FPT UNIVERSITY,{"\n"}
          {"\n"}
          I'M EXCITED TO BE ON THE PATH OF{"\n"}WEB DEVELOPMENT AND WILL DO MY
          BEST{"\n"}TO EXCEL IN THIS ROLE.
          <meshBasicMaterial
            color={bloomColor}
            toneMapped={false}
            ref={introTextRef}
          />
        </Text>
      </group>
      <group position-x={21} position-y={-0.8} position-z={0.5}>
        <Text
          font={"/fonts/Poppins-Black.ttf"}
          position-x={-6}
          position-y={0}
          position-z={-1}
          lineHeight={1.5}
          textAlign="left"
          anchorY={"bottom"}
          scale={0.3}
        >
          MY CAREER GOALS:{"\n\n"}
          SHORT-TERM:{"\n"}
          {"\n"}- IMPROVING MY SKILLS AS FRONT-END DEVELOPER{"\n"}- LEARNING AND
          ADAPTING TO VARIOUS BACK-END TECHNOLOGIES{"\n"}AS WELL AS DEV-OPS TO
          BECOME A FULLSTACK DEVELOPER{"\n"}
          {"\n"}
          LONG-TERM:{"\n"}
          {"\n"}- IMPROVING MY SKILLS AS A FULL-STACK DEVELOPER{"\n"}- KEEP
          UPDATING MY SKILLS TO BE MORE EFFICIENCY PROGRAMMER{"\n"}
          <meshBasicMaterial
            color={bloomColor}
            toneMapped={false}
            ref={skillsTextRef}
          />
        </Text>
        <Telescope3D
          scale={2}
          ref={telescopeRef}
          position-y={0.5}
          position-x={1}
        />
      </group>
      <group position-x={24} position-y={1.5} position-z={-30}>
        <Text
          font={"/fonts/Poppins-Black.ttf"}
          position-x={-11}
          position-y={-3}
          position-z={0}
          lineHeight={2}
          textAlign="left"
          anchorY={"bottom"}
          scale={0.3}
        >
          With a passion for bringing designs to life on real-world websites,
          {"\n"}I would like to apply for the Frontend Developer position{"\n"}
          to have the opportunity to work and grow with your company{"\n"}
          {"\n"}- I have experience working with ReactJS and NextJS{"\n"}-
          Fundamental knowledge of UI/UX and SEO{"\n"}- Good at teamwork and
          always open to feedback{"\n"}
          {"\n"}
          As an outgoing and dynamic developer,{"\n"}I believe technology
          enables us to connect with industries worldwide{"\n"}
          {"\n"}
          Your company is an environment where I hope to learn, grow, and
          contribute.{"\n"}I look forward to applying my skills to support the
          company's development
          <meshBasicMaterial
            color={bloomColor}
            toneMapped={false}
            ref={coverTextRef}
          />
        </Text>

        <Lighthouse3D scale={20} />
      </group>
      <group position-x={8} position-y={33} position-z={-30}>
        <Float>
          <Text
            font={"/fonts/Poppins-Black.ttf"}
            position-x={13}
            position-y={2}
            position-z={0}
            lineHeight={2}
            textAlign="center"
            anchorY={"bottom"}
            scale={0.6}
          >
            I HOPE TO HEAR FROM YOU SOON.{"\n"}THANK YOU, AND I WISH YOU A GREAT
            DAY!
            <meshBasicMaterial color={bloomColor} toneMapped={false} />
          </Text>
        </Float>
        <Float speed={5} floatingRange={[-1, 1]}>
          <Plane3D scale={4} />
        </Float>
      </group>
      <Environment preset="sunset" />
    </>
  );
};

useFont.preload("/fonts/Poppins-Black.ttf");

export default WelcomeScence;
