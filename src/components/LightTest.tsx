import {
  ContactShadows,
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
  SpotLight,
  SpotLightHelper,
} from "three";
// import '../assets/matcap/matcap.png'

function LightTest() {
  const matcap = useTexture("/matcap/matcap.png");

  const basicRef = useRef<Mesh>(null!);
  const standardRef = useRef<Mesh>(null!);
  const lambertRef = useRef<Mesh>(null!);
  const matCapRef = useRef<Mesh>(null!);
  const spotLightRef = useRef<SpotLight>(null!);

  useHelper(spotLightRef, SpotLightHelper, "red");

  useFrame(() => {
    [basicRef, standardRef, lambertRef, matCapRef].forEach((ref) => {
      ref.current?.rotateX(0.009);
      ref.current?.rotateY(0.005);
      ref.current?.rotateZ(0.002);
    });
  });

  // const { intensity, x } = useControls({
  //   intensity: { value: 1, min: 0, max: 5 },
  //   x: { value: 0, min: -5, max: 5 },
  // });

  const { distance, intensity } = useControls({
    distance: { value: 5, min: 1, max: 10 },
    intensity: { value: 5, min: 0, max: 15 },
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
      {/* <pointLight
        ref={directoinalLightRef}
        position={[x, 6, 0]}
        intensity={intensity}
      /> */}
      <spotLight
        ref={spotLightRef}
        position={[0, 5, 0]}
        distance={distance}
        intensity={intensity}
      />

      {/* <Plane scale={10} rotation-x={-Math.PI / 2} position-y={-2} /> */}
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
      <ContactShadows
        position={[0, -2, 0]}
        // opacity={1}
        scale={20}
        blur={2.5}
        far={10}
        // resolution={256}
        // color="green"
      />
      {/* </Canvas> */}
    </>
  );
}

export default LightTest;
