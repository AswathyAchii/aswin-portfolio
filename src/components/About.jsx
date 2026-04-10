import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 40 },
  whileInView:{ opacity: 1, y: 0  },
  viewport:   { once: true, margin: '-80px' },
  transition: { duration: .6, delay, ease: 'easeOut' },
})

const INFO = [
  { icon: '🎂', key: 'Date of Birth', val: '18 March 2002'                  },
  { icon: '🌍', key: 'Nationality',   val: 'Indian'                         },
  { icon: '📍', key: 'Location',      val: 'Kodungallur, Thrissur, Kerala'   },
  { icon: '📧', key: 'Email',         val: 'aswin23yashin23@gmail.com'       },
  { icon: '📞', key: 'Phone',         val: '+91 79942 94863'                },
  { icon: '🛂', key: 'Passport',      val: 'U2676154 · Valid till Sep 2031'  },
]

const CARDS = [
  {
    icon: '💼',
    bg:     'rgba(255,255,255,0.05)', border: 'rgba(255,255,255,0.1)',
    iconBg: 'rgba(255,255,255,0.08)', iconColor: '#e0e0e0',
    title: '7+ Years in Sales',
    desc:  'Across fitness, spice retail, telecom and catering — consistently hitting and exceeding targets.',
  },
  {
    icon: '🤝',
    bg:     'rgba(255,255,255,0.04)', border: 'rgba(255,255,255,0.08)',
    iconBg: 'rgba(255,255,255,0.07)', iconColor: '#cccccc',
    title: 'Client Relationship Expert',
    desc:  'Built loyal customer bases through structured follow-ups and personalised service.',
  },
  {
    icon: '📊',
    bg:     'rgba(255,255,255,0.03)', border: 'rgba(255,255,255,0.07)',
    iconBg: 'rgba(255,255,255,0.06)', iconColor: '#bbbbbb',
    title: 'CRM & Digital Marketing',
    desc:  'Skilled in CRM platforms, social media marketing, and digital promotion strategies.',
  },
  {
    icon: '👥',
    bg:     'rgba(255,255,255,0.04)', border: 'rgba(255,255,255,0.08)',
    iconBg: 'rgba(255,255,255,0.07)', iconColor: '#cccccc',
    title: 'Team Leadership',
    desc:  'Led sales teams to surpass monthly membership and revenue targets with clear direction.',
  },
]

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <motion.div {...fadeUp(0)}>
          <span className="label">👤 About Me</span>
          <h2 className="heading">Who I Am</h2>
          <p className="sub">
            A passionate sales professional who turns prospects into loyal customers and ideas into revenue.
          </p>
        </motion.div>

        <div className="about-grid">
          {/* left — bio + info */}
          <motion.div {...fadeUp(0.1)}>
            <div className="about-bio">
              <p>
                I am a results-driven sales professional with over{' '}
                <strong style={{ color: '#e0e0e0' }}>7 years of hands-on experience</strong>{' '}
                spanning fitness centres, spice retail, telecom distribution, and large-scale catering services.
              </p>
              <p>
                My strength lies in building genuine connections — with clients, retailers, and team members alike.
                I bring energy, discipline, and a data-informed approach to every role I take on.
              </p>
              <p>
                Fluent in Malayalam, Tamil, Hindi, and English, I am always ready to engage customers in their
                language and build lasting loyalty.
              </p>
            </div>

            <ul className="info-list">
              {INFO.map(item => (
                <li key={item.key}>
                  <div className="info-icon">{item.icon}</div>
                  <div>
                    <div className="info-key">{item.key}</div>
                    <div className="info-val">{item.val}</div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* right — highlight cards */}
          <motion.div className="about-cards" {...fadeUp(0.2)}>
            {CARDS.map(c => (
              <div
                key={c.title}
                className="about-card glass"
                style={{ background: c.bg, borderColor: c.border }}
              >
                <div className="ac-icon" style={{ background: c.iconBg, color: c.iconColor }}>
                  {c.icon}
                </div>
                <div>
                  <div className="ac-title">{c.title}</div>
                  <div className="ac-desc">{c.desc}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
