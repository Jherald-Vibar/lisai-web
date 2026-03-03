import { useNavigate } from 'react-router-dom';
import heroBg from '../../assets/Hero-BG-LISAI-Guard.png'


export default function Hero() {
 const navigate = useNavigate()

  return (
    <section
      className="relative w-full h-screen min-h-[600px] flex items-end lg:items-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: '70% center',
      }}
    >
      {/* Desktop overlay — directional left to right */}
      <div
        className="absolute inset-0 z-0 hidden lg:block"
        style={{
          background: 'linear-gradient(to right, rgba(11,46,42,0.97) 0%, rgba(11,46,42,0.78) 50%, rgba(11,46,42,0.25) 100%)',
        }}
      />

      {/* Mobile overlay — strong at bottom, fades upward so guard shows */}
      <div
        className="absolute inset-0 z-0 lg:hidden"
        style={{
          background: 'linear-gradient(to top, rgba(11,46,42,0.97) 0%, rgba(11,46,42,0.85) 45%, rgba(11,46,42,0.2) 75%, rgba(11,46,42,0.0) 100%)',
        }}
      />

      {/* Noise grain */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: '200px 200px',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 flex justify-start pb-14 lg:pb-0">
        <div className="w-full max-w-xl lg:ml-16">

          {/* Eyebrow */}
          <p className="text-[#3DD5C6] text-xs font-bold uppercase tracking-[0.25em] mb-5">
            Est. 1982 · Philippine Security
          </p>

          <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-5 uppercase tracking-tight">
            Securing Trust<br />
            For Over Four<br />
            Decades
          </h1>

          <p className="text-white/75 text-sm sm:text-base font-medium mb-8 max-w-md leading-relaxed">
            Pioneers in the Philippine security industry since 1982.
            We provide proven, reliable protection for businesses and individuals alike.
          </p>

          <div className="flex flex-row gap-3">
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
      </div>
    </section>
  )
}