
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function Motive() {
  const nav = useNavigate()
  const [motive, setMotive] = useState('')
  useEffect(() => {
    const saved = localStorage.getItem('motive')
    if (saved) setMotive(saved)
  }, [])
  function next(e){
    e.preventDefault()
    console.log(motive);
    localStorage.setItem('motive', motive)
    nav('/dashboard')
  }
  return (
    <motion.div className="page"
      initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
    >
      <div className="card p-8 max-w-2xl mx-auto">
        <h2 className="text-3xl font-extrabold header-gradient">Motive</h2>
        <p className="text-slate-300 mt-2">What's your primary goal?</p>
        <form onSubmit={next} className="mt-6 space-y-4">
          <textarea className="input h-36" value={motive} onChange={(e)=>setMotive(e.target.value)} placeholder="e.g., Crack JEE 2026 with 98+ percentile" required />
          <button className="btn btn-glow" type="submit">Continue to Dashboard</button>
        </form>
      </div>
    </motion.div>
  )
}
