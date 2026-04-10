import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Home',         href: '#home'         },
  { label: 'About',        href: '#about'        },
  { label: 'Experience',   href: '#experience'   },
  { label: 'Skills',       href: '#skills'       },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact',      href: '#contact'      },
]

export default function Navbar() {
  const [active, setActive]   = useState('#home')
  const [open,   setOpen]     = useState(false)

  /* track active section on scroll */
  useEffect(() => {
    const sections = links.map(l => document.querySelector(l.href)).filter(Boolean)
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive('#' + e.target.id)
        })
      },
      { threshold: 0.4 }
    )
    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      {/* ── RIGHT SIDE VERTICAL NAV (desktop) ── */}
      <motion.nav
        className="sidenav"
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0,  opacity: 1 }}
        transition={{ duration: .6, ease: 'easeOut' }}
      >
        {/* logo */}
        <a href="#home" className="sidenav-logo">
          A<span>.</span>
        </a>

        {/* divider */}
        <div className="sidenav-divider" />

        {/* links */}
        <ul className="sidenav-links">
          {links.map(l => (
            <li key={l.label}>
              <a
                href={l.href}
                className={`sidenav-link${active === l.href ? ' active' : ''}`}
              >
                <span className="sidenav-dot" />
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* divider */}
        <div className="sidenav-divider" />

        {/* hire me */}
        <a href="mailto:aswin23yashin23@gmail.com" className="sidenav-hire">
          Hire Me
        </a>
      </motion.nav>

      {/* ── MOBILE HAMBURGER ── */}
      <div className="mobile-topbar">
        <a href="#home" className="nav-logo">A<span>.</span></a>
        <button className="hamburger" onClick={() => setOpen(p => !p)} aria-label="Menu">
          <span style={{ transform: open ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
          <span style={{ opacity: open ? 0 : 1 }} />
          <span style={{ transform: open ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: .3 }}
          >
            {links.map(l => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a
              href="mailto:aswin23yashin23@gmail.com"
              onClick={() => setOpen(false)}
              style={{ color: '#e0e0e0', fontWeight: 700 }}
            >
              Hire Me →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
