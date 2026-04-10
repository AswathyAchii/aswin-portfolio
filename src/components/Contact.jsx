import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 30 },
  whileInView:{ opacity: 1, y: 0  },
  viewport:   { once: true, margin: '-60px' },
  transition: { duration: .55, delay, ease: 'easeOut' },
})

const CARDS = [
  {
    icon:   '📞',
    iconBg: 'rgba(255,255,255,0.08)',
    label:  'Phone',
    val:    '+91 79942 94863',
    href:   'tel:+917994294863',
  },
  {
    icon:   '✉️',
    iconBg: 'rgba(255,255,255,0.06)',
    label:  'Email',
    val:    'aswin23yashin23@gmail.com',
    href:   'mailto:aswin23yashin23@gmail.com',
  },
  {
    icon:   '📍',
    iconBg: 'rgba(255,255,255,0.06)',
    label:  'Location',
    val:    'Kodungallur, Thrissur, Kerala – 680668',
    href:   null,
  },
  {
    icon:   '🛂',
    iconBg: 'rgba(255,255,255,0.05)',
    label:  'Passport',
    val:    'Valid till 22 Sep 2031 · Open to travel',
    href:   null,
  },
]

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <motion.div {...fadeUp(0)}>
          <div className="contact-status">
            <span className="status-dot" />
            Available for Opportunities
          </div>
          <h2 className="heading">Get in Touch</h2>
          <p className="sub">
            Open to new roles in sales management, business development, and beyond. Let's connect.
          </p>
        </motion.div>

        <div className="contact-grid">
          {CARDS.map((c, i) => {
            const card = (
              <motion.div
                key={c.label}
                className="contact-card glass"
                {...fadeUp(i * .08)}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="c-icon" style={{ background: c.iconBg }}>{c.icon}</div>
                <div>
                  <div className="c-label">{c.label}</div>
                  <div className="c-val">{c.val}</div>
                </div>
              </motion.div>
            )
            return c.href
              ? <a key={c.label} href={c.href} style={{ textDecoration: 'none', display: 'contents' }}>{card}</a>
              : card
          })}
        </div>

        <motion.div style={{ textAlign: 'center', marginTop: '3.5rem' }} {...fadeUp(.3)}>
          <a
            href="mailto:aswin23yashin23@gmail.com"
            className="btn btn-primary"
            style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}
          >
            📩&nbsp; Send Me an Email
          </a>
        </motion.div>
      </div>
    </section>
  )
}
