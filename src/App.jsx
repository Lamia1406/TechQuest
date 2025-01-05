import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Achievements from './pages/Achievements'
import Profile from './pages/Profile'
import Levels from './pages/Levels'
import Learning from './pages/Learning'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { useEffect, useState } from 'react'
import { supabase } from './supabase'

import LandingPage from './pages/LandingPage'

function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.onAuthStateChange((_, session) => {
      setSession(session)
    })

   
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={!session ? <LandingPage /> : <Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {session && (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/levels" element={<Levels />} />
            <Route path="/profile" element={<Profile />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  )
}

export default App
