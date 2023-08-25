import {
  OrbitControls,
  Plane,
  TorusKnot,
  useHelper,
  useTexture,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import React, { useRef } from "react";
import {
  Mesh,
  DirectionalLight,
  DirectionalLightHelper,
  PointLight,
  PointLightHelper,
} from "three";
// import '../assets/matcap/matcap.png'

function LightTest() {
  const matcap = useTexture("/matcap/matcap.png");

  const basicRef = useRef<Mesh>();
  const standardRef = useRef<Mesh>();
  const lambertRef = useRef<Mesh>();
  const matCapRef = useRef<Mesh>();
  const directoinalLightRef = useRef<PointLight>();

  useHelper(directoinalLightRef, PointLightHelper, 1, "red");

  useFrame(() => {
    [basicRef, standardRef, lambertRef, matCapRef].forEach((ref) => {
      ref.current?.rotateX(0.009);
      ref.current?.rotateY(0.005);
      ref.current?.rotateZ(0.002);
    });
  });

  const { intensity, x } = useControls({
    intensity: { value: 1, min: 0, max: 5 },
    x: { value: 0, min: -5, max: 5 },
  });

  return (
    <>
      {/* <Canvas camera={{ position: [0, 40, 35] }}>
        <pointLight position={[5, 5, 0]} intensity={4} />
    <OrbitControls /> */}
      {/* <ambientLight intensity={intensity} /> */}
      {/* <hemisphereLight args={["red", "green", intensity]} /> */}
      {/* <directionalLight
        ref={directoinalLightRef}
        position={[x, 5, 0]}
        intensity={intensity}
      /> */}
      <pointLight
        ref={directoinalLightRef}
        position={[x, 6, 0]}
        intensity={intensity}
      />
      <Plane scale={10} rotation-x={-Math.PI / 2} position-y={-2} />
      <TorusKnot ref={basicRef} position={[-2, 0, -2]}>
        <meshBasicMaterial color={"red"} />
      </TorusKnot>
      <TorusKnot ref={standardRef} position={[-2, 0, 2]}>
        <meshStandardMaterial color={"red"} />
      </TorusKnot>
      <TorusKnot ref={lambertRef} position={[2, 0, -2]}>
        <meshLambertMaterial color={"red"} />
      </TorusKnot>
      <TorusKnot ref={matCapRef} position={[2, 0, 2]}>
        <meshMatcapMaterial matcap={matcap} />
      </TorusKnot>
      {/* </Canvas> */}
    </>
  );
}

export default LightTest;
