import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 30 },
  whileInView:{ opacity: 1, y: 0  },
  viewport:   { once: true, margin: '-60px' },
  transition: { duration: .55, delay, ease: 'easeOut' },
})

const EDU = [
  {
    year:   '2017 – 2019',
    title:  'Higher Secondary — Bio Science',
    school: 'MRM Govt VHSS, Santhipuram',
    board:  'Kerala State Board',
    icon:   '🎓',
  },
  {
    year:   '2015 – 2017',
    title:  'SSLC — High School',
    school: 'Kerala Board',
    board:  'Kerala State Board',
    icon:   '🏫',
  },
]

export default function Education() {
  return (
    <section className="section section-alt" id="education">
      <div className="container">
        <motion.div {...fadeUp(0)}>
          <span className="label">📚 Background</span>
          <h2 className="heading">Education</h2>
          <p className="sub">Built a strong academic foundation before launching a dynamic sales career.</p>
        </motion.div>

        <div className="edu-grid">
          {EDU.map((e, i) => (
            <motion.div key={e.title} className="edu-card glass" {...fadeUp(i * .1)}>
              <div style={{ fontSize: '2.2rem', marginBottom: '.75rem' }}>{e.icon}</div>
              <span className="edu-year">{e.year}</span>
              <div className="edu-title">{e.title}</div>
              <div className="edu-school">{e.school}</div>
              <div className="edu-school" style={{ marginTop: '.25rem', fontSize: '.8rem' }}>
                {e.board}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
