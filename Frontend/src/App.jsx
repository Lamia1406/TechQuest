import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Achievements from './pages/Achievements'
import Profile from './pages/Profile'
import Levels from './pages/Levels'
import Learning from './pages/Learning'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />}/>
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/levels" element={<Levels />} />
        <Route path="/profile" element={<Profile />} />
     
    </Routes>
  </BrowserRouter>
  )
}

export default App
