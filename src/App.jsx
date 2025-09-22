import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import SingleRoom from './pages/SingleRoom'
import Properties from './pages/Properties'
import ErrorPage from './pages/ErrorPage'
import BlogPage from './pages/BlogPage'
import { linkHome } from './linkHome.js'

const App = () => {

  const location = useLocation().pathname

  const titleList = {
    "/bricknest/" : "Bricknest",
    "/bricknest/about" : "Bricknest - About page",
    "/bricknest/properties" : "Bricknest - Properties page",
    "/bricknest/blog" : "Bricknest - Blog page",
  }

  useEffect(() => {
    document.title = titleList[location] || 'My site'
  }, [location])
  

  return (
    <>
      <Routes>
        <Route path={linkHome} element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path={linkHome + 'about'} element={<AboutPage />} />
          <Route path={linkHome + 'properties'} element={<Properties />} />
          <Route path={linkHome + 'blog'} element={<BlogPage />} />
          <Route path={linkHome + '*'} element={<ErrorPage />} />
          <Route path={linkHome + ':cat/room/:id'} element={<SingleRoom />} />
        </Route>
      </Routes>
    </>
  )
}

export default App