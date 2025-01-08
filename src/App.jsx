import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
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
  const [userId, setUserId] = useState(null)

  useEffect(() => {
    const fetchSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setUserId(session?.user.id || null)
    , [userId]}

    fetchSession()

    const { data: authListener } = supabase.auth.onAuthStateChange((_, session) => {
      setUserId(session?.user.id || null)
    })

    
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={!userId ? <LandingPage /> : <Navigate to="/home" replace />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        
            <Route path="/home" element={<Home />} />
            <Route path="/leaderboard" element={<Achievements />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/levels" element={<Levels />} />
            <Route path="/profile" element={<Profile />} />
           
   
       
      </Routes>
    </BrowserRouter>
  )
}

export default App
