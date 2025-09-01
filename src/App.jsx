import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App