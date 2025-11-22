
import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

function Bubble({ role, text }){
  const isUser = role === 'user'
  return (
    <div className={"flex " + (isUser ? "justify-end" : "justify-start")}>
      <div className={"max-w-[80%] rounded-2xl px-4 py-2 card " + (isUser ? "border-teal-400/40" : "")}>
        <p className="whitespace-pre-wrap">{text}</p>
      </div>
    </div>
  )
}

export default function Chatbot(){
  const [messages, setMessages] = useState([{role:'assistant', text:'Hi! I am your TutorIQ mentor. How can I help?'}])
  const [input, setInput] = useState('')
  const listRef = useRef(null)
  useEffect(()=>{ listRef.current?.scrollTo({ top: 1e9, behavior: 'smooth' }) }, [messages])

  function send(e) {
  e.preventDefault()
  if (!input.trim()) return

  const userMsg = { role: 'user', text: input.trim() }
  setMessages(prev => [...prev, userMsg])

  const userInput = input.trim()
  setInput("")

  fetch("https://bck-tutor.onrender.com/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: userInput })
  })
  .then(res => res.json())
  .then(data => {
    setMessages(prev => [...prev, { role: "assistant", text: data.reply }])
  })
  .catch(() => {
    setMessages(prev => [...prev, { role: "assistant", text: "⚠️ Couldn't connect to server." }])
  })
}


  return (
    <motion.div className="page"
      initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
    >
      <div className="card h-[70vh] md:h-[75vh] flex flex-col">
        <div className="p-4 border-b border-white/10 flex items-center justify-between">
          <h2 className="font-extrabold header-gradient text-2xl">Chatbot</h2>
        </div>
        <div ref={listRef} className="flex-1 overflow-auto p-4 space-y-3">
          {messages.map((m, i)=>(<Bubble key={i} role={m.role} text={m.text} />))}
        </div>
        <form onSubmit={send} className="p-3 border-t border-white/10 flex gap-2">
          <input className="input flex-1" placeholder="Type your message..." value={input} onChange={(e)=>setInput(e.target.value)} />
          <button className="btn btn-glow" type="submit">Send</button>
        </form>
      </div>
    </motion.div>
  )
}
