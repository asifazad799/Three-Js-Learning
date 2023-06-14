import { Canvas, useThree } from "@react-three/fiber";
import Box from "./Box";

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
      <pointLight position={[5, 5, 5]} />
      <axesHelper args={[10]} />
      <Controls />
      {/* <pointLight position={[-51, -5, -5]} /> */}
      <Box />
    </Canvas>
  );
}

export default TestSample3D;
