import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

function useCounter(target, duration = 1800, inView = false) {
  const [count, setCount] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true
    const start = performance.now()
    const tick = (now) => {
      const pct = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - pct, 3)
      setCount(Math.round(ease * target))
      if (pct < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, target, duration])

  return count
}

const DATA = [
  { icon: '🏋️', target: 30, suffix: '%', desc: 'Increased gym membership sign-ups over 12 months through strategic marketing & CRM optimisation' },
  { icon: '📈', target: 35, suffix: '%', desc: 'Contributed to total monthly sales growth by promoting fast-moving and seasonal products'           },
  { icon: '🗺️', target: 50, suffix: '%', desc: 'Expanded distribution coverage in assigned territory within just one year'                         },
  { icon: '📱', target: 30, suffix: '%', desc: 'Increased SIM activations by educating retailers and improving point-of-sale displays'              },
  { icon: '⭐', target: 35, suffix: '%', desc: 'Improved customer satisfaction scores through responsive service and attention to detail'            },
]

function AchCard({ icon, target, suffix, desc }) {
  const ref   = useRef(null)
  const [vis, setVis] = useState(false)
  const count = useCounter(target, 1800, vis)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true) },
      { threshold: .3 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <motion.div
      ref={ref}
      className="ach-card glass"
      whileHover={{ y: -6, scale: 1.02 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: .5 }}
    >
      <span className="ach-icon">{icon}</span>
      <div className="ach-num">
        {count}<span className="ach-unit">{suffix}</span>
      </div>
      <p className="ach-desc">{desc}</p>
    </motion.div>
  )
}

export default function Achievements() {
  return (
    <section className="section ach-section" id="achievements">
      <div className="container" style={{ position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
        >
          <span className="label">🏆 Key Metrics</span>
          <h2 className="heading">Achievements</h2>
          <p className="sub">Numbers that demonstrate real-world impact across every role.</p>
        </motion.div>

        <div className="ach-grid">
          {DATA.map(d => (
            <AchCard key={d.desc} {...d} />
          ))}
        </div>
      </div>
    </section>
  )
}
