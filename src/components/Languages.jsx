import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const R = 35
const C = 2 * Math.PI * R   // ~219.9

const LANGS = [
  { name: 'Malayalam', level: 'Native',           pct: 100, stroke: '#e0e0e0', cls: 'lang-native' },
  { name: 'English',   level: 'C1 · Advanced',    pct: 83,  stroke: '#aaaaaa', cls: 'lang-c1'     },
  { name: 'Tamil',     level: 'C2 · Proficient',  pct: 95,  stroke: '#cccccc', cls: 'lang-c2'     },
  { name: 'Hindi',     level: 'C2 · Proficient',  pct: 95,  stroke: '#bbbbbb', cls: 'lang-c2'     },
]

function RingCard({ name, level, pct, stroke, cls }) {
  const ref = useRef(null)
  const [animated, setAnimated] = useState(false)
  const offset = animated ? C * (1 - pct / 100) : C

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setAnimated(true) },
      { threshold: .4 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <motion.div
      ref={ref}
      className="lang-card glass"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: .5 }}
      whileHover={{ y: -4 }}
    >
      <div className="lang-ring">
        <svg width="90" height="90" viewBox="0 0 90 90">
          <circle className="ring-bg"   cx="45" cy="45" r={R} />
          <circle
            className="ring-fill"
            cx="45" cy="45" r={R}
            stroke={stroke}
            style={{ strokeDashoffset: offset }}
          />
        </svg>
        <div className="ring-text">{pct}%</div>
      </div>
      <div className="lang-name">{name}</div>
      <span className={`lang-label ${cls}`}>{level}</span>
    </motion.div>
  )
}

export default function Languages() {
  return (
    <section className="section" id="languages">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
        >
          <span className="label">🌐 Communication</span>
          <h2 className="heading">Languages</h2>
          <p className="sub">Fluent in four languages — able to connect with clients across Kerala and beyond.</p>
        </motion.div>

        <div className="lang-grid">
          {LANGS.map(l => <RingCard key={l.name} {...l} />)}
        </div>
      </div>
    </section>
  )
}
