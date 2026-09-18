import { useEffect, useState } from 'react'
import heroImage from './assets/hero.png'
import { useReveal } from './hooks/useReveal'
import './App.css'

const githubUrl = 'https://github.com/Whyuugl'
const email = 'wahyugalang777@gmail.com'
const emailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`
const instagramUrl = 'https://instagram.com/whyuugl'
const linkedinUrl = 'https://www.linkedin.com/in/whyuugl'

const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#build-log', label: 'Journey' },
  { href: '#contact', label: 'Contact' },
]

const skills = [
  'React', 'Next.js', 'TypeScript', 'Node.js',
  'Laravel', 'Python', 'PyTorch', 'PostgreSQL',
  'FastAPI', 'Docker', 'Redis', 'Tailwind',
]

const projects = [
  {
    num: '01',
    name: 'open-bounty',
    description: 'Web3 platform for discovering and managing open bounty opportunities.',
    impact: 'Connects contributors with decentralized bounty work through a modern web experience.',
    stack: ['TypeScript', 'Web3'],
    href: 'https://github.com/Whyuugl/open-bounty',
  },
  {
    num: '02',
    name: 'Data-Cleaner-CLI',
    description: 'Command-line utility for cleaning and preparing data with JavaScript.',
    impact: 'Shows practical tooling, automation, and comfort outside browser-only work.',
    stack: ['JavaScript', 'CLI'],
    href: 'https://github.com/Whyuugl/Data-Cleaner-CLI',
  },
  {
    num: '03',
    name: 'Document-Management-System',
    description: 'Web system for organizing documents, records, and admin workflows.',
    impact: 'Highlights dashboard thinking, CRUD flows, and structured information management.',
    stack: ['JavaScript', 'Web App'],
    href: 'https://github.com/Whyuugl/Document-Management-System',
  },
  {
    num: '04',
    name: 'rbac-audit',
    description: 'TypeScript project focused on role-based access control review and auditing.',
    impact: 'Good signal for security-minded app logic and permission-heavy systems.',
    stack: ['TypeScript', 'RBAC'],
    href: 'https://github.com/Whyuugl/rbac-audit',
  },
]

const buildLog = [
  {
    phase: 'Now',
    year: '2024',
    role: 'AI Developer',
    detail: 'Building RAG systems, AI-integrated apps, and practical LLM workflows.',
    tags: ['RAG', 'LLM', 'Agents'],
  },
  {
    phase: 'Growth',
    year: '2022',
    role: 'ML Engineer',
    detail: 'Deployed vision, NLP, and recommendation models to production environments.',
    tags: ['Vision', 'NLP', 'MLOps'],
  },
  {
    phase: 'Foundation',
    year: '2020',
    role: 'Backend Developer',
    detail: 'Designed APIs, authentication systems, and scalable database architecture.',
    tags: ['APIs', 'Auth', 'PostgreSQL'],
  },
]

const focusAreas = [
  {
    title: 'Web Products',
    desc: 'Fast, polished frontends with React & Next.js that users actually enjoy.',
    icon: '01',
  },
  {
    title: 'Backend Systems',
    desc: 'Reliable APIs, clean architecture, and infra that scales without drama.',
    icon: '02',
  },
  {
    title: 'AI Workflows',
    desc: 'RAG pipelines, model integration, and AI features built for real products.',
    icon: '03',
  },
]

const services = [
  {
    title: 'Frontend Engineering',
    desc: 'Responsive React interfaces, landing pages, dashboards, component systems, and UI polish.',
    items: ['React apps', 'Portfolio sites', 'Admin dashboards'],
  },
  {
    title: 'Backend Development',
    desc: 'APIs, authentication, database design, integrations, and deploy-ready server logic.',
    items: ['REST APIs', 'Database schema', 'Auth flows'],
  },
  {
    title: 'AI Integration',
    desc: 'Practical AI features that connect models, data, and product workflows without overbuilding.',
    items: ['RAG systems', 'Chat assistants', 'ML prototypes'],
  },
]

const contactDetails = [
  ['Location', 'Indonesia / Remote'],
  ['Availability', 'Open for freelance & collaboration'],
  ['Response', 'Usually within 24 hours'],
]

const socialLinks = [
  ['IG', 'Instagram', instagramUrl],
  ['in', 'LinkedIn', linkedinUrl],
  ['GH', 'GitHub', githubUrl],
  ['@', 'Email', emailUrl],
]

function App() {
  const [scrolled, setScrolled] = useState(false)
  useReveal()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="site">
      <div className="bg-glow" aria-hidden="true" />

      <header className={`topbar ${scrolled ? 'topbar-scrolled' : ''}`}>
        <div className="container topbar-row">
          <a className="site-logo" href="#top">
            <span className="site-logo-mark" aria-hidden="true" />
            Wahyu Galang
          </a>
          <nav className="topbar-nav">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </nav>
          <a className="topbar-gh" href={githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </header>

      <main className="container">
        <section className="hero" id="top">
          <div className="hero-copy">
            <div className="status-pill">
              <span className="status-dot" />
              Open for collaboration
            </div>
            <p className="role">
              Full Stack Developer
              <span className="role-sep">&</span>
              ML Engineer
            </p>
            <h1>
              Wahyu Galang Ramadhan Rumampuk
            </h1>
            <p className="intro-text">
              I craft fast web apps, reliable backend systems, and useful AI features
              for products that need to feel polished from the first click.
            </p>
            <div className="btn-row">
              <a className="btn btn-primary" href="#work">Explore work</a>
              <a className="btn btn-secondary" href={emailUrl} target="_blank" rel="noreferrer">Say hello</a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Developer profile highlights">
            <div className="hero-screen">
              <div className="screen-top">
                <span />
                <span />
                <span />
              </div>
              <img
                src={heroImage}
                alt="Abstract layered software stack"
                width="440"
                height="540"
                fetchPriority="high"
              />
              <div className="screen-lines" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
            </div>
            <div className="hero-stats">
              <span><strong>5+</strong> years coding</span>
              <span><strong>20+</strong> projects shipped</span>
              <span><strong>ID</strong> remote friendly</span>
            </div>
          </div>
        </section>

        <section className="section reveal" id="work">
          <header className="section-header">
            <span className="section-tag">01 / Work</span>
            <h2>Featured projects</h2>
          </header>
          <div className="project-list reveal-stagger">
            {projects.map(({ num, name, description, impact, stack, href }) => (
              <a
                className="project-row"
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
              >
                <span className="project-num">{num}</span>
                <div className="project-body">
                  <h3>{name}</h3>
                  <p>{description}</p>
                  <p className="project-impact">{impact}</p>
                  <ul className="project-tags">
                    {stack.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                </div>
                <span className="project-arrow" aria-hidden="true">-&gt;</span>
              </a>
            ))}
          </div>
        </section>

        <section className="section reveal" id="about">
          <header className="section-header">
            <span className="section-tag">02 / About</span>
            <h2>What I do</h2>
          </header>
          <div className="focus-grid reveal-stagger">
            {focusAreas.map(({ title, desc, icon }) => (
              <article className="focus-card" key={title}>
                <span className="focus-icon" aria-hidden="true">{icon}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
          <div className="about-bottom">
            <p className="about-text">
              I sit at the intersection of full-stack development and machine learning:
              turning ideas into polished products that scale.
            </p>
            <div className="skill-grid reveal-stagger">
              {skills.map((skill) => (
                <span className="skill-item" key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section reveal" id="services">
          <header className="section-header section-header-split">
            <div>
              <span className="section-tag">03 / Services</span>
              <h2>How I can help</h2>
            </div>
            <p className="section-sub">
              From idea to shipped product, I focus on the parts that make a digital product usable, fast, and maintainable.
            </p>
          </header>
          <div className="service-grid reveal-stagger">
            {services.map(({ title, desc, items }) => (
              <article className="service-card" key={title}>
                <h3>{title}</h3>
                <p>{desc}</p>
                <ul>
                  {items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section reveal" id="build-log">
          <header className="section-header section-header-split">
            <div>
              <span className="section-tag">04 / Journey</span>
              <h2>How I level up</h2>
            </div>
            <p className="section-sub">
              Every phase sharpened a different craft: from APIs to models to AI products.
            </p>
          </header>
          <div className="log-track reveal-stagger">
            {buildLog.map(({ phase, year, role, detail, tags }, i) => (
              <article className="log-card" key={role} style={{ '--i': i }}>
                <div className="log-card-head">
                  <span className="log-phase">{phase}</span>
                  <span className="log-year">{year}</span>
                </div>
                <h3>{role}</h3>
                <p>{detail}</p>
                <ul className="log-tags">
                  {tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section cta reveal" id="contact">
          <div className="cta-box">
            <span className="section-tag">05 / Contact</span>
            <h2>Let&apos;s build your next idea.</h2>
            <p>
              Whether it&apos;s a half-baked concept or a product that needs polish,
              drop me a message and we&apos;ll figure it out together.
            </p>
            <dl className="contact-list">
              {contactDetails.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <div className="social-links" aria-label="Social media links">
              {socialLinks.map(([mark, label, href]) => (
                <a key={label} href={href} target="_blank" rel="noreferrer">
                  <span aria-hidden="true">{mark}</span>
                  {label}
                </a>
              ))}
            </div>
            <div className="btn-row">
              <a className="btn btn-primary" href={emailUrl} target="_blank" rel="noreferrer">{email}</a>
              <a className="btn btn-secondary" href={githubUrl} target="_blank" rel="noreferrer">
                View GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="container site-footer">
        <p>(c) {new Date().getFullYear()} Wahyu Galang Ramadhan Rumampuk</p>
        <p className="footer-note">Designed & built from scratch</p>
      </footer>
    </div>
  )
}

export default App
