import React from 'react'
import { Route, Routes } from 'react-router'
import Hero from './pages/Hero'

const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Hero/>} />
   </Routes>
  )
}

export default App