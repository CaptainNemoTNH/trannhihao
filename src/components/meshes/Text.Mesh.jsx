import { Environment, Float, RenderTexture, Text } from "@react-three/drei";
import { Color } from "three";
import Glitch from "./Glitch.Mesh";

export default function TextMesh(props) {
  const bloomColor = new Color("#fff");
  bloomColor.multiplyScalar(1.5);

  return (
    <>
      <Text font={"fonts/Poppins-Black.ttf"} textAlign="center">
        WELCOME {"\n"} TO {"\n"} MY SPACE
        <meshBasicMaterial color={bloomColor} toneMapped={false}>
          <RenderTexture attach={"map"}>
            <color attach="background" args={["#00b294"]} />
            <Environment preset="sunset" />
            <Float floatIntensity={4} rotationIntensity={5}>
              <Glitch scale={2.5} />
            </Float>
          </RenderTexture>
        </meshBasicMaterial>
      </Text>
    </>
  );
}
