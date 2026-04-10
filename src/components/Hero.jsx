import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const ROLES = [
  'Sales Manager',
  'Business Developer',
  'Team Leader',
  'CRM Specialist',
  'Growth Driver',
]

function useTypewriter(words, speed = 80, pause = 2000) {
  const [display, setDisplay]   = useState('')
  const [wIdx, setWIdx]         = useState(0)
  const [cIdx, setCIdx]         = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wIdx]
    let timeout

    if (!deleting && cIdx <= word.length) {
      timeout = setTimeout(() => { setDisplay(word.slice(0, cIdx)); setCIdx(p => p + 1) }, speed)
    } else if (!deleting && cIdx > word.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && cIdx > 0) {
      timeout = setTimeout(() => { setDisplay(word.slice(0, cIdx - 1)); setCIdx(p => p - 1) }, speed / 2)
    } else {
      setDeleting(false)
      setWIdx(p => (p + 1) % words.length)
    }
    return () => clearTimeout(timeout)
  }, [cIdx, deleting, wIdx, words, speed, pause])

  return display
}

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 30 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: .6, delay, ease: 'easeOut' },
})

export default function Hero() {
  const role = useTypewriter(ROLES)

  return (
    <section className="hero" id="home">
      {/* animated background */}
      <div className="hero-bg">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
      </div>

      <div className="container hero-content">
        <div className="hero-grid">

          {/* ── LEFT: text ── */}
          <div>
            <motion.div className="hero-tag" {...fadeUp(0.1)}>
              👋&nbsp; Sales &amp; Business Development
            </motion.div>

            <motion.h1 className="hero-name" {...fadeUp(0.2)}>
              Aswin<br />
              <span className="highlight">T G</span>
            </motion.h1>

            <motion.p className="hero-role" {...fadeUp(0.3)}>
              {role}<span className="cursor" />
            </motion.p>

            <motion.p className="hero-desc" {...fadeUp(0.4)}>
              Results-driven sales professional with{' '}
              <strong style={{ color: '#e0e0e0' }}>7+ years</strong> of experience
              across fitness, retail, telecom, and catering. Expert in CRM,
              team leadership, and building long-term client relationships.
            </motion.p>

            <motion.div className="hero-cta" {...fadeUp(0.5)}>
              <a href="#contact"    className="btn btn-primary">📩&nbsp; Contact Me</a>
              <a href="#experience" className="btn btn-ghost">View Experience →</a>
            </motion.div>

            <motion.div className="hero-stats" {...fadeUp(0.65)}>
              {[
                { num: '7+',  lbl: 'Years Exp.'      },
                { num: '4',   lbl: 'Industries'       },
                { num: '50%', lbl: 'Coverage Growth'  },
                { num: '35%', lbl: 'Sales Increase'   },
              ].map(s => (
                <div className="stat-item" key={s.lbl}>
                  <div className="num">{s.num}</div>
                  <div className="lbl">{s.lbl}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: full portrait photo ── */}
          <motion.div
            className="hero-photo-wrap"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0  }}
            transition={{ duration: .75, delay: .3, ease: 'easeOut' }}
          >
            <img
              src="/profile.jpg"
              alt="Aswin T G"
              className="hero-photo-img"
            />

            {/* floating info badges */}
            <motion.div
              className="badge badge-tl"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0   }}
              transition={{ delay: .9, duration: .5 }}
            >
              <span className="badge-icon">🏆</span>
              <div>
                <div style={{ fontSize: '.72rem', color: '#999', fontWeight: 700 }}>Experience</div>
                <div style={{ fontWeight: 800 }}>7+ Years</div>
              </div>
            </motion.div>

            <motion.div
              className="badge badge-br"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0  }}
              transition={{ delay: 1.1, duration: .5 }}
            >
              <span className="badge-icon">📍</span>
              <div>
                <div style={{ fontSize: '.72rem', color: '#999', fontWeight: 700 }}>Location</div>
                <div style={{ fontWeight: 800 }}>Kochi, Kerala</div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
