/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 public/duck/rubber_duck_toy_4k.gltf -t -r public
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    rubber_duck_toy: THREE.Mesh
  }
  materials: {
    rubber_duck_toy: THREE.MeshStandardMaterial
  }
}

export function RubberDuck(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/duck/rubber_duck_toy_4k.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.rubber_duck_toy.geometry} material={materials.rubber_duck_toy} />
    </group>
  )
}

useGLTF.preload('/duck/rubber_duck_toy_4k.gltf')
