
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Home from './pages/Home.jsx'
import Profile from './pages/Profile.jsx'
import Motive from './pages/Motive.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Chatbot from './pages/Chatbot.jsx'
import Quiz from './pages/Quiz.jsx'

function Nav(){
  const navItems = [
    ['Home','/'],
    ['Profile','/profile'],
    ['Motive','/motive'],
    ['Dashboard','/dashboard'],
    ['Chatbot','/chatbot'],
    ['Quiz','/quiz'],
  ]
  return (
    <div className="sticky top-0 z-40 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-3 flex items-center gap-3 justify-between">
        <Link to="/" className="font-extrabold header-gradient text-xl">TutorIQ</Link>
        <div className="flex flex-wrap gap-2 text-sm">
          {navItems.map(([label, href]) => (
            <Link key={href} to={href} className="btn">{label}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function App(){
  const location = useLocation()
  return (
    <div className="min-h-screen">
      <Nav />
      <AnimatePresence mode="wait">
        <motion.div key={location.pathname}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/motive" element={<Motive />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
