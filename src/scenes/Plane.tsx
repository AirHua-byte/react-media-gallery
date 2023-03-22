import { useRef, useEffect, useState } from 'react'
import {
  Find,
  HTML,
  Model,
} from 'lingo3d-react'
import AnimText from '@lincode/react-anim-text'

const videoTe = document.createElement('video')
videoTe.src = '../../public/movie.mp4'

const Plane = ({handleCameraUp}:any) => {
  const videoRef = useRef(null)
  const [bake0Over, setBake0Over] = useState(false)

  const [R, setR] = useState(0)
  const [timer, setTimer] = useState(0)
  let temp = 0

  const onBake0Over = () => {
    setBake0Over(true)
    onMouseOver()
    videoTe.play()
  }

  const onBake0Out = () => {
    setBake0Over(false)
    onMouseOut()
    videoTe.pause()
  }

  const onMouseOver = () => {
    handleCameraUp(true)
  }

  const onMouseOut = () => {
    handleCameraUp(false)
  }

  const mouseOverRotation = () => {
    if (timer !== 0) return
    const t = setInterval(() => {
      setR((temp += 5))
    }, 16)
    setTimer(t)
  }

  const mouseOutRotation = () => {
    clearInterval(timer)
    setTimer(0)
  }

  useEffect(() => {
    console.log('update', videoRef)
    // clearInterval(timer)
  }, [R])

  return (
    <Model src="scene.gltf" scale={5} physics="map" animationPaused={false}>
      <Find
        ref={videoRef}
        name="Object009_propinquity manual bake_0"
        // texture={videoTe}
        texture="movie.mp4"
        outline={bake0Over}
        onMouseOver={onBake0Over}
        onMouseOut={onBake0Out}
      >
        {bake0Over && (
          <HTML>
            <div style={{ color: 'white' }}>
              <AnimText style={{ fontWeight: 'bold', fontSize: 20 }} duration={1000}>
                Artwork Title
              </AnimText>
              <AnimText duration={1000}>Bird Watch</AnimText>
            </div>
          </HTML>
        )}
      </Find>
      <Find
        rotation={R}
        name="water fountain_Material #4195_0"
        onMouseOver={mouseOverRotation}
        onMouseOut={mouseOutRotation}
      ></Find>
    </Model>
  )
}

export default Plane
