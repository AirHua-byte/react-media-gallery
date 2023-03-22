import { useRef, useEffect, useState } from 'react'
import { Find, HTML, Model } from 'lingo3d-react'
import AnimText from '@lincode/react-anim-text'
import { Sound } from 'lingo3d-react'

const Video = ({ handleCameraUp }: any) => {
  const soundRef = useRef(null)

  const onPlay = () => {
    console.log('play...')
  }

  const playMusic = () => {
    console.log(soundRef.current)
    if (soundRef.current) {
      // soundRef.current?.play()
    }
  }

  return (
    <Model src="videoSence/scene.gltf" scale={5} physics="map" animationPaused={false}>
      <Find name="Sci-Fi Space Station_ScreensOutside_0" onMouseOver={playMusic}>
        <Sound ref={soundRef} src="audioSence/remix.mp3" onPlay={onPlay}></Sound>
      </Find>
    </Model>
  )
}

export default Video
