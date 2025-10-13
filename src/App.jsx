import React, { useRef } from 'react'
import { Link, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agency from './pages/Agency'
import Project from './pages/Project'
import NavBar from './components/Navigation/NavBar'
import FullScreenNav from './components/Navigation/FullScreenNav'


const App = () => {

  return (
    <div className='text-black'>
      <NavBar/>
      <FullScreenNav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/agency' element={<Agency/>} />
        <Route path='/project' element={<Project/>} />
      </Routes>
    </div>
  )
}

export default App