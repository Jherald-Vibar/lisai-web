import logo from '../../assets/lisai-logo.png'

const navLinks = ['Home', 'About Us', 'Services', 'Jobs / Training', 'Contact Us', 'Security Gazette']

export default function Navbar() {
  return (
    <nav className="absolute top-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-20 py-5 flex items-center justify-between">
        
        {/* Logo Section 
            -ml-5 pulls the shield to the left so the text 'LIBERTY' 
            aligns with the Hero title below it.
        */}
        <div className="flex items-center gap-3 -ml-0 transition-all duration-300"> 
          <img src={logo} alt="LISAI Logo" className="h-14 w-auto object-contain" />
          <div className="leading-[1.1]">
            <h1 className="text-white font-black text-sm uppercase tracking-tight">
              Liberty Investigation
            </h1>
            <p className="text-white font-bold text-[11px] uppercase opacity-90">
              & Security Agency Inc.
            </p>
          </div>
        </div>

        {/* Nav Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-white text-[13px] font-bold uppercase tracking-wider hover:text-teal-400 transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}