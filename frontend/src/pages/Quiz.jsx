
import { motion } from 'framer-motion'

export default function Quiz(){
  return (
    <motion.div className="page"
      initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
    >
      <div className="card p-8 max-w-2xl mx-auto">
        <h2 className="text-3xl font-extrabold header-gradient">Quiz</h2>
        <p className="text-slate-300 mt-2">Coming soon — adaptive questions tailored to your motive.</p>
      </div>
    </motion.div>
  )
}
