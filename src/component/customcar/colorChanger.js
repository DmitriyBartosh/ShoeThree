import React from 'react'
import { HexColorPicker } from 'react-colorful'
import { useSnapshot } from 'valtio'
import { motion, AnimatePresence } from 'framer-motion'

import { shoeColor, shoeLang } from './state'

function ColorChanger() {
  const colorPick = useSnapshot(shoeColor);

  return (
    <AnimatePresence>
      {shoeColor.current && (
        <motion.div
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -25, opacity: 0 }}
          className="colorContainer">
          <div className="colorPicker">
            <HexColorPicker
              color={colorPick.item[colorPick.current]}
              onChange={(color) => (shoeColor.item[colorPick.current] = color)}
            />
          </div>
          <div className="colorChanger">
            <h2><span>В фокусе: </span>{shoeLang[colorPick.current]}</h2>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ColorChanger
