import { Canvas } from "@react-three/fiber";
import Box from "./Box";

function TestSample3D() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[5, 5, 5]} />
      
      {/* <pointLight position={[-51, -5, -5]} /> */}
      <Box />
    </Canvas>
  );
}

export default TestSample3D;
