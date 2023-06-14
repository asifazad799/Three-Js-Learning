import React from "react";
import Box from "./Box";

function Sphere() {
  return <Box geometry={<sphereGeometry args={[1]}/>} wireFrame={true} />;
}

export default Sphere;
