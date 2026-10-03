import { useEffect, useRef, useState } from 'react'
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Menu,
  Moon,
  Sun,
  X,
} from 'lucide-react'
import Reveal from './components/Reveal.jsx'

const schoolLogo = 'https://tis.edu.in/_next/static/media/schoolLogo.95f6e121.png'
const campusImage = 'https://tis.edu.in/_next/static/media/Image%201.0a814859.webp'
const sports = [
  {
    number: '01',
    title: 'Room to find your thing.',
    type: '16+ Olympic sports',
    image: 'https://tis.edu.in/_next/static/media/archery.7a805345.png',
    alt: 'Archery at Tulas International School',
    className: 'activity-card--archery',
  },
  {
    number: '02',
    title: 'Space to make it yours.',
    type: 'A life beyond the classroom',
    image: 'https://tis.edu.in/_next/static/media/dance.88843edb.webp',
    alt: 'Student activity at Tulas International School',
    className: 'activity-card--dance',
  },
  {
    number: '03',
    title: 'A world that opens up.',
    type: 'Learning through doing',
    image: 'https://tis.edu.in/_next/static/media/swimming.6fc81e65.webp',
    alt: 'Student activity at Tulas International School',
    className: 'activity-card--swim',
  },
]

const schoolFacts = [
  { value: '22', suffix: ' acres', label: 'Pollution-free campus' },
  { value: '16+', suffix: '', label: 'Olympic sports' },
  { value: '24/7', suffix: '', label: 'Medical assistance' },
  { value: '6:1', suffix: '', label: 'Student-teacher ratio' },
]

const navLinks = [
  { label: 'Our school', href: '#our-school' },
  { label: 'School life', href: '#school-life' },
  { label: 'The Tulas difference', href: '#the-tulas-difference' },
]

