"use client";

import React, { useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Pacman3D(props) {
  const group = React.useRef();
  const { nodes, materials, animations } = useGLTF("/models/pacmans.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions) {
      actions["Take 001"].setDuration(10).play();
    }
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="60f97de902f24af0ad62dec02e29bfb9fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="finalimagePlane1"
                  position={[0.121, 4.042, -16.568]}
                  scale={1.692}
                />
                <group name="finalFloor1">
                  <mesh
                    name="finalFloor1_finalFloor_0"
                    geometry={nodes.finalFloor1_finalFloor_0.geometry}
                    material={materials.finalFloor}
                  />
                </group>
                <group name="finalgroup1">
                  <group
                    name="finaltestpSphere21pCube6"
                    position={[-4.171, 1.959, 4.745]}
                    rotation={[-0.023, 0, 0.019]}
                  >
                    <group
                      name="finaltestpCube5pSphere19"
                      position={[4.171, -1.959, -4.745]}
                    >
                      <mesh
                        name="finaltestpCube5pSphere19_finalGhost_0"
                        geometry={
                          nodes.finaltestpCube5pSphere19_finalGhost_0.geometry
                        }
                        material={materials.finalGhost}
                      />
                    </group>
                    <mesh
                      name="finaltestpSphere21pCube6_finalBlack_0"
                      geometry={
                        nodes.finaltestpSphere21pCube6_finalBlack_0.geometry
                      }
                      material={materials.finalBlack}
                    />
                  </group>
                  <group
                    name="finaltestpCube2pSphere22"
                    position={[-5.174, 1.867, 6.392]}
                    rotation={[0.001, 0, 0.012]}
                  >
                    <group
                      name="finaltestpSphere18pCube3"
                      position={[5.174, -1.867, -6.392]}
                    >
                      <mesh
                        name="finaltestpSphere18pCube3_finalGhost_0"
                        geometry={
                          nodes.finaltestpSphere18pCube3_finalGhost_0.geometry
                        }
                        material={materials.finalGhost}
                      />
                    </group>
                    <mesh
                      name="finaltestpCube2pSphere22_finalBlack_0"
                      geometry={
                        nodes.finaltestpCube2pSphere22_finalBlack_0.geometry
                      }
                      material={materials.finalBlack}
                    />
                  </group>
                  <group name="finaltestpSphere18">
                    <mesh
                      name="finaltestpSphere18_finalGhost_0"
                      geometry={nodes.finaltestpSphere18_finalGhost_0.geometry}
                      material={materials.finalGhost}
                    />
                  </group>
                  <group name="finaltestpSphere21">
                    <mesh
                      name="finaltestpSphere21_finalBlack_0"
                      geometry={nodes.finaltestpSphere21_finalBlack_0.geometry}
                      material={materials.finalBlack}
                    />
                  </group>
                </group>
                <group name="finalgroup2">
                  <group
                    name="finaltestpSphere20pCube5"
                    position={[1.804, 3.134, 0.474]}
                    rotation={[0, 0, 0.087]}
                  >
                    <group
                      name="finaltestpSphere17pCube5"
                      position={[0.223, 0, 0]}
                    >
                      <mesh
                        name="finaltestpSphere17pCube5_finalGhost_0"
                        geometry={
                          nodes.finaltestpSphere17pCube5_finalGhost_0.geometry
                        }
                        material={materials.finalGhost}
                      />
                    </group>
                    <mesh
                      name="finaltestpSphere20pCube5_finalBlack_0"
                      geometry={
                        nodes.finaltestpSphere20pCube5_finalBlack_0.geometry
                      }
                      material={materials.finalBlack}
                    />
                  </group>
                  <group
                    name="finaltestpCube1pSphere21"
                    position={[-1.838, 3.134, 0.474]}
                    rotation={[0, 0, -0.087]}
                  >
                    <group
                      name="finaltestpCube1pSphere18"
                      position={[-0.223, 0, 0.001]}
                    >
                      <mesh
                        name="finaltestpCube1pSphere18_finalGhost_0"
                        geometry={
                          nodes.finaltestpCube1pSphere18_finalGhost_0.geometry
                        }
                        material={materials.finalGhost}
                      />
                    </group>
                    <mesh
                      name="finaltestpCube1pSphere21_finalBlack_0"
                      geometry={
                        nodes.finaltestpCube1pSphere21_finalBlack_0.geometry
                      }
                      material={materials.finalBlack}
                    />
                  </group>
                  <group name="finaltestpSphere17">
                    <mesh
                      name="finaltestpSphere17_finalGhost_0"
                      geometry={nodes.finaltestpSphere17_finalGhost_0.geometry}
                      material={materials.finalGhost}
                    />
                  </group>
                  <group name="finaltestpSphere20">
                    <mesh
                      name="finaltestpSphere20_finalBlack_0"
                      geometry={nodes.finaltestpSphere20_finalBlack_0.geometry}
                      material={materials.finalBlack}
                    />
                  </group>
                </group>
                <group name="finalgroup3">
                  <group
                    name="finaltestpCube44pSphere23"
                    position={[4.702, 2.431, 4.123]}
                    rotation={[-0.002, 0, -0.003]}
                  >
                    <group
                      name="finaltestpSphere19pCube44"
                      position={[-4.702, -2.431, -4.123]}
                    >
                      <mesh
                        name="finaltestpSphere19pCube44_finalGhost_0"
                        geometry={
                          nodes.finaltestpSphere19pCube44_finalGhost_0.geometry
                        }
                        material={materials.finalGhost}
                      />
                    </group>
                    <group
                      name="finalgroup6"
                      position={[-4.702, -2.431, -4.123]}
                    >
                      <group name="finaltestpCube45">
                        <mesh
                          name="finaltestpCube45_finalFloor_0"
                          geometry={
                            nodes.finaltestpCube45_finalFloor_0.geometry
                          }
                          material={materials.finalFloor}
                        />
                      </group>
                      <group name="finaltestpCone1">
                        <mesh
                          name="finaltestpCone1_finalFloor_0"
                          geometry={nodes.finaltestpCone1_finalFloor_0.geometry}
                          material={materials.finalFloor}
                        />
                      </group>
                      <group name="finalpCone1">
                        <mesh
                          name="finalpCone1_finalBlack_0"
                          geometry={nodes.finalpCone1_finalBlack_0.geometry}
                          material={materials.finalBlack}
                        />
                      </group>
                    </group>
                    <mesh
                      name="finaltestpCube44pSphere23_finalBlack_0"
                      geometry={
                        nodes.finaltestpCube44pSphere23_finalBlack_0.geometry
                      }
                      material={materials.finalBlack}
                    />
                  </group>
                  <group name="finaltestpSphere22">
                    <mesh
                      name="finaltestpSphere22_finalBlack_0"
                      geometry={nodes.finaltestpSphere22_finalBlack_0.geometry}
                      material={materials.finalBlack}
                    />
                  </group>
                  <group
                    name="finaltestpSphere22pCube7"
                    position={[0.004, 0, -0.003]}
                    rotation={[-0.001, -0.001, -0.001]}
                  >
                    <group name="finaltestpCube6pSphere20">
                      <mesh
                        name="finaltestpCube6pSphere20_finalGhost_0"
                        geometry={
                          nodes.finaltestpCube6pSphere20_finalGhost_0.geometry
                        }
                        material={materials.finalGhost}
                      />
                    </group>
                    <mesh
                      name="finaltestpSphere22pCube7_finalBlack_0"
                      geometry={
                        nodes.finaltestpSphere22pCube7_finalBlack_0.geometry
                      }
                      material={materials.finalBlack}
                    />
                  </group>
                  <group name="finaltestpSphere19">
                    <mesh
                      name="finaltestpSphere19_finalGhost_0"
                      geometry={nodes.finaltestpSphere19_finalGhost_0.geometry}
                      material={materials.finalGhost}
                    />
                  </group>
                </group>
                <group name="finalgroup4">
                  <group name="finaltestRockpCube7">
                    <mesh
                      name="finaltestRockpCube7_finalFloor_0"
                      geometry={nodes.finaltestRockpCube7_finalFloor_0.geometry}
                      material={materials.finalFloor}
                    />
                  </group>
                  <group name="finaltestRockpCube9">
                    <mesh
                      name="finaltestRockpCube9_finalFloor_0"
                      geometry={nodes.finaltestRockpCube9_finalFloor_0.geometry}
                      material={materials.finalFloor}
                    />
                  </group>
                  <group name="finaltestRockpCube8">
                    <mesh
                      name="finaltestRockpCube8_finalFloor_0"
                      geometry={nodes.finaltestRockpCube8_finalFloor_0.geometry}
                      material={materials.finalFloor}
                    />
                  </group>
                  <group name="finaltestRockpCube19">
                    <mesh
                      name="finaltestRockpCube19_finalFloor_0"
                      geometry={
                        nodes.finaltestRockpCube19_finalFloor_0.geometry
                      }
                      material={materials.finalFloor}
                    />
                  </group>
                  <group name="finaltestRockpCube10">
                    <mesh
                      name="finaltestRockpCube10_finalFloor_0"
                      geometry={
                        nodes.finaltestRockpCube10_finalFloor_0.geometry
                      }
                      material={materials.finalFloor}
                    />
                  </group>
                  <group name="finaltestRockpCube11">
                    <mesh
                      name="finaltestRockpCube11_finalFloor_0"
                      geometry={
                        nodes.finaltestRockpCube11_finalFloor_0.geometry
                      }
                      material={materials.finalFloor}
                    />
                  </group>
                  <group name="finaltestRockpCube13">
                    <mesh
                      name="finaltestRockpCube13_finalFloor_0"
                      geometry={
                        nodes.finaltestRockpCube13_finalFloor_0.geometry
                      }
                      material={materials.finalFloor}
                    />
                  </group>
                  <group name="finaltestRockpCube17">
                    <mesh
                      name="finaltestRockpCube17_finalFloor_0"
                      geometry={
                        nodes.finaltestRockpCube17_finalFloor_0.geometry
                      }
                      material={materials.finalFloor}
                    />
                  </group>
                  <group name="finaltestRockpCube14">
                    <mesh
                      name="finaltestRockpCube14_finalFloor_0"
                      geometry={
                        nodes.finaltestRockpCube14_finalFloor_0.geometry
                      }
                      material={materials.finalFloor}
                    />
                  </group>
                  <group name="finaltestRockpCube12">
                    <mesh
                      name="finaltestRockpCube12_finalFloor_0"
                      geometry={
                        nodes.finaltestRockpCube12_finalFloor_0.geometry
                      }
                      material={materials.finalFloor}
                    />
                  </group>
                  <group name="finaltestRockpCube41">
                    <mesh
                      name="finaltestRockpCube41_finalFloor_0"
                      geometry={
                        nodes.finaltestRockpCube41_finalFloor_0.geometry
                      }
                      material={materials.finalFloor}
                    />
                  </group>
                  <group name="finaltestRockpCube40">
                    <mesh
                      name="finaltestRockpCube40_finalFloor_0"
                      geometry={
                        nodes.finaltestRockpCube40_finalFloor_0.geometry
                      }
                      material={materials.finalFloor}
                    />
                  </group>
                  <group name="finaltestRockpCube39">
                    <mesh
                      name="finaltestRockpCube39_finalFloor_0"
                      geometry={
                        nodes.finaltestRockpCube39_finalFloor_0.geometry
                      }
                      material={materials.finalFloor}
                    />
                  </group>
                  <group name="finaltestpCube43Rock">
                    <mesh
                      name="finaltestpCube43Rock_finalFloor_0"
                      geometry={
                        nodes.finaltestpCube43Rock_finalFloor_0.geometry
                      }
                      material={materials.finalFloor}
                    />
                  </group>
                  <group name="finaltestRockpCube37">
                    <mesh
                      name="finaltestRockpCube37_finalFloor_0"
                      geometry={
                        nodes.finaltestRockpCube37_finalFloor_0.geometry
                      }
                      material={materials.finalFloor}
                    />
                  </group>
                  <group name="finaltestRockpCube38">
                    <mesh
                      name="finaltestRockpCube38_finalFloor_0"
                      geometry={
                        nodes.finaltestRockpCube38_finalFloor_0.geometry
                      }
                      material={materials.finalFloor}
                    />
                  </group>
                  <group name="finaltestRockpCube30">
                    <mesh
                      name="finaltestRockpCube30_finalFloor_0"
                      geometry={
                        nodes.finaltestRockpCube30_finalFloor_0.geometry
                      }
                      material={materials.finalFloor}
                    />
                  </group>
                  <group name="finaltestRockpCube20">
                    <mesh
                      name="finaltestRockpCube20_finalFloor_0"
                      geometry={
                        nodes.finaltestRockpCube20_finalFloor_0.geometry
                      }
                      material={materials.finalFloor}
                    />
                  </group>
                  <group name="finaltestRockpCube18">
                    <mesh
                      name="finaltestRockpCube18_finalFloor_0"
                      geometry={
                        nodes.finaltestRockpCube18_finalFloor_0.geometry
                      }
                      material={materials.finalFloor}
                    />
                  </group>
                  <group name="finaltestRockpCube16">
                    <mesh
                      name="finaltestRockpCube16_finalFloor_0"
                      geometry={
                        nodes.finaltestRockpCube16_finalFloor_0.geometry
                      }
                      material={materials.finalFloor}
                    />
                  </group>
                  <group name="finaltestRockpCube15">
                    <mesh
                      name="finaltestRockpCube15_finalFloor_0"
                      geometry={
                        nodes.finaltestRockpCube15_finalFloor_0.geometry
                      }
                      material={materials.finalFloor}
                    />
                  </group>
                  <group name="finaltestRockpCube42">
                    <mesh
                      name="finaltestRockpCube42_finalFloor_0"
                      geometry={
                        nodes.finaltestRockpCube42_finalFloor_0.geometry
                      }
                      material={materials.finalFloor}
                    />
                  </group>
                  <group name="finaltestpolySurface4">
                    <mesh
                      name="finaltestpolySurface4_finalFloor_0"
                      geometry={
                        nodes.finaltestpolySurface4_finalFloor_0.geometry
                      }
                      material={materials.finalFloor}
                    />
                  </group>
                  <group name="finaltestRockpCube46">
                    <mesh
                      name="finaltestRockpCube46_finalFloor_0"
                      geometry={
                        nodes.finaltestRockpCube46_finalFloor_0.geometry
                      }
                      material={materials.finalFloor}
                    />
                  </group>
                  <group name="finaltestRockpCube47">
                    <mesh
                      name="finaltestRockpCube47_finalFloor_0"
                      geometry={
                        nodes.finaltestRockpCube47_finalFloor_0.geometry
                      }
                      material={materials.finalFloor}
                    />
                  </group>
                  <group name="finaltestRockpCube27">
                    <mesh
                      name="finaltestRockpCube27_finalFloor_0"
                      geometry={
                        nodes.finaltestRockpCube27_finalFloor_0.geometry
                      }
                      material={materials.finalFloor}
                    />
                  </group>
                  <group name="finaltestRockpCube26">
                    <mesh
                      name="finaltestRockpCube26_finalFloor_0"
                      geometry={
                        nodes.finaltestRockpCube26_finalFloor_0.geometry
                      }
                      material={materials.finalFloor}
                    />
                  </group>
                  <group name="finaltestRockpCube25">
                    <mesh
                      name="finaltestRockpCube25_finalFloor_0"
                      geometry={
                        nodes.finaltestRockpCube25_finalFloor_0.geometry
                      }
                      material={materials.finalFloor}
                    />
                  </group>
                  <group name="finaltestRockpCube21">
                    <mesh
                      name="finaltestRockpCube21_finalFloor_0"
                      geometry={
                        nodes.finaltestRockpCube21_finalFloor_0.geometry
                      }
                      material={materials.finalFloor}
                    />
                  </group>
                  <group name="finaltestRockpCube22">
                    <mesh
                      name="finaltestRockpCube22_finalFloor_0"
                      geometry={
                        nodes.finaltestRockpCube22_finalFloor_0.geometry
                      }
                      material={materials.finalFloor}
                    />
                  </group>
                  <group name="finaltestRockpCube28">
                    <mesh
                      name="finaltestRockpCube28_finalFloor_0"
                      geometry={
                        nodes.finaltestRockpCube28_finalFloor_0.geometry
                      }
                      material={materials.finalFloor}
                    />
                  </group>
                  <group name="finaltestRockpCube24">
                    <mesh
                      name="finaltestRockpCube24_finalFloor_0"
                      geometry={
                        nodes.finaltestRockpCube24_finalFloor_0.geometry
                      }
                      material={materials.finalFloor}
                    />
                  </group>
                  <group name="finaltestRockpCube32">
                    <mesh
                      name="finaltestRockpCube32_finalFloor_0"
                      geometry={
                        nodes.finaltestRockpCube32_finalFloor_0.geometry
                      }
                      material={materials.finalFloor}
                    />
                  </group>
                  <group name="finaltestRockpCube33">
                    <mesh
                      name="finaltestRockpCube33_finalFloor_0"
                      geometry={
                        nodes.finaltestRockpCube33_finalFloor_0.geometry
                      }
                      material={materials.finalFloor}
                    />
                  </group>
                  <group name="finaltestRockpCube34">
                    <mesh
                      name="finaltestRockpCube34_finalFloor_0"
                      geometry={
                        nodes.finaltestRockpCube34_finalFloor_0.geometry
                      }
                      material={materials.finalFloor}
                    />
                  </group>
                  <group name="finaltestRockpCube35">
                    <mesh
                      name="finaltestRockpCube35_finalFloor_0"
                      geometry={
                        nodes.finaltestRockpCube35_finalFloor_0.geometry
                      }
                      material={materials.finalFloor}
                    />
                  </group>
                  <group name="finaltestRockpCube36">
                    <mesh
                      name="finaltestRockpCube36_finalFloor_0"
                      geometry={
                        nodes.finaltestRockpCube36_finalFloor_0.geometry
                      }
                      material={materials.finalFloor}
                    />
                  </group>
                  <group name="finaltestRockpCube29">
                    <mesh
                      name="finaltestRockpCube29_finalFloor_0"
                      geometry={
                        nodes.finaltestRockpCube29_finalFloor_0.geometry
                      }
                      material={materials.finalFloor}
                    />
                  </group>
                </group>
                <group name="finalgroup5">
                  <group name="finalWood_black1">
                    <mesh
                      name="finalWood_black1_finalBlack_0"
                      geometry={nodes.finalWood_black1_finalBlack_0.geometry}
                      material={materials.finalBlack}
                    />
                  </group>
                  <group name="finalWood_black2">
                    <mesh
                      name="finalWood_black2_finalBlack_0"
                      geometry={nodes.finalWood_black2_finalBlack_0.geometry}
                      material={materials.finalBlack}
                    />
                  </group>
                  <group name="finalWood_black3">
                    <mesh
                      name="finalWood_black3_finalBlack_0"
                      geometry={nodes.finalWood_black3_finalBlack_0.geometry}
                      material={materials.finalBlack}
                    />
                  </group>
                  <group name="finalWood2">
                    <mesh
                      name="finalWood2_finalFloor_0"
                      geometry={nodes.finalWood2_finalFloor_0.geometry}
                      material={materials.finalFloor}
                    />
                  </group>
                  <group name="finalWood3">
                    <mesh
                      name="finalWood3_finalFloor_0"
                      geometry={nodes.finalWood3_finalFloor_0.geometry}
                      material={materials.finalFloor}
                    />
                  </group>
                  <group name="finalWood1">
                    <mesh
                      name="finalWood1_finalFloor_0"
                      geometry={nodes.finalWood1_finalFloor_0.geometry}
                      material={materials.finalFloor}
                    />
                  </group>
                </group>
                <group name="finalBFire">
                  <group name="finalFire_W1_1">
                    <mesh
                      name="finalFire_W1_1_finalFire_0"
                      geometry={nodes.finalFire_W1_1_finalFire_0.geometry}
                      material={materials.finalFire}
                    />
                  </group>
                  <group name="finalFire_W1_2">
                    <mesh
                      name="finalFire_W1_2_finalFire_0"
                      geometry={nodes.finalFire_W1_2_finalFire_0.geometry}
                      material={materials.finalFire}
                    />
                  </group>
                  <group name="finalFire_W1_3">
                    <mesh
                      name="finalFire_W1_3_finalFire_0"
                      geometry={nodes.finalFire_W1_3_finalFire_0.geometry}
                      material={materials.finalFire}
                    />
                  </group>
                  <group name="finalFire_W1_4">
                    <mesh
                      name="finalFire_W1_4_finalFire_0"
                      geometry={nodes.finalFire_W1_4_finalFire_0.geometry}
                      material={materials.finalFire}
                    />
                  </group>
                  <group name="finalFire_W1_5">
                    <mesh
                      name="finalFire_W1_5_finalFire_0"
                      geometry={nodes.finalFire_W1_5_finalFire_0.geometry}
                      material={materials.finalFire}
                    />
                  </group>
                  <group name="finalFire_W1_6">
                    <mesh
                      name="finalFire_W1_6_finalFire_0"
                      geometry={nodes.finalFire_W1_6_finalFire_0.geometry}
                      material={materials.finalFire}
                    />
                  </group>
                  <group name="finalFire_W1_7">
                    <mesh
                      name="finalFire_W1_7_finalFire_0"
                      geometry={nodes.finalFire_W1_7_finalFire_0.geometry}
                      material={materials.finalFire}
                    />
                  </group>
                  <group name="finalFire_W1_8">
                    <mesh
                      name="finalFire_W1_8_finalFire_0"
                      geometry={nodes.finalFire_W1_8_finalFire_0.geometry}
                      material={materials.finalFire}
                    />
                  </group>
                </group>
                <group
                  name="finalBFire1"
                  position={[-4.39, -0.316, 3.535]}
                  rotation={[-0.077, 0.971, 0.06]}
                  scale={[0.92, 0.925, 0.828]}
                >
                  <group name="finalFire_W1_1_1">
                    <mesh
                      name="finalFire_W1_1_finalFire_0_1"
                      geometry={nodes.finalFire_W1_1_finalFire_0_1.geometry}
                      material={materials.finalFire}
                    />
                  </group>
                  <group name="finalFire_W1_2_1">
                    <mesh
                      name="finalFire_W1_2_finalFire_0_1"
                      geometry={nodes.finalFire_W1_2_finalFire_0_1.geometry}
                      material={materials.finalFire}
                    />
                  </group>
                  <group name="finalFire_W1_3_1">
                    <mesh
                      name="finalFire_W1_3_finalFire_0_1"
                      geometry={nodes.finalFire_W1_3_finalFire_0_1.geometry}
                      material={materials.finalFire}
                    />
                  </group>
                  <group name="finalFire_W1_4_1">
                    <mesh
                      name="finalFire_W1_4_finalFire_0_1"
                      geometry={nodes.finalFire_W1_4_finalFire_0_1.geometry}
                      material={materials.finalFire}
                    />
                  </group>
                  <group name="finalFire_W1_5_1">
                    <mesh
                      name="finalFire_W1_5_finalFire_0_1"
                      geometry={nodes.finalFire_W1_5_finalFire_0_1.geometry}
                      material={materials.finalFire}
                    />
                  </group>
                  <group name="finalFire_W1_6_1">
                    <mesh
                      name="finalFire_W1_6_finalFire_0_1"
                      geometry={nodes.finalFire_W1_6_finalFire_0_1.geometry}
                      material={materials.finalFire}
                    />
                  </group>
                  <group name="finalFire_W1_7_1">
                    <mesh
                      name="finalFire_W1_7_finalFire_0_1"
                      geometry={nodes.finalFire_W1_7_finalFire_0_1.geometry}
                      material={materials.finalFire}
                    />
                  </group>
                  <group name="finalFire_W1_8_1">
                    <mesh
                      name="finalFire_W1_8_finalFire_0_1"
                      geometry={nodes.finalFire_W1_8_finalFire_0_1.geometry}
                      material={materials.finalFire}
                    />
                  </group>
                </group>
                <group
                  name="finalBFire2"
                  position={[3.828, -0.044, 3.151]}
                  rotation={[0.009, -0.827, -0.042]}
                  scale={[0.852, 0.857, 0.766]}
                >
                  <group name="finalFire_W1_1_2">
                    <mesh
                      name="finalFire_W1_1_finalFire_0_2"
                      geometry={nodes.finalFire_W1_1_finalFire_0_2.geometry}
                      material={materials.finalFire}
                    />
                  </group>
                  <group name="finalFire_W1_2_2">
                    <mesh
                      name="finalFire_W1_2_finalFire_0_2"
                      geometry={nodes.finalFire_W1_2_finalFire_0_2.geometry}
                      material={materials.finalFire}
                    />
                  </group>
                  <group name="finalFire_W1_3_2">
                    <mesh
                      name="finalFire_W1_3_finalFire_0_2"
                      geometry={nodes.finalFire_W1_3_finalFire_0_2.geometry}
                      material={materials.finalFire}
                    />
                  </group>
                  <group name="finalFire_W1_4_2">
                    <mesh
                      name="finalFire_W1_4_finalFire_0_2"
                      geometry={nodes.finalFire_W1_4_finalFire_0_2.geometry}
                      material={materials.finalFire}
                    />
                  </group>
                  <group name="finalFire_W1_5_2">
                    <mesh
                      name="finalFire_W1_5_finalFire_0_2"
                      geometry={nodes.finalFire_W1_5_finalFire_0_2.geometry}
                      material={materials.finalFire}
                    />
                  </group>
                  <group name="finalFire_W1_6_2">
                    <mesh
                      name="finalFire_W1_6_finalFire_0_2"
                      geometry={nodes.finalFire_W1_6_finalFire_0_2.geometry}
                      material={materials.finalFire}
                    />
                  </group>
                  <group name="finalFire_W1_7_2">
                    <mesh
                      name="finalFire_W1_7_finalFire_0_2"
                      geometry={nodes.finalFire_W1_7_finalFire_0_2.geometry}
                      material={materials.finalFire}
                    />
                  </group>
                  <group name="finalFire_W1_8_2">
                    <mesh
                      name="finalFire_W1_8_finalFire_0_2"
                      geometry={nodes.finalFire_W1_8_finalFire_0_2.geometry}
                      material={materials.finalFire}
                    />
                  </group>
                </group>
                <group name="finalBWaka">
                  <group
                    name="finalWakawaka1"
                    position={[-0.023, 8.364, 0.282]}
                  >
                    <mesh
                      name="finalWakawaka1_finalWaka_0"
                      geometry={nodes.finalWakawaka1_finalWaka_0.geometry}
                      material={materials.finalWaka}
                    />
                  </group>
                  <group name="finalWakawaka2" position={[0, 8.361, 0.282]}>
                    <mesh
                      name="finalWakawaka2_finalWaka_0"
                      geometry={nodes.finalWakawaka2_finalWaka_0.geometry}
                      material={materials.finalWaka}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/pacmans.glb");
