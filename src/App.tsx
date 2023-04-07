import React from 'react'
import { HashRouter, useRoutes } from 'react-router-dom'
import routes from './router'
import Gallery from './pages/Gallery'

const Router = () => {
  const element = useRoutes(routes)
  return <React.Fragment>{element}</React.Fragment>
}

const App = () => {
  return (
    <HashRouter>
      <Router></Router>
    </HashRouter>
  )
}

export default App
