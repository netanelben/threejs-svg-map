import React, { useState, useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { cameraPosition } from "../index";
import { useControls } from "leva";
import gsap from "gsap";

const groupPosition = [0, 0, 0];

export function ArrayOfMapModels({ props }) {
  const { camera } = useThree();
  const group = useRef();
  const [selectedNodeName, setSelected] = useState(null);
  const { nodes, materials, animations } = useGLTF("/Part1.glb");
  const { actions } = useAnimations(animations, group);
  const nodeArray = Object.values(nodes);

  const playMapAnimation = () => {
    Object.values(actions).forEach((action) => {
      action.play();
    });
  };
  window.animateMap = playMapAnimation;

  const stopMapAnimation = () => {
    Object.values(actions).forEach((action) => {
      action.stop();
    });
  };

  const handleStateClick = (stateMesh) => {
    if (selectedNodeName) {
      setSelected(null);
      resetCameraPosition();
      group.current.position.set(...groupPosition);
      return;
    }

    stopMapAnimation();
    setSelected(stateMesh.name);
    centerMesh(stateMesh);
  };

  const centerMesh = (stateMesh) => {
    const { position } = stateMesh;
    gsap.to(camera.position, {
      x: position.x,
      y: position.y,
      z: cameraPosition[2] - 0.8,
      duration: 1,
      ease: "power2.inOut",
      onUpdate: () => {
        // camera.lookAt(position);
      },
    });
  };

  const resetCameraPosition = () => {
    gsap.to(camera.position, {
      x: cameraPosition[0],
      y: cameraPosition[1],
      z: cameraPosition[2],
      duration: 0.8,
      ease: "power2.inOut",
    });
  };

  return (
    <group ref={group} dispose={null} position={groupPosition}>
      {nodeArray.map((node, index) => {
        const meshRef = useRef();
        const materialRef = useRef();

        const isVisible = !selectedNodeName || selectedNodeName === node.name;

        // States Animations
        useEffect(() => {
          if (isVisible) {
            gsap.to(meshRef.current.scale, {
              x: 0.00095,
              y: 0.00095,
              z: 0.00095,
              duration: 1,
              ease: "power2.inOut",
            });
          } else {
            gsap.to(meshRef.current.scale, {
              x: 0,
              y: 0,
              z: 0,
              duration: 1,
              ease: "power2.inOut",
            });
          }
        }, [isVisible]);

        // Material Controls (color & characteristics)
        const { materialColor, metalness, roughness, emissive, wireframe } =
          useControls({
            materialColor: {
              label: "Material Color",
              value: "#fff",
            },
            metalness: { value: 0.89, min: 0, max: 1 },
            roughness: { value: 0.53, min: 0, max: 1 },
            emissive: { value: 0x000000 },
            wireframe: { value: false },
          });

        return (
          <mesh
            // receiveShadow
            // visible={isVisible}
            key={index}
            ref={meshRef}
            onClick={() => handleStateClick(node)}
            name={node.name}
            castShadow
            geometry={node.geometry}
            material={node.material}
            position={node.position}
            scale={0.001}
            // scale={0.00095} // with borders
          >
            <meshStandardMaterial
              color={materialColor}
              metalness={metalness}
              roughness={roughness}
              emissive={emissive}
              wireframe={wireframe}
            />
          </mesh>
        );
      })}
    </group>
  );
}

useGLTF.preload("/Part1.glb");
