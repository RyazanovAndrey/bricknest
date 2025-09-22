import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import SingleRoom from './pages/SingleRoom'
import Properties from './pages/Properties'
import ErrorPage from './pages/ErrorPage'
import BlogPage from './pages/BlogPage'

const App = () => {

  const location = useLocation().pathname

  const titleList = {
    "/" : "Bricknest",
    "/about" : "Bricknest - About page",
    "/properties" : "Bricknest - Properties page",
    "/blog" : "Bricknest - Blog page",
  }

  useEffect(() => {
    document.title = titleList[location] || 'My site'
  }, [location])
  

  return (
    <>
      <Routes>
        <Route path='/bricknest/' element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='properties' element={<Properties />} />
          <Route path='blog' element={<BlogPage />} />
          <Route path='*' element={<ErrorPage />} />
          <Route path='/bricknest/:cat/room/:id' element={<SingleRoom />} />
        </Route>
      </Routes>
    </>
  )
}

export default App