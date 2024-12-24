import * as THREE from "three";
import { createRoot } from "react-dom/client";
import {
  Suspense,
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
  useMemo,
  createRef,
} from "react";
import { Canvas, useLoader, useFrame, useThree } from "@react-three/fiber";
import { SVGLoader } from "three-stdlib";
import {
  MapControls,
  useHelper,
  OrthographicCamera,
  PerspectiveCamera,
  OrbitControls,
} from "@react-three/drei";
import { defaultCursor, hoveredCursor } from "./cursor";
import "./styles.css";

// Shader Try
import { fragment, vertex } from "./shaders";
const uniforms = {
  uTime: { value: 1 },
  uAmplitude: { value: 0.25 },
  uWaveLength: { value: 5 },
  vUvScale: { value: new THREE.Vector2(0, 0) },
  // uTexture: { value: texture },
};
// END TEST

const MAP_URL = "/tinyMap.svg";
// const MAP_URL = "/map.svg";
// const MAP_URL = "/mapNoLabels.svg";

const initialZoom = 0.7;
const animatedMeshRef = createRef();

function StateComponent({
  color,
  shape,
  fillOpacity,
  onClick,
  stateId,
  isVisible,
  scale,
}) {
  const stateComponentWrapperRef = useRef();
  const [hovered, hover] = useState(false);

  console.log(stateComponentWrapperRef.current);

  useEffect(
    () =>
      void (document.body.style.cursor = hovered
        ? `url('${hoveredCursor}'), pointer`
        : `url('${defaultCursor}'), auto`),
    [hovered]
  );

  const extrudeSettings = {
    steps: 2,
    depth: 20,
    bevelEnabled: true,
    bevelThickness: 1,
    bevelSize: 1,
    bevelOffset: 0,
    bevelSegments: 1,
  };

  if (!isVisible) return null;

  return (
    <mesh
      ref={stateComponentWrapperRef}
      onPointerOver={(e) => hover(true)}
      onPointerOut={() => hover(false)}
      onClick={() => onClick(stateComponentWrapperRef.current, stateId)}
      scale={scale}
    >
      <meshBasicMaterial
        color={hovered ? "#E31939" : color}
        opacity={fillOpacity}
        depthWrite={false}
        // wireframe={true}
        transparent
      />
      {/* <shapeBufferGeometry args={[shape]} /> */}
      <extrudeGeometry args={[shape, extrudeSettings]} />
    </mesh>
  );
}

function StatesContainer({ url }) {
  const statesContainerRef = useRef();
  const { paths } = useLoader(SVGLoader, url);
  const [selectedCell, setSelectedCell] = useState(null);
  const { camera } = useThree();

  const shapes = useMemo(
    () =>
      paths.flatMap((p) =>
        p.toShapes(true).map((shape) => ({
          shape,
          color: p.color,
          fillOpacity: p.userData.style.fillOpacity,
        }))
      ),
    [paths]
  );

  useLayoutEffect(() => {
    const sphere = new THREE.Box3()
      .setFromObject(statesContainerRef.current)
      .getBoundingSphere(new THREE.Sphere());

    statesContainerRef.current.position.set(
      -sphere.center.x,
      -sphere.center.y,
      0
    );
  }, []);

  const handleStateClick = (mesh, id) => {
    if (selectedCell) {
      setSelectedCell(null);
      camera.zoom = initialZoom;
      camera.updateProjectionMatrix();
      return;
    }

    setSelectedCell(id);

    // Calculate the bounding box of the clicked mesh
    const box = new THREE.Box3().setFromObject(mesh);
    const center = new THREE.Vector3();
    box.getCenter(center);

    // console.log({ ...center });

    // Move the camera to focus on the center of the bounding box
    // camera.position.set(0, 0, 5000);
    // camera.up.set(0, 0, 1);
    // camera.position.set(center.x, center.y, camera.z);
    //
    // console.log(mesh.position);
    camera.lookAt(mesh.position);

    // console.log(ref.current.position);

    // camera.zoom = initialZoom * 3;
    // camera.lookAt(center);
    camera.updateProjectionMatrix();
  };

  // ~~~ Animations ~~~
  // useFrame hook to setup wave animation to the map objects (the states)
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    const wave = 0.25 * Math.sin(time) + 1.25; // 1 and 1.5
    document.querySelector("#debug").innerText = `Wave: ${wave}`;

    console.log(statesContainerRef.current.children.length);

    if (statesContainerRef.current) {
      statesContainerRef.current.children.forEach((mesh, index) => {
        const offset = index / 10;

        // mesh.scale.x = wave + offset / 2 - 0.5;
        // mesh.scale.y = wave + offset / 2 - 0.5;
        //
        //
        // mesh.position.x = wave + offset;
        // mesh.position.y = wave + offset * 100;
      });
    }
  });

  return (
    <group
      ref={statesContainerRef}
      // Mirror Map using scale -1
      scale={[1, -1, 1]}
      position={[0, 0, 0]}
    >
      {shapes.map((props, index) => {
        return (
          <StateComponent
            key={props.shape.uuid}
            onClick={handleStateClick}
            stateId={props.shape.uuid}
            isVisible={!selectedCell || selectedCell === props.shape.uuid}
            {...props}
          />
        );
      })}
    </group>
  );
}

function App() {
  return (
    <Canvas
      frameloop="always"
      orthographic
      shadows
      dpr={[1, 2]}
      camera={{
        position: [0, 0, 5000],
        zoom: initialZoom,
        up: [0, 1, 0],
        far: 10000,
      }}
    >
      <ambientLight />
      <spotLight
        angle={0.45}
        penumbra={0.5}
        position={[-10, -10, 50]}
        castShadow
      />

      {/* Map Component */}
      <Suspense fallback={null}>
        <StatesContainer url={MAP_URL} />
      </Suspense>
      <MapControls
        enablePan={false}
        enableRotate={false}
        minZoom={initialZoom}
        maxZoom={1.5}
      />
      <OrbitControls />
    </Canvas>
  );
}

createRoot(document.getElementById("root")).render(<App />);
