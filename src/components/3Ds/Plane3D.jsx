import React, { useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Plane3D(props) {
  const group = React.useRef();
  const { nodes, materials, animations } = useGLTF("/models/plane.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions) {
      actions["Animation"].reset().fadeIn(0.5).setDuration(10).play();
    }
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 5, 0]}>
              <group
                name="Sphere_5"
                position={[-0.216, 0.378, -0.52]}
                rotation={[-1.143, -0.005, 0.004]}
              >
                <mesh
                  name="Object_8"
                  geometry={nodes.Object_8.geometry}
                  material={materials["Material.016"]}
                />
                <mesh
                  name="Object_9"
                  geometry={nodes.Object_9.geometry}
                  material={materials["Material.004"]}
                />
              </group>
              <group
                name="korpus_3"
                position={[-0.598, 0.306, -0.222]}
                rotation={[3.134, 0.919, 3.104]}
              >
                <group
                  name="BezierCurve001_1"
                  position={[-0.136, 0.187, 0.286]}
                >
                  <mesh
                    name="Object_6"
                    geometry={nodes.Object_6.geometry}
                    material={materials.truba_bronza}
                  />
                </group>
                <mesh
                  name="Object_4"
                  geometry={nodes.Object_4.geometry}
                  material={materials["Material.007"]}
                />
              </group>
              <group
                name="korpus001_6"
                position={[-0.598, 0.306, -0.222]}
                rotation={[3.134, 0.919, 3.104]}
              >
                <mesh
                  name="Object_11"
                  geometry={nodes.Object_11.geometry}
                  material={materials.Material}
                />
                <mesh
                  name="Object_12"
                  geometry={nodes.Object_12.geometry}
                  material={materials["Material.001"]}
                />
                <mesh
                  name="Object_13"
                  geometry={nodes.Object_13.geometry}
                  material={materials["Material.002"]}
                />
                <mesh
                  name="Object_14"
                  geometry={nodes.Object_14.geometry}
                  material={materials["Material.009"]}
                />
                <mesh
                  name="Object_15"
                  geometry={nodes.Object_15.geometry}
                  material={materials["Material.015"]}
                />
                <mesh
                  name="Object_16"
                  geometry={nodes.Object_16.geometry}
                  material={materials["Material.016"]}
                />
              </group>
              <group
                name="korpus002_7"
                position={[-0.598, 0.306, -0.222]}
                rotation={[3.134, 0.919, 3.104]}
              >
                <mesh
                  name="Object_18"
                  geometry={nodes.Object_18.geometry}
                  material={materials["Material.010"]}
                />
              </group>
              <group
                name="korpus003_8"
                position={[-0.598, 0.306, -0.222]}
                rotation={[3.134, 0.919, 3.104]}
              >
                <mesh
                  name="Object_20"
                  geometry={nodes.Object_20.geometry}
                  material={materials["Material.002"]}
                />
                <mesh
                  name="Object_21"
                  geometry={nodes.Object_21.geometry}
                  material={materials["Material.012"]}
                />
                <mesh
                  name="Object_22"
                  geometry={nodes.Object_22.geometry}
                  material={materials.Glow_Glass}
                />
              </group>
              <group
                name="korpus004_9"
                position={[-0.598, 0.306, -0.222]}
                rotation={[3.134, 0.919, 3.104]}
              >
                <mesh
                  name="Object_24"
                  geometry={nodes.Object_24.geometry}
                  material={materials["Material.007"]}
                />
                <mesh
                  name="Object_25"
                  geometry={nodes.Object_25.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="korpus005_10"
                position={[-0.598, 0.306, -0.222]}
                rotation={[3.134, 0.919, 3.104]}
              >
                <mesh
                  name="Object_27"
                  geometry={nodes.Object_27.geometry}
                  material={materials["Material.007"]}
                />
                <mesh
                  name="Object_28"
                  geometry={nodes.Object_28.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="korpus014_15"
                position={[-0.598, 0.306, -0.222]}
                rotation={[3.134, 0.919, 3.104]}
              >
                <mesh
                  name="Object_42"
                  geometry={nodes.Object_42.geometry}
                  material={materials["Material.013"]}
                />
              </group>
              <group
                name="korpus015_16"
                position={[-0.598, 0.306, -0.222]}
                rotation={[3.134, 0.919, 3.104]}
              >
                <mesh
                  name="Object_44"
                  geometry={nodes.Object_44.geometry}
                  material={materials["Material.013"]}
                />
              </group>
              <group
                name="korpus016_17"
                position={[-0.598, 0.306, -0.222]}
                rotation={[3.134, 0.919, 3.104]}
              />
              <group
                name="korpus017_18"
                position={[-0.598, 0.306, -0.222]}
                rotation={[3.134, 0.919, 3.104]}
              >
                <mesh
                  name="Object_47"
                  geometry={nodes.Object_47.geometry}
                  material={materials["Material.009"]}
                />
                <mesh
                  name="Object_48"
                  geometry={nodes.Object_48.geometry}
                  material={materials["Material.005"]}
                />
              </group>
              <group
                name="korpus018_19"
                position={[-0.598, 0.306, -0.222]}
                rotation={[3.134, 0.919, 3.104]}
              >
                <mesh
                  name="Object_50"
                  geometry={nodes.Object_50.geometry}
                  material={materials["Material.013"]}
                />
              </group>
              <group
                name="korpus019_20"
                position={[-0.598, 0.306, -0.222]}
                rotation={[3.134, 0.919, 3.104]}
              >
                <mesh
                  name="Object_52"
                  geometry={nodes.Object_52.geometry}
                  material={materials["Material.013"]}
                />
              </group>
              <group
                name="korpus020_21"
                position={[-0.598, 0.306, -0.222]}
                rotation={[3.134, 0.919, 3.104]}
              >
                <mesh
                  name="Object_54"
                  geometry={nodes.Object_54.geometry}
                  material={materials["Material.013"]}
                />
              </group>
              <group
                name="korpus021_22"
                position={[-0.598, 0.306, -0.222]}
                rotation={[3.134, 0.919, 3.104]}
              >
                <mesh
                  name="Object_56"
                  geometry={nodes.Object_56.geometry}
                  material={materials["Material.009"]}
                />
                <mesh
                  name="Object_57"
                  geometry={nodes.Object_57.geometry}
                  material={materials["Material.005"]}
                />
              </group>
              <group
                name="korpus022_23"
                position={[-0.598, 0.306, -0.222]}
                rotation={[3.134, 0.919, 3.104]}
              >
                <mesh
                  name="Object_59"
                  geometry={nodes.Object_59.geometry}
                  material={materials["Material.005"]}
                />
                <mesh
                  name="Object_60"
                  geometry={nodes.Object_60.geometry}
                  material={materials["Material.014"]}
                />
              </group>
              <group
                name="korpus023_24"
                position={[-0.598, 0.306, -0.222]}
                rotation={[3.134, 0.919, 3.104]}
              >
                <mesh
                  name="Object_62"
                  geometry={nodes.Object_62.geometry}
                  material={materials["Material.004"]}
                />
              </group>
              <group
                name="korpus024_25"
                position={[-0.598, 0.306, -0.222]}
                rotation={[3.134, 0.919, 3.104]}
              >
                <mesh
                  name="Object_64"
                  geometry={nodes.Object_64.geometry}
                  material={materials["Material.004"]}
                />
              </group>
              <group
                name="korpus025_26"
                position={[-0.598, 0.306, -0.222]}
                rotation={[3.134, 0.919, 3.104]}
              >
                <mesh
                  name="Object_66"
                  geometry={nodes.Object_66.geometry}
                  material={materials["Material.004"]}
                />
              </group>
              <group
                name="korpus026_27"
                position={[-0.598, 0.306, -0.222]}
                rotation={[3.134, 0.919, 3.104]}
              >
                <mesh
                  name="Object_68"
                  geometry={nodes.Object_68.geometry}
                  material={materials["Material.004"]}
                />
              </group>
              <group
                name="korpus027_28"
                position={[-0.598, 0.306, -0.222]}
                rotation={[3.134, 0.919, 3.104]}
              >
                <mesh
                  name="Object_70"
                  geometry={nodes.Object_70.geometry}
                  material={materials["Material.008"]}
                />
              </group>
              <group
                name="korpus028_29"
                position={[-0.598, 0.306, -0.222]}
                rotation={[3.134, 0.919, 3.104]}
              >
                <mesh
                  name="Object_72"
                  geometry={nodes.Object_72.geometry}
                  material={materials["Material.001"]}
                />
                <mesh
                  name="Object_73"
                  geometry={nodes.Object_73.geometry}
                  material={materials["Material.005"]}
                />
              </group>
              <group
                name="korpus029_30"
                position={[-0.598, 0.306, -0.222]}
                rotation={[3.134, 0.919, 3.104]}
              >
                <mesh
                  name="Object_75"
                  geometry={nodes.Object_75.geometry}
                  material={materials["Material.008"]}
                />
              </group>
              <group
                name="korpus030_31"
                position={[-0.598, 0.306, -0.222]}
                rotation={[3.134, 0.919, 3.104]}
              >
                <mesh
                  name="Object_77"
                  geometry={nodes.Object_77.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                name="korpus031_32"
                position={[-0.598, 0.306, -0.222]}
                rotation={[3.134, 0.919, 3.104]}
              >
                <mesh
                  name="Object_79"
                  geometry={nodes.Object_79.geometry}
                  material={materials["Material.002"]}
                />
              </group>
              <group
                name="korpus032_33"
                position={[-0.598, 0.306, -0.222]}
                rotation={[3.134, 0.919, 3.104]}
              >
                <mesh
                  name="Object_81"
                  geometry={nodes.Object_81.geometry}
                  material={materials["Material.002"]}
                />
                <mesh
                  name="Object_82"
                  geometry={nodes.Object_82.geometry}
                  material={materials["Material.008"]}
                />
              </group>
              <group
                name="korpus047_34"
                position={[-0.598, 0.306, -0.222]}
                rotation={[3.134, 0.919, 3.104]}
              >
                <mesh
                  name="Object_84"
                  geometry={nodes.Object_84.geometry}
                  material={materials["Material.002"]}
                />
                <mesh
                  name="Object_85"
                  geometry={nodes.Object_85.geometry}
                  material={materials["Material.008"]}
                />
              </group>
              <group
                name="Cylinder002_35"
                position={[-0.523, 0.5, -0.205]}
                rotation={[-3.017, -0.619, 1.811]}
                scale={[-0.018, 0.018, 0.018]}
              >
                <mesh
                  name="Object_87"
                  geometry={nodes.Object_87.geometry}
                  material={materials["Material.001"]}
                />
                <mesh
                  name="Object_88"
                  geometry={nodes.Object_88.geometry}
                  material={materials["Material.007"]}
                />
              </group>
              <group
                name="Cube_37"
                position={[-0.716, 0.654, -0.091]}
                rotation={[-3.127, -0.697, 0.026]}
                scale={[-0.004, 0.017, 0.015]}
              >
                <mesh
                  name="Object_90"
                  geometry={nodes.Object_90.geometry}
                  material={materials["Material.020"]}
                />
              </group>
              <group
                name="Sphere003_38"
                position={[-0.751, 0.587, -0.138]}
                rotation={[-0.03, 0.698, 0.003]}
                scale={0.066}
              >
                <mesh
                  name="Object_92"
                  geometry={nodes.Object_92.geometry}
                  material={materials["Material.011"]}
                />
                <mesh
                  name="Object_93"
                  geometry={nodes.Object_93.geometry}
                  material={materials["Material.017"]}
                />
                <mesh
                  name="Object_94"
                  geometry={nodes.Object_94.geometry}
                  material={materials["Material.020"]}
                />
                <mesh
                  name="Object_95"
                  geometry={nodes.Object_95.geometry}
                  material={materials["Material.018"]}
                />
                <mesh
                  name="Object_96"
                  geometry={nodes.Object_96.geometry}
                  material={materials["Material.019"]}
                />
                <mesh
                  name="Object_97"
                  geometry={nodes.Object_97.geometry}
                  material={materials["Material.021"]}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/plane.glb");
