import { useRef } from "react";
// import { Mesh } from "three";
import { Mesh } from "three/src/objects/Mesh.js";
import React from "react";
import { useFrame } from "@react-three/fiber";

type boxProps = {
  geometry?: any;
  wireFrame?: boolean ;
};

const Box: React.FunctionComponent<boxProps> = ({ geometry, wireFrame }) => {
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
    <mesh ref={boxRef} >
      {geometry}
      <meshStandardMaterial
        color={"red"}
        wireframe={wireFrame ? wireFrame : false}
      />
    </mesh>
  );
};

export default Box;
