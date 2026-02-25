import { Link } from 'react-router-dom'
import logo from '../../assets/lisai-logo.png'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Jobs / Training', path: '/jobs' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'Security Gazette', path: '/gazette' },
]

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="LISAI Logo" className="h-14 w-auto" />
          <div className="leading-tight">
            <p className="text-white font-bold text-sm">Liberty Investigation</p>
            <p className="text-white font-bold text-sm">& Security Agency Inc.</p>
          </div>
        </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.path}
                className="text-white text-sm font-medium hover:text-teal-300 transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}