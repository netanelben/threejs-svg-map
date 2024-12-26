import { Leva } from "leva";
import { useControls } from "leva";
import { createRoot } from "react-dom/client";
import { Suspense, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import { ArrayOfMapModels } from "./components/states-map-model";
import { Header } from "./components/layout/Header";
import "./styles.css";

export const cameraPosition = [0, 0.4, 2.3];

const Controls = () => {
  const { camera } = useThree();
  const { position } = useControls({
    position: {
      label: "Camera XYZ",
      value: {
        x: cameraPosition[0],
        y: cameraPosition[1],
        z: cameraPosition[2],
      },
      step: 0.1,
    },
  });

  useEffect(() => {
    camera.position.set(position.x, position.y, position.z);
    camera.updateProjectionMatrix();
  }, [position]);
};

const Lights = () => {
  const {
    spotLightColor,
    spotLightPosition,
    spotLightAngle,
    spotLightPenumbra,
    dirLightColor,
    dirLightPosition,
    dirLightIntensity,
  } = useControls({
    spotLightColor: {
      label: "Spot Light Color",
      value: "#B1142D",
    },
    spotLightPosition: {
      label: "Spot Light XYZ",
      value: {
        x: 3.8,
        y: -22.6,
        z: -55.8,
      },
      step: 0.1,
    },
    spotLightAngle: {
      label: "Spot Light Angle",
      value: 1,
      min: 0,
      max: 1,
      step: 0.1,
    },
    spotLightPenumbra: {
      label: "Spot Light Penumbra",
      value: 0,
      min: 0,
      max: 1,
      step: 0.1,
    },
    dirLightColor: {
      label: "Dir Light Color",
      value: "#B1142D",
    },
    dirLightIntensity: {
      label: "Dir Light Intensity",
      value: 0.6,
      min: 0,
      max: 1,
      step: 0.1,
    },
    dirLightPosition: {
      label: "Dir Light XYZ",
      value: {
        x: 0,
        y: 0.3,
        z: 1.1,
      },
      step: 0.1,
    },
  });

  return (
    <>
      <ambientLight color={"#E31939"} intensity={1} />
      <spotLight
        color={spotLightColor}
        angle={spotLightAngle}
        penumbra={spotLightPenumbra}
        position={[
          spotLightPosition.x,
          spotLightPosition.y,
          spotLightPosition.z,
        ]}
        castShadow
      />
      <directionalLight
        color={dirLightColor}
        intensity={dirLightIntensity}
        position={[dirLightPosition.x, dirLightPosition.y, dirLightPosition.z]}
      />
    </>
  );
};

function App() {
  return (
    <>
      <Header />
      <Leva />
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{
          fov: 50,
          zoom: 1,
          // position: cameraPosition,
        }}
      >
        <Controls />
        <Lights />
        <Suspense fallback={null}>
          <ArrayOfMapModels />
        </Suspense>
        <ContactShadows scale={10} blur={1.5} opacity={1} far={10} />
        {/* <Environment path="/" files="resting_place_4k.exr" /> */}
      </Canvas>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
