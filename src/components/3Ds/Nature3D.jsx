
import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Nature3D(props) {
  const { nodes, materials } = useGLTF('/models/nature.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['Node-Mesh'].geometry} material={materials.mat10} />
      <mesh geometry={nodes['Node-Mesh_1'].geometry} material={materials.mat20} />
      <mesh geometry={nodes['Node-Mesh_2'].geometry} material={materials.mat22} />
      <mesh geometry={nodes['Node-Mesh_3'].geometry} material={materials.mat4} />
      <mesh geometry={nodes['Node-Mesh_4'].geometry} material={materials.mat9} />
      <mesh geometry={nodes['Node-Mesh_5'].geometry} material={materials.mat12} />
      <mesh geometry={nodes['Node-Mesh_6'].geometry} material={materials.mat8} />
      <mesh geometry={nodes['Node-Mesh_7'].geometry} material={materials.mat21} />
      <mesh geometry={nodes['Node-Mesh_8'].geometry} material={materials.mat7} />
      <mesh geometry={nodes['Node-Mesh_9'].geometry} material={materials.mat3} />
    </group>
  )
}

useGLTF.preload('/models/nature.glb')
