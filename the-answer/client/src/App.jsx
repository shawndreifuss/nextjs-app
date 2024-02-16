import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {  Homepage } from './pages'
import { Login } from './pages'



const App = () => {
  return (

    <div className="app">
      <Routes>
        <Route path="/" element={<Homepage />} />
       <Route path="/login" element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App