import React, { useRef, useState, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useSnapshot } from 'valtio'
import { shoeColor, shoeLang } from './state'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/ShoeThree/build/model/shoe-draco.glb')
  const snap = useSnapshot(shoeColor);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const cursor = `<svg width="100" height="100" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.item[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#333" style="white-space:pre" font-family="Roboto, sans-serif" font-size="12" letter-spacing="0.5px"><tspan x="35" y="70">${shoeLang[hovered]}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h100v100H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`
    const auto = `<svg width="100" height="100" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`
    document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(hovered ? cursor : auto)))}'), auto`
  }, [hovered, snap])

  return (
    <group ref={group} {...props} dispose={null}
      onPointerOver={(e) => { e.stopPropagation(); setHovered(e.object.material.name)}}
      onPointerOut={(e) => { e.intersections.length === 0 && setHovered(null) }}
    >
      <mesh material-color={snap.item.laces} geometry={nodes.shoe.geometry} material={materials.laces} />
      <mesh material-color={snap.item.mesh} geometry={nodes.shoe_1.geometry} material={materials.mesh} />
      <mesh material-color={snap.item.caps} geometry={nodes.shoe_2.geometry} material={materials.caps} />
      <mesh material-color={snap.item.inner} geometry={nodes.shoe_3.geometry} material={materials.inner} />
      <mesh material-color={snap.item.sole} geometry={nodes.shoe_4.geometry} material={materials.sole} />
      <mesh material-color={snap.item.stripes} geometry={nodes.shoe_5.geometry} material={materials.stripes} />
      <mesh material-color={snap.item.band} geometry={nodes.shoe_6.geometry} material={materials.band} />
      <mesh material-color={snap.item.patch} geometry={nodes.shoe_7.geometry} material={materials.patch} />
    </group>
  )
}

useGLTF.preload('/model/shoe-draco.glb')
