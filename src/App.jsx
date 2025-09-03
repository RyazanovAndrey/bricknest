import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import SingleRoom from './pages/SingleRoom'

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='room/:id' element={<SingleRoom />} />
        </Route>
      </Routes>
    </>
  )
}

export default App