
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  const profile = JSON.parse(localStorage.getItem('profile')||'{}')
  const motive = localStorage.getItem('motive')||''
  return (
    <motion.div className="page"
      initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
    >
      <div className="grid gap-6 md:grid-cols-3">
        <div className="card p-6 md:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-extrabold header-gradient">Dashboard</h2>
            <Link to="/chatbot" className="btn">Open Chatbot</Link>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="card p-4">
              <h3 className="font-bold">Your Motive</h3>
              <p className="text-slate-300 mt-1">{motive || 'Set your motive to get personalized guidance.'}</p>
            </div>
            <div className="card p-4">
              <h3 className="font-bold">Profile</h3>
              <p className="text-slate-300 mt-1">{profile.name ? `${profile.name} • ${profile.age} • ${profile.gender} • ${profile.status}` : 'Complete your profile.'}</p>
            </div>
          </div>
          <div className="mt-6">
            <Link to="/quiz" className="btn">Take Quick Quiz</Link>
          </div>
        </div>
        <div className="card p-6 space-y-4">
          <h3 className="text-xl font-bold">Roadmap</h3>
          <ul className="space-y-2 text-slate-300">
            <li>• Week 1: Foundations</li>
            <li>• Week 2: Practice</li>
            <li>• Week 3: Mock Tests</li>
          </ul>
          <button
            className="btn btn-glow"
            onMouseMove={(e)=>{
              const target = e.currentTarget;
              const rect = target.getBoundingClientRect();
              target.style.setProperty('--x', (e.clientX-rect.left)+'px');
              target.style.setProperty('--y', (e.clientY-rect.top)+'px');
            }}
          >
            ✨ Edit Roadmap
          </button>
        </div>
      </div>
    </motion.div>
  )
}
