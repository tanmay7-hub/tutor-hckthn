
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export default function Profile() {
  const nav = useNavigate()
  const [form, setForm] = useState({ name: '', age: '', gender: '', status: '' })

  useEffect(() => {
    const saved = localStorage.getItem('profile')
    if (saved) setForm(JSON.parse(saved))
  }, [])

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }
  function handleSubmit(e) {
    e.preventDefault()
    console.log(form);
    localStorage.setItem('profile', JSON.stringify(form))
    nav('/motive')
  }

  return (
    <motion.div className="page"
      initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
    >
      <div className="card p-8 max-w-2xl mx-auto">
        <h2 className="text-3xl font-extrabold header-gradient">Profile</h2>
        <p className="text-slate-300 mt-2">Tell us a bit about you.</p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block mb-1">Name</label>
            <input className="input" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Age</label>
              <input className="input" name="age" type="number" value={form.age} onChange={handleChange} placeholder="18" required />
            </div>
            <div>
              <label className="block mb-1">Gender</label>
              <select className="select" name="gender" value={form.gender} onChange={handleChange} required>
                <option value="" disabled>Select</option>
                <option>Female</option>
                <option>Male</option>
                <option>Non-binary</option>
                <option>Prefer not to say</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block mb-1">Current studying status</label>
            <select className="select" name="status" value={form.status} onChange={handleChange} required>
              <option value="" disabled>Select</option>
              <option>School</option>
              <option>College</option>
              <option>University</option>
              <option>Working</option>
              <option>Other</option>
            </select>
          </div>
          <div className="pt-2">
            <button className="btn btn-glow" type="submit">Save & Continue</button>
          </div>
        </form>
      </div>
    </motion.div>
  )
}
