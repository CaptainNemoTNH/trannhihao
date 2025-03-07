import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Telescope3D(props) {
  const { nodes, materials } = useGLTF('/models/telescope.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.group756371822.geometry} material={materials.mat17} />
      <mesh geometry={nodes.mesh64228703.geometry} material={materials.mat17} />
      <mesh geometry={nodes.mesh64228703_1.geometry} material={materials.mat20} />
      <mesh geometry={nodes.mesh64228703_2.geometry} material={materials.mat19} />
      <mesh geometry={nodes.mesh64228703_3.geometry} material={materials.mat18} />
      <mesh geometry={nodes.mesh64228703_4.geometry} material={materials.mat25} />
      <mesh geometry={nodes.mesh135009730.geometry} material={materials.mat17} />
      <mesh geometry={nodes.mesh135009730_1.geometry} material={materials.mat16} />
      <mesh geometry={nodes.mesh135009730_2.geometry} material={materials.mat15} />
      <mesh geometry={nodes.mesh135009730_3.geometry} material={materials.mat5} />
      <mesh geometry={nodes.mesh135009730_4.geometry} material={materials.mat21} />
      <mesh geometry={nodes.mesh135009730_5.geometry} material={materials.mat8} />
      <mesh geometry={nodes.mesh135009730_6.geometry} material={materials.mat20} />
    </group>
  )
}

useGLTF.preload('/models/telescope.glb')
