import { RouteObject } from 'react-router-dom'
import Home from './pages/Home'
import Gallery from './pages/Gallery'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/gallery',
    element: <Gallery />
  }
]

export default routes
