import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 40 },
  whileInView:{ opacity: 1, y: 0  },
  viewport:   { once: true, margin: '-60px' },
  transition: { duration: .55, delay, ease: 'easeOut' },
})

const container = {
  hidden: {},
  show:   { transition: { staggerChildren: .05 } },
}
const chip = {
  hidden: { opacity: 0, scale: .8 },
  show:   { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 24 } },
}

const PRO = [
  'Sales & Marketing Strategy', 'Client Relationship Management',
  'Inventory & Stock Handling',  'Team Leadership',
  'Communication Skills',        'Time Management',
  'Customer Service',            'Product Promotion',
  'Problem Solving',             'Lead Generation',
  'Retail Operations',           'Target Achievement',
  'Territory Management',        'Decision Making',
  'Adaptability',                'Conflict Resolution',
]

const TECH = [
  'CRM Tools', 'MS Excel', 'Social Media Marketing',
  'Digital Marketing', 'Multimedia Design',
  'Inventory Management Systems', 'Visual Merchandising',
  'Point-of-Sale Systems',
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <motion.div {...fadeUp(0)}>
          <span className="label">⚡ Capabilities</span>
          <h2 className="heading">Skills &amp; Expertise</h2>
          <p className="sub">A well-rounded toolkit built across 7+ years of real-world sales experience.</p>
        </motion.div>

        <div className="skills-wrap">
          {/* Professional */}
          <motion.div className="skills-group" {...fadeUp(.1)}>
            <h3>Professional Skills</h3>
            <motion.div
              className="chip-wrap"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {PRO.map(s => (
                <motion.span key={s} className="chip chip-pro" variants={chip}>
                  {s}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Technical */}
          <motion.div className="skills-group" {...fadeUp(.2)}>
            <h3>Technical Skills</h3>
            <motion.div
              className="chip-wrap"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {TECH.map(s => (
                <motion.span key={s} className="chip chip-tech" variants={chip}>
                  {s}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
