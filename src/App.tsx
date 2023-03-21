import { usePreload } from 'lingo3d-react'
import './App.css'
import TopItem from './components/TopItem';
// import Plane from './scenes/Plane'
import MainWorld from './scenes/MainWorld';

const App = () => {
  const progress = usePreload(
    ['bot.fbx', 'env.hdr', 'falling.fbx', 'gallery.glb', 'idle.fbx', 'pattern.jpeg', 'running.fbx'],
    '1.2mb'
  )

  if (progress < 100)
    return (
      <div className="w-full h-full absolute bg-black left-0 top-0 flex justify-center items-center text-white">
        loading {Math.floor(progress)}%
      </div>
    )

  return (
    <>
      <TopItem></TopItem>
      <MainWorld />
    </>
  )
}

export default App
