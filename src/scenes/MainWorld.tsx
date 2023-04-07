import { useRef, useEffect, useState } from 'react'
import { useMachine } from '@xstate/react'
import {
  Find,
  HTML,
  Keyboard,
  Model,
  Reticle,
  ThirdPersonCamera,
  types,
  usePreload,
  useSpring,
  useWindowSize,
  World
} from 'lingo3d-react'
import poseMachine from '../stateMachines/poseMachine'
import AnimText from '@lincode/react-anim-text'
import Plane from './Plane'
import Video from './Video'
import Audio from './Audio'

const videoTe = document.createElement('video')
videoTe.src = '../../public/movie.mp4'
type Test = types.Model & {
  velocity: any
  onLoop: any
}

const MainWorld = ({ nowSence }: any) => {
  console.log(nowSence, '----------')
  const botRef = useRef<Test>(null)
  const [show, setShow] = useState(true)

  const [pose, sendPose] = useMachine(poseMachine, {
    actions: {
      enterJumping: () => {
        const bot = botRef.current
        if (bot === null) return

        bot.velocity.y = 10

        bot.onLoop = () => {
          if (bot.velocity.y === 0) {
            bot.onLoop = undefined
            sendPose('LANDED')
          }
        }
      }
    }
  })

  const [cameraUp, setCameraUp] = useState(false)

  const camX = cameraUp ? 25 : 0
  const camY = cameraUp ? 50 : 50
  const camZ = cameraUp ? 50 : 200

  const xSpring = useSpring({ to: camX, bounce: 0 })
  const ySpring = useSpring({ to: camY, bounce: 0 })
  const zSpring = useSpring({ to: camZ, bounce: 0 })

  const windowSize = useWindowSize()
  const fov = windowSize.width < windowSize.height ? 100 : 75

  const handleCameraUp = (status: boolean) => {
    setCameraUp(status)
  }

  const onKeyPress = (key: string) => {
    if (key === 'w') {
      sendPose('KEY_W_DOWN')
      botRef.current?.moveForward(-10)
    } else if (key === 'Space') {
      sendPose('KEY_SPACE_DOWN')
    }
  }

  const onKeyUp = (key: string) => {
    if (key === 'w') {
      sendPose('KEY_W_UP')
    }
  }

  const Sences = [
    <Video handleCameraUp={handleCameraUp}></Video>,
    <Plane handleCameraUp={handleCameraUp}></Plane>,
    <Audio handleCameraUp={handleCameraUp}></Audio>
  ]

  useEffect(() => {
    console.log('update pos', botRef.current)
    setShow(false)
    setTimeout(() => {
      setShow(true)
    }, 800)
  }, [nowSence])

  return (
    <div>
      <World
        style={{ zIndex: -1 }}
        defaultLight="env.hdr"
        skybox="env.hdr"
        ambientOcclusion
        bloom
        bloomStrength={0.3}
        bloomRadius={1}
        bloomThreshold={0.8}
        outlineHiddenColor="red"
        outlinePulse={1000}
        outlinePattern="pattern.jpeg"
        repulsion={1}
      >
        {Sences[nowSence]}
        {show && (
          <ThirdPersonCamera
            mouseControl
            active
            innerY={ySpring}
            innerZ={zSpring}
            innerX={xSpring}
            fov={fov}
          >
            <Model
              src="bot.fbx"
              ref={botRef}
              physics="character"
              animations={{
                idle: 'idle.fbx',
                running: 'running.fbx',
                jumping: 'falling.fbx'
              }}
              animation={pose.value as any}
              width={50}
              depth={50}
              x={200}
              y={0}
              z={0}
              pbr
            />
          </ThirdPersonCamera>
        )}
        <Keyboard onKeyPress={onKeyPress} onKeyUp={onKeyUp} />
      </World>
      <Reticle color="white" variant={7} />
    </div>
  )
}

export default MainWorld
