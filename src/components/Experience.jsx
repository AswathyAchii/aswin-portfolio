import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 40 },
  whileInView:{ opacity: 1, y: 0  },
  viewport:   { once: true, margin: '-60px' },
  transition: { duration: .55, delay, ease: 'easeOut' },
})

const JOBS = [
  {
    role:    'Sales Manager',
    company: 'DARC 1 Fitness Centre',
    loc:     'Kochi, Kerala',
    period:  'May 2023 – May 2025',
    points: [
      'Directed a team of sales professionals to consistently achieve and surpass monthly membership and revenue targets.',
      'Developed and executed result-driven marketing campaigns that led to a 20% increase in customer acquisition and walk-ins.',
      'Fostered long-term client relationships through structured follow-ups and personalised service.',
      'Implemented CRM tools to streamline lead tracking, follow-ups, and performance reporting.',
    ],
  },
  {
    role:    'Salesman',
    company: 'Trigono Spices',
    loc:     'Thrissur, Kerala',
    period:  'Apr 2021 – May 2023',
    points: [
      'Increased product visibility and sales across multiple retail outlets through relationship-building and customer-focused service.',
      'Maintained optimal stock levels, ensured timely restocking, and organised product displays to boost customer interest.',
      'Identified market trends and provided feedback on high-demand products, contributing to revenue growth.',
      'Built strong relationships with clients and local retailers, enhancing brand awareness and loyalty.',
    ],
  },
  {
    role:    'Distributor – Telecom (VI SIM)',
    company: 'Independent Distribution',
    loc:     'Thrissur, Kerala',
    period:  'Nov 2019 – Mar 2021',
    points: [
      'Oversaw SIM card distribution across designated regions, ensuring timely delivery and accurate inventory control.',
      'Maintained daily sales reports, coordinated logistics, and liaised with telecom representatives for promotional activities.',
      'Educated retail partners on product features and sales strategies, leading to improved service delivery and upselling.',
      'Established and maintained a loyal customer base through consistent follow-ups and relationship management.',
    ],
  },
  {
    role:    'Distributor – Catering Services',
    company: 'Kallummakaya Restaurant',
    loc:     'Thrissur, Kerala',
    period:  'Sep 2017 – Oct 2019',
    points: [
      'Managed catering logistics and coordinated timely food deliveries for weddings and large-scale events.',
      'Acted as the main point of contact for clients, ensuring expectations were met with professionalism and flexibility.',
      'Supervised delivery teams, verified orders for accuracy and quality, and addressed last-minute changes efficiently.',
      'Maintained records of delivery schedules, client feedback, and service improvements to enhance customer satisfaction.',
    ],
  },
]

export default function Experience() {
  return (
    <section className="section section-alt" id="experience">
      <div className="container">
        <motion.div {...fadeUp(0)}>
          <span className="label">💼 Work History</span>
          <h2 className="heading">Work Experience</h2>
          <p className="sub">7+ years of proven performance across four distinct industries.</p>
        </motion.div>

        <div className="timeline">
          {JOBS.map((job, i) => (
            <motion.div className="tl-item" key={job.role} {...fadeUp(i * 0.08)}>
              <div className="tl-dot" />
              <div className="tl-card glass">
                <div className="tl-head">
                  <div>
                    <div className="tl-role">{job.role}</div>
                    <div className="tl-company">{job.company}</div>
                  </div>
                  <div className="tl-meta">
                    <span className="tl-date">{job.period}</span>
                    <span className="tl-loc">📍 {job.loc}</span>
                  </div>
                </div>
                <ul className="tl-list">
                  {job.points.map(p => <li key={p}>{p}</li>)}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
