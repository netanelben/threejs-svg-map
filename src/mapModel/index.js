import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function MapModels(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/Part1.glb");
  const { actions } = useAnimations(animations, group);

  console.log(nodes);
  console.log(Object.values(nodes));

  useEffect(() => {
    playAnimation();
  }, [actions]);

  const playAnimation = () => {
    Object.values(actions).forEach((action) => {
      action.play();
    });
  };

  return (
    <group ref={group} {...props} dispose={null} position={[0, 0, 0]}>
      <group name="Scene">
        <group name="Empty">
          <mesh
            name="WOODEN_USA_WALL_MAP"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP.geometry}
            material={materials["CR_Material _1901"]}
            position={[0.052, 0.055, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP001"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP001.geometry}
            material={materials["CR_Material _1901"]}
            position={[-0.006, 0.154, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP002"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP002.geometry}
            material={materials["CR_Material _1901"]}
            position={[0.379, 0.219, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP003"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP003.geometry}
            material={materials["CR_Material _1901"]}
            position={[-0.587, 0.952, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP004"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP004.geometry}
            material={materials["CR_Material _1901"]}
            position={[-0.583, 0.948, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP005"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP005.geometry}
            material={materials["CR_Material _1901"]}
            position={[-0.579, 0.948, 0.963]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP006"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP006.geometry}
            material={materials["CR_Material _1901"]}
            position={[-0.587, 0.946, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP007"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP007.geometry}
            material={materials["CR_Material _1901"]}
            position={[-0.582, 0.943, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP008"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP008.geometry}
            material={materials["CR_Material _1901"]}
            position={[-0.577, 0.931, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP009"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP009.geometry}
            material={materials["CR_Material _1901"]}
            position={[-0.589, 0.906, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP010"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP010.geometry}
            material={materials["CR_Material _1901"]}
            position={[-0.585, 0.925, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP011"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP011.geometry}
            material={materials.CR_01___Default}
            position={[0.632, 0.542, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP012"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP012.geometry}
            material={materials["CR_Material _1901"]}
            position={[-0.24, 0.659, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP013"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP013.geometry}
            material={materials.CR_01___Default}
            position={[0.256, 0.727, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP014"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP014.geometry}
            material={materials["CR_Material _1901"]}
            position={[0.537, 0.52, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP015"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP015.geometry}
            material={materials["CR_Material _1901"]}
            position={[-0.589, 0.89, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP016"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP016.geometry}
            material={materials["CR_Material _1901"]}
            position={[0.679, 0.502, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP017"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP017.geometry}
            material={materials["CR_Material _1901"]}
            position={[0.615, 0.497, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP018"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP018.geometry}
            material={materials["CR_Material _1901"]}
            position={[0.688, 0.517, 0.913]}
            scale={0.001}
          />
          <group
            name="WOODEN_USA_WALL_MAP019"
            position={[0.71, 0.756, 0.913]}
            scale={0.001}
          >
            <mesh
              name="Mesh019"
              castShadow
              receiveShadow
              geometry={nodes.Mesh019.geometry}
              material={materials["CR_Material _1901"]}
            />
            <mesh
              name="Mesh019_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh019_1.geometry}
              material={materials.CR_01___Default}
            />
          </group>
          <mesh
            name="WOODEN_USA_WALL_MAP020"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP020.geometry}
            material={materials["CR_Material _1901"]}
            position={[-0.354, 0.549, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP021"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP021.geometry}
            material={materials["CR_Material _1901"]}
            position={[0.351, 0.388, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP022"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP022.geometry}
            material={materials.CR_01___Default}
            position={[0.041, 0.668, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP023"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP023.geometry}
            material={materials["CR_Material _1901"]}
            position={[0.551, 0.322, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP024"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP024.geometry}
            material={materials["CR_Material _1901"]}
            position={[0.765, 0.679, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP025"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP025.geometry}
            material={materials["CR_Material _1901"]}
            position={[0.764, 0.662, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP026"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP026.geometry}
            material={materials["CR_Material _1901"]}
            position={[0.635, 0.62, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP027"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP027.geometry}
            material={materials.CR_01___Default}
            position={[-0.574, 0.808, 0.915]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP028"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP028.geometry}
            material={materials["CR_Material _1901"]}
            position={[0.034, 0.318, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP029"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP029.geometry}
            material={materials.CR_01___Default}
            position={[0.472, 0.551, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP030"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP030.geometry}
            material={materials["CR_Material _1901"]}
            position={[0.029, 0.81, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP031"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP031.geometry}
            material={materials["CR_Material _1901"]}
            position={[0.691, 0.449, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP032"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP032.geometry}
            material={materials["CR_Material _1901"]}
            position={[0.699, 0.42, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP033"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP033.geometry}
            material={materials["CR_Material _1901"]}
            position={[0.613, 0.408, 0.914]}
            scale={0.001}
          />
          <group
            name="WOODEN_USA_WALL_MAP034"
            position={[0.638, 0.707, 0.913]}
            scale={0.001}
          >
            <mesh
              name="Mesh034"
              castShadow
              receiveShadow
              geometry={nodes.Mesh034.geometry}
              material={materials["CR_Material _1901"]}
            />
            <mesh
              name="Mesh034_1"
              castShadow
              receiveShadow
              geometry={nodes.Mesh034_1.geometry}
              material={materials.CR_01___Default}
            />
          </group>
          <mesh
            name="WOODEN_USA_WALL_MAP035"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP035.geometry}
            material={materials["CR_Material _1901"]}
            position={[0.73, 0.642, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP036"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP036.geometry}
            material={materials["CR_Material _1901"]}
            position={[0.699, 0.622, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP037"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP037.geometry}
            material={materials["CR_Material _1901"]}
            position={[-0.224, 0.308, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP038"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP038.geometry}
            material={materials.CR_01___Default}
            position={[0.688, 0.598, 0.914]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP039"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP039.geometry}
            material={materials["CR_Material _1901"]}
            position={[0.736, 0.757, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP040"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP040.geometry}
            material={materials["CR_Material _1901"]}
            position={[-0.486, 0.501, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP041"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP041.geometry}
            material={materials["CR_Material _1901"]}
            position={[0.044, 0.604, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP042"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP042.geometry}
            material={materials["CR_Material _1901"]}
            position={[-0.349, 0.792, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP043"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP043.geometry}
            material={materials.CR_01___Default}
            position={[0.229, 0.459, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP044"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP044.geometry}
            material={materials["CR_Material _1901"]}
            position={[0.265, 0.248, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP045"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP045.geometry}
            material={materials["CR_Material _1901"]}
            position={[0.153, 0.794, 0.914]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP046"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP046.geometry}
            material={materials["CR_Material _1901"]}
            position={[0.407, 0.776, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP047"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP047.geometry}
            material={materials["CR_Material _1901"]}
            position={[0.361, 0.758, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP048"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP048.geometry}
            material={materials["CR_Material _1901"]}
            position={[0.393, 0.705, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP049"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP049.geometry}
            material={materials["CR_Material _1901"]}
            position={[0.328, 0.78, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP050"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP050.geometry}
            material={materials["CR_Material _1901"]}
            position={[0.267, 0.837, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP051"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP051.geometry}
            material={materials.CR_01___Default}
            position={[0.774, 0.697, 0.914]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP052"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP052.geometry}
            material={materials.CR_01___Default}
            position={[0.788, 0.677, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP053"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP053.geometry}
            material={materials.CR_01___Default}
            position={[0.803, 0.677, 0.915]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP054"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP054.geometry}
            material={materials.CR_01___Default}
            position={[0.666, 0.52, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP055"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP055.geometry}
            material={materials.CR_01___Default}
            position={[0.643, 0.54, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP056"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP056.geometry}
            material={materials.CR_01___Default}
            position={[0.668, 0.515, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP057"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP057.geometry}
            material={materials["CR_Material _1901"]}
            position={[0.81, 0.793, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP058"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP058.geometry}
            material={materials["CR_Material _1901"]}
            position={[0.817, 0.793, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP059"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP059.geometry}
            material={materials["CR_Material _1901"]}
            position={[0.807, 0.788, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP060"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP060.geometry}
            material={materials["CR_Material _1901"]}
            position={[0.813, 0.788, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP061"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP061.geometry}
            material={materials["CR_Material _1901"]}
            position={[0.799, 0.809, 0.914]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP062"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP062.geometry}
            material={materials.CR_01___Default}
            position={[0.25, 0.156, 0.914]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP063"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP063.geometry}
            material={materials.CR_01___Default}
            position={[0.279, 0.405, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP064"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP064.geometry}
            material={materials.CR_01___Default}
            position={[0.389, 0.462, 0.914]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP065"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP065.geometry}
            material={materials["CR_Material _1901"]}
            position={[0.073, 0.502, 0.914]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP066"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP066.geometry}
            material={materials["CR_Material _1901"]}
            position={[0.168, 0.604, 0.915]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP067"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP067.geometry}
            material={materials["CR_Material _1901"]}
            position={[0.352, 0.493, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP068"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP068.geometry}
            material={materials["CR_Material _1901"]}
            position={[0.27, 0.516, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP069"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP069.geometry}
            material={materials["CR_Material _1901"]}
            position={[-0.408, 0.779, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP070"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP070.geometry}
            material={materials.CR_01___Default}
            position={[-0.342, 0.092, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP071"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP071.geometry}
            material={materials.CR_01___Default}
            position={[-0.319, 0.097, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP072"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP072.geometry}
            material={materials.CR_01___Default}
            position={[-0.264, 0.074, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP073"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP073.geometry}
            material={materials.CR_01___Default}
            position={[-0.231, 0.061, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP074"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP074.geometry}
            material={materials.CR_01___Default}
            position={[-0.21, 0.05, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP075"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP075.geometry}
            material={materials.CR_01___Default}
            position={[-0.229, 0.05, 0.917]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP076"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP076.geometry}
            material={materials.CR_01___Default}
            position={[-0.218, 0.04, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP077"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP077.geometry}
            material={materials.CR_01___Default}
            position={[-0.179, 0.005, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP078"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP078.geometry}
            material={materials["CR_Material _1901"]}
            position={[0.502, 0.272, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP079"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP079.geometry}
            material={materials["CR_Material _1901"]}
            position={[0.526, 0.117, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP080"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP080.geometry}
            material={materials["CR_Material _1901"]}
            position={[0.619, 0.016, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP081"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP081.geometry}
            material={materials["CR_Material _1901"]}
            position={[0.585, -0.009, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP082"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP082.geometry}
            material={materials["CR_Material _1901"]}
            position={[0.6, -0.003, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP083"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP083.geometry}
            material={materials["CR_Material _1901"]}
            position={[0.609, 0.003, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP084"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP084.geometry}
            material={materials.CR_01___Default}
            position={[0.673, 0.566, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP085"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP085.geometry}
            material={materials["CR_Material _1901"]}
            position={[0.731, 0.664, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP086"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP086.geometry}
            material={materials.CR_01___Default}
            position={[-0.17, 0.509, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP087"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP087.geometry}
            material={materials["CR_Material _1901"]}
            position={[-0.623, 0.475, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP088"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP088.geometry}
            material={materials["CR_Material _1901"]}
            position={[0.245, 0.343, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP089"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP089.geometry}
            material={materials.CR_01___Default}
            position={[-0.465, 0.369, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP090"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP090.geometry}
            material={materials["CR_Material _1901"]}
            position={[-0.682, -0.001, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP091"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP091.geometry}
            material={materials["CR_Material _1901"]}
            position={[-0.708, -0.005, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP092"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP092.geometry}
            material={materials["CR_Material _1901"]}
            position={[-0.692, -0.004, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP093"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP093.geometry}
            material={materials["CR_Material _1901"]}
            position={[-0.675, -0.004, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP094"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP094.geometry}
            material={materials["CR_Material _1901"]}
            position={[-0.509, 0.052, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP095"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP095.geometry}
            material={materials["CR_Material _1901"]}
            position={[-0.553, 0.03, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP096"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP096.geometry}
            material={materials["CR_Material _1901"]}
            position={[-0.405, 0.015, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP097"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP097.geometry}
            material={materials["CR_Material _1901"]}
            position={[-0.562, 0.02, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP099"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP099.geometry}
            material={materials["CR_Material _1901"]}
            position={[-0.412, 0.01, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP100"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP100.geometry}
            material={materials["CR_Material _1901"]}
            position={[-0.393, 0.002, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP101"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP101.geometry}
            material={materials["CR_Material _1901"]}
            position={[-0.662, 0.001, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP102"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP102.geometry}
            material={materials["CR_Material _1901"]}
            position={[-0.4, -0.003, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP103"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP103.geometry}
            material={materials["CR_Material _1901"]}
            position={[-0.526, 0.074, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP104"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP104.geometry}
            material={materials["CR_Material _1901"]}
            position={[-0.389, -0.018, 0.913]}
            scale={0.001}
          />
          <mesh
            name="WOODEN_USA_WALL_MAP105"
            castShadow
            receiveShadow
            geometry={nodes.WOODEN_USA_WALL_MAP105.geometry}
            material={materials["CR_Material _1901"]}
            position={[-0.651, 0.089, 0.913]}
            scale={0.001}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/Part1.glb");
