import { useNavigate } from 'react-router-dom'

export default function JobsHero() {
  const navigate = useNavigate()

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: '#0B2E2A' }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(160deg, #0B2E2A 0%, #0c3a36 50%, #0B2E2A 100%)' }}
      />
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: '200px 200px',
        }}
      />
      <div
        className="absolute right-0 top-0 z-0 pointer-events-none select-none"
        style={{ transform: 'translate(18%, 8%)', opacity: 0.07 }}
      >
        <svg width="520" height="580" viewBox="0 0 24 28" fill="none">
          <path d="M12 2L3 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6L12 2z" fill="#3DD5C6" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 pt-32 pb-12">
        <p className="text-[#3DD5C6] text-xs font-bold uppercase tracking-[0.25em] mb-5">
          Jobs · Training
        </p>

        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 mb-6"
          style={{ background: 'rgba(61,213,198,0.1)', border: '1px solid rgba(61,213,198,0.3)' }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" style={{ color: '#3DD5C6' }}>
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
          </svg>
          <span className="text-[#3DD5C6] text-xs font-bold uppercase tracking-widest">Positions Open</span>
        </div>

        <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] uppercase tracking-tight mb-2">
          Wanted:
        </h1>
        <h2
          className="font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] uppercase tracking-tight mb-6"
          style={{ color: '#3DD5C6' }}
        >
          Security Guards
        </h2>

        <p className="text-white/75 text-sm max-w-md leading-relaxed mb-8">
          Are you interested in a rewarding career as a security guard? Join our exceptional team
          and take the first step towards a fulfilling profession.
        </p>

        <div className="flex flex-row flex-wrap gap-3">
          <button
            onClick={() => navigate('/apply/General%20Application')}
            className="bg-[#0f766e] hover:bg-[#0d6460] text-white text-xs font-bold px-8 py-3 uppercase tracking-widest transition-colors duration-200"
          >
            Apply Now
          </button>
          <button
            onClick={() => navigate('/contact#contact-info')}
            className="bg-transparent hover:bg-white/10 text-white border-2 border-white/40 hover:border-white/70 text-xs font-bold px-8 py-3 uppercase tracking-widest transition-all duration-200"
          >
            Contact Us
          </button>
        </div>
      </div>

      <div className="relative z-10 py-5 px-6 mt-6" style={{ backgroundColor: '#0f766e' }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            { value: '600+',      label: 'Guards Deployed' },
            { value: '40+',       label: 'Years in Industry' },
            { value: 'SOSIA',     label: 'Accredited Training' },
            { value: 'Full-Time', label: 'Positions Available' },
          ].map((stat) => (
            <div key={stat.label} className="py-2 sm:py-0">
              <p className="text-white font-bold text-base sm:text-lg leading-tight">{stat.value}</p>
              <p className="text-[#a7f3d0] text-xs uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}