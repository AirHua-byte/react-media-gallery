import { useState } from 'react'
import { usePreload } from 'lingo3d-react'
import TopItem from '../components/TopItem'
import MainWorld from '../scenes/MainWorld'

const Gallery = () => {
  const progress = usePreload(
    ['bot.fbx', 'env.hdr', 'falling.fbx', 'gallery.glb', 'idle.fbx', 'pattern.jpeg', 'running.fbx'],
    '1.2mb'
  )

  const [nowSence, setNowSence] = useState(0)

  if (progress < 100)
    return (
      <div className="w-full h-full absolute bg-black left-0 top-0 flex justify-center items-center text-white">
        loading {Math.floor(progress)}%
      </div>
    )

  return (
    <>
      <TopItem setNowSence={setNowSence} />
      <MainWorld nowSence={nowSence} />
    </>
  )
}

export default Gallery
