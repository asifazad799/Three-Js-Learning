import { folder, useControls } from "leva";
import { Box } from "@react-three/drei";

function TweakableBox() {
  const { scale } = useControls("Box", {
    transform: folder({ scale: 1 }),
  });

  return (
    <Box scale={scale}>
      <meshBasicMaterial />
    </Box>
  );
}

export default TweakableBox;