function Header({ darkMode, onThemeToggle }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Tulas International School home">
        <img className="wordmark__crest" src={schoolLogo} alt="" />
        <span className="wordmark__text">
          <span className="wordmark__name">Tulas</span>
          <span className="wordmark__sub">International School</span>
        </span>
      </a>

      <button
        className="icon-button mobile-menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={21} /> : <Menu size={21} />}
      </button>

      <nav id="site-navigation" className={`site-nav${menuOpen ? ' site-nav--open' : ''}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
        <button
          className="icon-button theme-toggle"
          type="button"
          aria-label={`Switch to ${darkMode ? 'light' : 'dark'} theme`}
          onClick={onThemeToggle}
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <a className="button button--nav" href="#contact" onClick={() => setMenuOpen(false)}>
          Inquire <ArrowUpRight size={15} />
        </a>
      </nav>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-heading">
      <div className="hero__copy">
        <p className="eyebrow"><span className="eyebrow__dot" /> Dehradun, Uttarakhand <span className="eyebrow__divider" /> Est. 2012</p>
        <h1 id="hero-heading">
          Welcome to <span>Tulas</span> International School <span className="hero__tis">(TIS)</span>
        </h1>
        <p className="hero__subhead">Boarding and Day School Excellence</p>
        <p className="hero__description">
          A co-educational CBSE school where a good education makes room for the whole person.
          For students from Class 4 to 12.
        </p>
        <div className="hero__actions">
          <a className="button button--primary" href="#our-school">
            Get to know Tulas <ArrowDownRight size={17} />
          </a>
          <a className="text-link" href="#contact">Plan a visit <ArrowRight size={16} /></a>
        </div>
        <div className="hero__caption"><span>30.3551° N</span><span>77.8961° E</span></div>
      </div>

      <div className="hero__visual">
        <img className="hero__image" src={campusImage} alt="Students at Tulas International School" fetchpriority="high" />
        <div className="hero__image-shade" />
        <span className="hero__image-note"><span className="hero__image-note-dot" /> Dhoolkot, Dehradun</span>
        <div className="hero__seal" aria-label="Learn, live, lead">
          <svg className="hero__seal-text" viewBox="0 0 100 100" aria-hidden="true">
            <defs><path id="seal-circle" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" /></defs>
            <text><textPath href="#seal-circle">LEARN · LIVE · LEAD · LEARN · LIVE · LEAD · </textPath></text>
          </svg>
          <span className="hero__seal-star">✳</span>
        </div>
        <a className="hero__scroll" href="#our-school" aria-label="Scroll to discover the school">
          <span>Scroll to explore</span><ArrowDown size={15} />
        </a>
      </div>
    </section>
  )
}

function OurSchool() {
  return (
    <section className="school-section section-pad" id="our-school">
      <Reveal className="school-section__aside">
        <p className="eyebrow eyebrow--muted">A school for the whole you</p>
        <span className="section-index">01 / 03</span>
      </Reveal>
      <Reveal className="school-section__main" delay={100}>
        <h2 className="display-heading">More than what you <span>learn.</span></h2>
        <p className="school-section__story">
          Tulas International School was established in 2012 under the aegis of Rishabh Educational
          Trust to impart education through seamless opportunities.
        </p>
        <p className="school-section__detail">
          Today, TIS is a CBSE-affiliated co-educational boarding and day school in Dehradun,
          Uttarakhand. From Class 4 to 12, there is room here to learn, explore and grow into your
          own kind of person.
        </p>
        <a className="underlined-link" href="https://tis.edu.in/" target="_blank" rel="noreferrer">
          Visit the TIS website <ArrowUpRight size={15} />
        </a>
      </Reveal>
      <Reveal className="school-section__sketch" delay={180}>
        <span className="sketch-sun" aria-hidden="true" />
        <span className="sketch-word">become</span>
        <span className="sketch-footnote">At your own pace.<br />In your own way.</span>
      </Reveal>
    </section>
  )
}

function SchoolLife() {
  return (
    <section className="life-section section-pad" id="school-life">
      <Reveal className="section-heading">
        <div>
          <p className="eyebrow eyebrow--muted">Curiosity has many directions</p>
          <h2 className="display-heading">Life goes <span>everywhere.</span></h2>
        </div>
        <p className="section-heading__note">Some things happen at a desk.<br />The best ones don&apos;t always.</p>
      </Reveal>
      <div className="activity-grid">
        {sports.map((sport, index) => (
          <Reveal className={`activity-card ${sport.className}`} delay={index * 100} key={sport.number}>
            <div className="activity-card__image-wrap">
              <img src={sport.image} alt={sport.alt} loading="lazy" />
              <span className="activity-card__number">{sport.number}</span>
            </div>
            <div className="activity-card__copy">
              <div><p className="activity-card__type">{sport.type}</p><h3>{sport.title}</h3></div>
              <ArrowUpRight className="activity-card__arrow" size={19} aria-hidden="true" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Difference() {
  return (
    <section className="difference-section" id="the-tulas-difference">
      <div className="difference-section__topline">
        <span>02 / 03</span><span>A little more room to grow</span>
      </div>
      <div className="facts-grid">
        {schoolFacts.map((fact, index) => (
          <Reveal className="fact" delay={index * 80} key={fact.label}>
            <p className="fact__value">{fact.value}<span>{fact.suffix}</span></p>
            <p className="fact__label"><Check size={13} /> {fact.label}</p>
          </Reveal>
        ))}
      </div>
      <p className="difference-section__source">A few of the things that help make a day here a little different.</p>
    </section>
  )
}

function Admissions() {
  return (
    <section className="contact-section section-pad" id="contact">
      <Reveal className="contact-section__copy">
        <p className="eyebrow"><span className="eyebrow__dot" /> Your next chapter, perhaps?</p>
        <h2 className="display-heading">Come see what <span>growing</span> feels like.</h2>
      </Reveal>
      <Reveal className="contact-section__action" delay={120}>
        <p>We would love to show you around. Get in touch with our admissions team or plan a visit to the Dehradun campus.</p>
        <a className="button button--light" href="mailto:info@tis.edu.in?subject=Visiting%20Tulas%20International%20School">
          Talk to admissions <ArrowUpRight size={17} />
        </a>
        <a className="contact-section__phone" href="tel:+919458319102">Or call us on +91 94583 19102</a>
      </Reveal>
      <div className="contact-section__orbit" aria-hidden="true"><span>T</span></div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <a className="wordmark wordmark--footer" href="#top" aria-label="Tulas International School, back to top">
        <img className="wordmark__crest" src={schoolLogo} alt="" />
        <span className="wordmark__text"><span className="wordmark__name">Tulas</span><span className="wordmark__sub">International School</span></span>
      </a>
      <p className="site-footer__address">Chakrata Road, Dhoolkot<br />Dehradun, Uttarakhand 248011</p>
      <a className="site-footer__email" href="mailto:info@tis.edu.in">info@tis.edu.in <ArrowUpRight size={14} /></a>
      <p className="site-footer__copyright">© {new Date().getFullYear()} Tulas International School</p>
    </footer>
  )
}

export default function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('tis-theme') === 'dark')
  const progressRef = useRef(null)

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? 'dark' : 'light'
    localStorage.setItem('tis-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  useEffect(() => {
    let animationFrame = 0

    const updateProgress = () => {
      cancelAnimationFrame(animationFrame)
      animationFrame = requestAnimationFrame(() => {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
        const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0
        if (progressRef.current) progressRef.current.style.transform = `scaleX(${progress})`
      })
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  return (
    <>
      <div className="reading-progress" aria-hidden="true"><span ref={progressRef} /></div>
      <div className="site-shell">
        <Header darkMode={darkMode} onThemeToggle={() => setDarkMode((value) => !value)} />
        <main>
          <Hero />
          <OurSchool />
          <SchoolLife />
          <Difference />
          <Admissions />
        </main>
        <Footer />
      </div>
    </>
  )
}
