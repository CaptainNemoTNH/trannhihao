import React, { useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Lighthouse3D(props) {
  const group = React.useRef();
  const { nodes, materials, animations } = useGLTF("/models/lighthouse.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions) {
      actions["Animation"].reset().fadeIn(0.5).play();
    }
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.018}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Stars_0">
                <mesh
                  name="Object_4"
                  geometry={nodes.Object_4.geometry}
                  material={materials["White.NoBackface"]}
                  position={[0,-6,0]}
                />
              </group>
              <group
                name="Bird002_2"
                position={[-2.76, 16.106, 10.988]}
                rotation={[0.146, -0.002, -0.358]}
              >
                <mesh
                  name="Object_9"
                  geometry={nodes.Object_9.geometry}
                  material={materials.Background}
                />
              </group>
              <group
                name="Bird001_4"
                position={[1.615, 1.645, -0.606]}
                rotation={[-0.013, -0.024, -0.184]}
              >
                <mesh
                  name="Object_13"
                  geometry={nodes.Object_13.geometry}
                  material={materials.Background}
                />
              </group>
              <group
                name="Water_5"
                position={[0, -11.12, 0]}
                rotation={[0, 0.009, 0]}
                scale={2}
              ></group>
              <group
                name="Light_7"
                position={[0, 9.874, 0]}
                rotation={[0, -0.017, 0]}
              >
                <mesh
                  name="Object_25"
                  geometry={nodes.Object_25.geometry}
                  material={materials.White}
                />
                <mesh
                  name="Object_26"
                  geometry={nodes.Object_26.geometry}
                  material={materials.LightRay}
                />
              </group>
              <group name="Stone_1">
                <mesh
                  name="Object_6"
                  geometry={nodes.Object_6.geometry}
                  material={materials.FlatGray}
                />
                <mesh
                  name="Object_7"
                  geometry={nodes.Object_7.geometry}
                  material={materials["FlatGray.Dark"]}
                />
              </group>
              <group name="Tower_6">
                <mesh
                  name="Object_19"
                  geometry={nodes.Object_19.geometry}
                  material={materials["FlatGray.Light"]}
                />
                <mesh
                  name="Object_20"
                  geometry={nodes.Object_20.geometry}
                  material={materials.FlatGray}
                />
                <mesh
                  name="Object_21"
                  geometry={nodes.Object_21.geometry}
                  material={materials["FlatGray.Dark"]}
                />
                <mesh
                  name="Object_22"
                  geometry={nodes.Object_22.geometry}
                  material={materials["White.Dim"]}
                />
                <mesh
                  name="Object_23"
                  geometry={nodes.Object_23.geometry}
                  material={materials.Background}
                />
              </group>
              <group name="House_9" position={[6.043, -5.89, 0]}>
                <mesh
                  name="Object_28"
                  geometry={nodes.Object_28.geometry}
                  material={materials["FlatGray.Light"]}
                />
                <mesh
                  name="Object_29"
                  geometry={nodes.Object_29.geometry}
                  material={materials.FlatGray}
                />
                <mesh
                  name="Object_30"
                  geometry={nodes.Object_30.geometry}
                  material={materials["FlatGray.Dark"]}
                />
                <mesh
                  name="Object_31"
                  geometry={nodes.Object_31.geometry}
                  material={materials.Background}
                />
                <mesh
                  name="Object_32"
                  geometry={nodes.Object_32.geometry}
                  material={materials["White.Dim"]}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/lighthouse.glb");
