import { Canvas, useThree } from "@react-three/fiber";
import Box from "./Box";
import Sphere from "./Sphere";
import { Sofa } from "../assets/3dModelsJSX/Sofa";
import { Float, ContactShadows } from "@react-three/drei";
import { RubberDuck } from "../assets/3dModelsJSX/RubberDuck";
import TweakableBox from "./TweakableBox";

function TestSample3D() {
  const Controls = () => {
    const {
      camera,
      gl: { domElement },
    } = useThree();

    return <orbitControls args={[camera, domElement]} />;
  };

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[5, 5, 5]} intensity={3} />
      <pointLight position={[-3, -3, 2]} />
      {/* <axesHelper args={[10]} /> */}
      <Controls />
      {/* <pointLight position={[-51, -5, -5]} /> */}
      {/* <Box geometry={<boxGeometry args={[1, 1, 1]} />}/> */}
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
    </Canvas>
  );
}

export default TestSample3D;
