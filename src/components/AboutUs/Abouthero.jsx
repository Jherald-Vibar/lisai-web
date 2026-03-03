import { useNavigate } from 'react-router-dom';
import logo from '../../assets/lisai-logo.png'

export default function AboutHero() {
  const navigate = useNavigate()
  return (
    <section
      className="relative w-full min-h-[650px] flex items-center overflow-hidden"
      style={{ backgroundColor: '#0B2E2A' }}
    >
      {/* Radial glow from bottom center */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 130% 70% at 50% 90%, #3DD5C6 0%, #0f766e 20%, #0B2E2A 60%)',
        }}
      />

      {/* Subtle noise grain */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: '200px 200px',
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 pt-32 pb-20 flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* Left: Text */}
        <div className="flex-1 text-center lg:text-left">

          {/* Eyebrow */}
          <p className="text-[#3DD5C6] text-xs font-bold uppercase tracking-[0.25em] mb-5">
            Our Story
          </p>

          <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] uppercase tracking-tight mb-6">
            Built on Integrity,<br />
            <span style={{ color: '#3DD5C6' }}>Bound by Trust.</span>
          </h1>

          <p className="text-white/75 text-sm max-w-sm leading-relaxed mx-auto lg:mx-0 mb-8">
            Over 40 years of protecting lives and assets across Metro Manila. Highly trained professionals delivering world-class security services.
          </p>

          <div className="flex flex-row flex-wrap gap-3 justify-center lg:justify-start">
            <button
            onClick={() => navigate('/services')} 
              className="bg-[#0f766e] hover:bg-[#0d6460] text-white text-xs font-bold px-8 py-3 uppercase tracking-widest transition-colors duration-200 scroll-mt-[150px]"
              >
              Get A Quote
            </button>
          <button
              onClick={() => navigate('/contact#contact-info')} 
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white/40 hover:border-white/70 text-xs font-bold px-8 py-3 uppercase tracking-widest transition-all duration-200 scroll-mt-[150px]"
            >
              Contact Us
          </button>
          </div>
        </div>

        {/* Right: Logo card */}
        <div className="flex-shrink-0">
          <div
            className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 flex items-center justify-center"
            style={{
              background: 'rgba(255,255,255,0.06)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(61,213,198,0.2)',
            }}
          >
            <img
              src={logo}
              alt="LISAI Logo"
              className="w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
