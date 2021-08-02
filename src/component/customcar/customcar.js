import React, { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import { useSnapshot } from 'valtio'
import { shoeColor } from './state'
import Shoe from './Shoe'
import ColorChanger from './colorChanger'

function Customcar() {
  const colorPick = useSnapshot(shoeColor);

  return (
    <div className="shoeContainer">
      <div className="titleContainer">
        <h1>Кроссовки</h1>
        <p>Создайте свой уникальный стиль</p>
      </div>
      <ColorChanger />
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 50 }} >
        <ambientLight intensity={0.35} />
        <spotLight intensity={0.35} angle={0.1} penumbra={1} position={[10, 25, 10]} castShadow />
        <Suspense fallback={null}>
          <group
            rotation={[0, -0.35, 0]}
            position={[-0.15, 0.2, 0]}
          >
            <Shoe
              rotation={[0.5, -2.1, 0]}
              position={[0, 0, 1.15]}
              onPointerDown={(e) => { shoeColor.shoes.left = true; e.stopPropagation(); shoeColor.current = e.object.material.name }}
              onPointerMissed={() => { shoeColor.shoes.left = false; if (!shoeColor.shoes.left && !shoeColor.shoes.right) { shoeColor.current = null } }} />
            <Shoe
              scale={-1}
              rotation={[3.5, -2.67, -0.05]}
              position={[1.05, 0, 0]}
              onPointerDown={(e) => { shoeColor.shoes.right = true; e.stopPropagation(); shoeColor.current = e.object.material.name }}
              onPointerMissed={() => { shoeColor.shoes.right = false; if (!shoeColor.shoes.left && !shoeColor.shoes.right) { shoeColor.current = null } }}
            />
            <Environment preset="city" />
          </group>
          <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.3} width={8} height={8} blur={1.5} far={0.8} />
        </Suspense>

        <OrbitControls enablePan={false} zoomSpeed={0.35} minDistance={3} maxDistance={8} maxPolarAngle={1.65} />
      </Canvas>
    </div>
  )
}

export default Customcar
