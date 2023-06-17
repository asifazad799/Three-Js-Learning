import { Canvas, useThree } from "@react-three/fiber";
import Box from "./Box";
import Sphere from "./Sphere";
import { Sofa } from "../assets/3dModelsJSX/Sofa";
import {
  Float,
  ContactShadows,
  OrbitControls,
  useHelper,
  Plane,
} from "@react-three/drei";
import { RubberDuck } from "../assets/3dModelsJSX/RubberDuck";
import TweakableBox from "./TweakableBox";
import TextureSampleComp from "./TextureSampleComp";

function TestSample3D() {
  // const Controls = () => {
  //   const {
  //     camera,
  //     gl: { domElement },
  //   } = useThree();

  //   return <orbitControls args={[camera, domElement]} />;
  // };

  // const lightRef = useRef<PointLight>(null!);

  // useHelper(lightRef, PointLightHelper, 1, "red");

  return (
    <Canvas camera={{ position: [0, 40, 35] }}>
      {/* <ambientLight />
      <pointLight  position={[5, 5, 0]} intensity={4} />
      <OrbitControls /> */}
      {/* <pointLight position={[-3, -3, 2]} /> */}
      {/* <axesHelper args={[10]} /> */}
      {/* <Controls /> */}
      {/* <pointLight position={[-51, -5, -5]} /> */}
      {/* <Box geometry={<boxGeometry args={[1, 1, 1]} />} /> */}
      {/* <Sphere /> */}
      {/* <Float speed={1.4} rotationIntensity={1.5} floatIntensity={2.3}>
        <Sofa position={[0, 0.5, -1]} />
      </Float>
      <Float speed={1.4} rotationIntensity={1.5} floatIntensity={2.3}>
        <RubberDuck scale={4} position={[-2, 0.3, -1]} />
      </Float>
      <ContactShadows
        position={[0, -0.3, 0]}
        // opacity={1}
        scale={20}
        blur={2.5}
        far={10}
        // resolution={256}
        // color="green"
      /> */}
      {/* <TweakableBox /> */}
      <TextureSampleComp />
    </Canvas>
  );
}

export default TestSample3D;
