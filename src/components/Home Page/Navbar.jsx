import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { useLang } from '../../i18n/useLang'
import logo from '../../assets/lisai-logo.png'

const navLinks = [
  { labelKey: 'nav.home', path: '/' },
  { labelKey: 'nav.about', path: '/about' },
  { labelKey: 'nav.services', path: '/services' },
  { labelKey: 'nav.jobs', path: '/jobs' },
  { labelKey: 'nav.contact', path: '/contact' },
]

function PhFlag() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" width="24" height="16">
      {/* Blue top stripe */}
      <rect width="900" height="300" fill="#0038A8"/>
      {/* Red bottom stripe */}
      <rect y="300" width="900" height="300" fill="#CE1126"/>
      {/* White equilateral triangle on left */}
      <polygon points="0,0 0,600 450,300" fill="#FFFFFF"/>
      {/* Golden sun */}
      <circle cx="150" cy="300" r="50" fill="#FCD116"/>
      <circle cx="150" cy="300" r="20" fill="#FFFFFF"/>
      {/* 8 sun rays */}
      <g fill="#FCD116">
        <rect x="145" y="230" width="10" height="35" transform="rotate(0 150 300)"/>
        <rect x="145" y="230" width="10" height="35" transform="rotate(45 150 300)"/>
        <rect x="145" y="230" width="10" height="35" transform="rotate(90 150 300)"/>
        <rect x="145" y="230" width="10" height="35" transform="rotate(135 150 300)"/>
        <rect x="145" y="230" width="10" height="35" transform="rotate(180 150 300)"/>
        <rect x="145" y="230" width="10" height="35" transform="rotate(225 150 300)"/>
        <rect x="145" y="230" width="10" height="35" transform="rotate(270 150 300)"/>
        <rect x="145" y="230" width="10" height="35" transform="rotate(315 150 300)"/>
      </g>
      {/* 3 gold stars */}
      {/* Top star */}
      <polygon points="150,80 155,95 171,95 159,104 163,119 150,110 137,119 141,104 129,95 145,95" fill="#FCD116"/>
      {/* Bottom-left star */}
      <polygon points="60,468 65,483 81,483 69,492 73,507 60,498 47,507 51,492 39,483 55,483" fill="#FCD116"/>
      {/* Bottom-right star */}
      <polygon points="240,468 245,483 261,483 249,492 253,507 240,498 227,507 231,492 219,483 235,483" fill="#FCD116"/>
    </svg>
  )
}

function CnFlag() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" width="24" height="16">
      <rect width="900" height="600" fill="#DE2910"/>
      {/* Large star */}
      <polygon points="150,75 173,144 246,144 188,185 211,254 150,213 89,254 112,185 54,144 127,144" fill="#FFDE00"/>
      {/* 4 small stars */}
      <polygon points="300,30 308,55 334,55 313,70 321,95 300,80 279,95 287,70 266,55 292,55" fill="#FFDE00"/>
      <polygon points="360,90 368,115 394,115 373,130 381,155 360,140 339,155 347,130 326,115 352,115" fill="#FFDE00"/>
      <polygon points="360,180 368,205 394,205 373,220 381,245 360,230 339,245 347,220 326,205 352,205" fill="#FFDE00"/>
      <polygon points="300,240 308,265 334,265 313,280 321,305 300,290 279,305 287,280 266,265 292,265" fill="#FFDE00"/>
    </svg>
  )
}

function LangToggle({ lang, setLang }) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLang('en')}
        title="English"
        style={{
          opacity: lang === 'en' ? 1 : 0.35,
          transition: 'opacity 0.2s',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '2px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <PhFlag />
      </button>
      <button
        onClick={() => setLang('zh')}
        title="中文"
        style={{
          opacity: lang === 'zh' ? 1 : 0.35,
          transition: 'opacity 0.2s',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '2px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <CnFlag />
      </button>
    </div>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const [visible, setVisible] = useState(true)
  const [atTop, setAtTop] = useState(true)
  const lastScrollY = useRef(0)
  const { t, lang, setLang } = useLang()

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setAtTop(currentY < 10)
      setVisible(currentY < lastScrollY.current || currentY < 10)
      lastScrollY.current = currentY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  return (
    <>
      {/* DESKTOP */}
      <nav className="hidden lg:block absolute top-0 w-full z-50 bg-transparent">
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="LISAI Logo" className="h-10 w-auto" />
            <div className="leading-tight">
              <p className="text-white font-bold text-sm">Liberty Investigation</p>
              <p className="text-white font-bold text-sm">& Security Agency Inc.</p>
            </div>
          </Link>

          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-200 relative pb-1 ${
                    isActive(link.path) ? 'text-[#3DD5C6]' : 'text-white hover:text-teal-300'
                  }`}
                >
                  {t(link.labelKey)}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full" style={{ backgroundColor: '#3DD5C6' }} />
                  )}
                </Link>
              </li>
            ))}
            <li>
              <LangToggle lang={lang} setLang={setLang} />
            </li>
          </ul>
        </div>
      </nav>

      {/* MOBILE */}
      <nav
        className="lg:hidden fixed top-0 w-full z-50 transition-transform duration-300"
        style={{
          transform: visible ? 'translateY(0)' : 'translateY(-100%)',
          backgroundColor: atTop && !menuOpen ? 'transparent' : 'rgba(10, 32, 29, 0.97)',
          backdropFilter: atTop && !menuOpen ? 'none' : 'blur(8px)',
        }}
      >
        <div className="px-6 py-5 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="LISAI Logo" className="h-9 w-auto" />
            <div className="leading-tight">
              <p className="text-white font-bold text-sm">Liberty Investigation</p>
              <p className="text-white font-bold text-sm">& Security Agency Inc.</p>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <LangToggle lang={lang} setLang={setLang} />
            <button
              className="text-white focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div style={{ backgroundColor: 'rgba(10, 32, 29, 0.97)' }} className="px-6 pb-6">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={`text-sm font-medium transition-colors duration-200 block py-2 border-b border-white/10 ${
                      isActive(link.path) ? 'text-[#3DD5C6]' : 'text-white hover:text-teal-300'
                    }`}
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  )
}