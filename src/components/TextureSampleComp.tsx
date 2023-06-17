import {
  Box,
  OrbitControls,
  Plane,
  Sphere,
  useHelper,
  useTexture,
} from "@react-three/drei";
import { useRef } from "react";
import {
  LinearEncoding,
  LinearSRGBColorSpace,
  PointLight,
  PointLightHelper,
} from "three";
// import texture1 from "../../public/textures/texturesRokcs/gravel_stones_nor_gl_1k.jpg";

function TextureSampleComp() {
  const terrainTextures = useTexture({
    map: "../../public/textures/texturesRokcs/gravel_stones_diff_1k.jpg",
    displacementMap:
      "../../public/textures/texturesRokcs/gravel_stones_disp_1k.jpg",
    aoMap: "../../public/textures/texturesRokcs/gravel_stones_arm_1k.jpg",
    roughnessMap:
      "../../public/textures/texturesRokcs/gravel_stones_arm_1k.jpg",
    metalnessMap:
      "../../public/textures/texturesRokcs/gravel_stones_arm_1k.jpg",
    normalMap:
      "../../public/textures/texturesRokcs/gravel_stones_nor_gl_1k.jpg",
  });
  const lightRef = useRef<PointLight>(null!);
  useHelper(lightRef, PointLightHelper, 5, "red");

  return (
    <>
      <ambientLight />
      <pointLight ref={lightRef} position={[15, 15, -10]} intensity={4} />
      <OrbitControls />
      <Plane args={[40, 40, 556, 556]} rotation-x={-Math.PI / 2}>
        <meshStandardMaterial
          {...terrainTextures}
          normalMap-encoding={LinearSRGBColorSpace}
          metalness={1}
          metalnessMap={null} 
        />
      </Plane>
      ;
    </>
  );
}

export default TextureSampleComp;
