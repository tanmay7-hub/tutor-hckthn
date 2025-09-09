
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <motion.div className="page"
      initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
    >
      <div className="card p-8 md:p-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold header-gradient">TutorIQ</h1>
        <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
          Your personalized AI mentor — set your motive, build your roadmap, and chat your way to mastery.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link to="/profile" className="btn btn-glow">Get Started</Link>
          <a href="#features" className="btn">Learn More</a>
        </div>
      </div>
      <div id="features" className="grid md:grid-cols-3 gap-6 mt-8">
        {[
          ['Set your Motive', 'Define what you want to achieve.'],
          ['Smart Dashboard', 'Track progress with clarity.'],
          ['Chatbot Mentor', 'Guidance 24/7 with a friendly UI.'],
        ].map(([title, desc]) => (
          <div key={title} className="card p-6">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-slate-300 mt-2">{desc}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
