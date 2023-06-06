import { useRef } from "react";
// import { Mesh } from "three";
import { Mesh } from "three/src/objects/Mesh.js";

import { useFrame } from "@react-three/fiber";

function Box() {
  const boxRef = useRef<Mesh>(null);

  useFrame(() => {
    // console.log(boxRef,'afkjaskfbjasf')
    if (boxRef?.current) {
      boxRef.current.rotation.x += 0.01;
      boxRef.current.rotation.y += 0.01;
      //  boxRef.current.translateX(0.010);
      // boxRef.current.scale.x = 10;
    }
  });

  return (
    <mesh ref={boxRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
}

export default Box;
