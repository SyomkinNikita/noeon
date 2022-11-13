import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Footer } from './components/Footer/Footer'
import Main from './pages/Main/Main'
import Company from './pages/Company/Company'
import Grants from './pages/Grants/Grants'
import JoinOurTeam from './pages/JoinOurTeam/JoinOurTeam'
import Blog from './pages/Blog/Blog'
import BlogPost from './pages/Blog/BlogPost/BlogPost'
import JobPosition from './pages/JobPosition/JobPosition'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='company' element={<Company />} />
        <Route path='grants' element={<Grants />} />
        <Route path='join-our-team' element={<JoinOurTeam />} />
        <Route path='blog' element={<Blog />} />
        <Route path='blog/:id' element={<BlogPost />} />
        <Route path='join-our-team/job-position' element={<JobPosition />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
