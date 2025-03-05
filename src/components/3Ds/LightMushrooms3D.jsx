import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function LightMushrooms3D(props) {
  const { nodes, materials } = useGLTF('/models/light_mushrooms.glb')
  return (
    <group  {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.749}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh geometry={nodes.Circle_mushroms_0.geometry} material={materials.mushroms}/>
          <mesh geometry={nodes.Circle001_mushroms_0.geometry} material={materials.mushroms} />
          <mesh geometry={nodes.Plane_ground_0.geometry} material={materials.ground} />
          <mesh geometry={nodes.Circle002_mushroms_0.geometry} material={materials.mushroms} />
          <mesh geometry={nodes.Circle005_mushroms_0.geometry} material={materials.mushroms} />
          <mesh geometry={nodes.Icosphere004_mushroms_0.geometry} material={materials.mushroms} />
          <mesh geometry={nodes.Plane001_mushroms_0.geometry} material={materials.mushroms} />
          <mesh geometry={nodes.Plane002_mushroms_0.geometry} material={materials.mushroms} />
          <mesh geometry={nodes.Circle006_mushroms_0.geometry} material={materials.mushroms} />
          <mesh geometry={nodes.Circle004_mushroms_0.geometry} material={materials.mushroms} />
          <mesh geometry={nodes.Cube_mushroms_0.geometry} material={materials.mushroms} />
          <mesh geometry={nodes.Cube001_mushroms_0.geometry} material={materials.mushroms} />
          <mesh geometry={nodes.Icosphere006_mushroms_0.geometry} material={materials.mushroms} />
          <mesh geometry={nodes.Icosphere007_mushroms_0.geometry} material={materials.mushroms} />
          <mesh geometry={nodes.Icosphere008_mushroms_0.geometry} material={materials.mushroms} />
          <mesh geometry={nodes.Icosphere009_mushroms_0.geometry} material={materials.mushroms} />
          <mesh geometry={nodes.Icosphere010_mushroms_0.geometry} material={materials.mushroms} />
          <mesh geometry={nodes.Icosphere001_mushroms_0.geometry} material={materials.mushroms} />
          <mesh geometry={nodes.Icosphere002_mushroms_0.geometry} material={materials.mushroms} />
          <mesh geometry={nodes.Icosphere003_mushroms_0.geometry} material={materials.mushroms} />
          <mesh geometry={nodes.Icosphere005_mushroms_0.geometry} material={materials.mushroms} />
          <mesh geometry={nodes.Icosphere011_mushroms_0.geometry} material={materials.mushroms} />
          <mesh geometry={nodes.Icosphere012_mushroms_0.geometry} material={materials.mushroms} />
          <mesh geometry={nodes.Plane003_mushroms_0.geometry} material={materials.mushroms} />
          <mesh geometry={nodes.Plane004_ground_0.geometry} material={materials.ground} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/light_mushrooms.glb')
