import { useRef, useEffect, useState } from 'react'
import { Find, HTML, Model } from 'lingo3d-react'
import AnimText from '@lincode/react-anim-text'

const Audio = ({handleCameraUp}:any) => {
  return <Model src="scene.gltf" scale={5} physics="map" animationPaused={false}></Model>
}

export default Audio
