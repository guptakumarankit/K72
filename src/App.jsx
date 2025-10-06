import React from 'react'
import { Link, Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agency from './pages/Agency'
import Project from './pages/Project'


const App = () => {
  return (
    <div className='main'>
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/agency">Agency</Link>
        <Link to="/project">Project</Link>
      </nav> */}

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/agency' element={<Agency/>} />
        <Route path='/project' element={<Project/>} />
      </Routes>
    </div>
  )
}

export default App