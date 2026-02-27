export default function JobsHero() {
  return (
    <section style={{ backgroundColor: '#111827' }} className="text-white overflow-hidden">
      <div style={{ paddingTop: '140px', paddingBottom: '64px' }} className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-gray-400 text-sm mb-4 italic">— Jobs / Training</p>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight mb-2 text-white">
          Wanted:
        </h1>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase text-teal-400 tracking-tight mb-6">
          Security Guards
        </h2>
        <p className="text-gray-300 text-sm max-w-md mx-auto mb-8">
          Are you interested in a rewarding career as a security guard? Join our exceptional team
          and take the first step towards a fulfilling profession.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-teal-500 hover:bg-teal-600 text-white text-sm font-semibold px-6 py-2.5 rounded transition">
            Get a free quote
          </button>
          <button className="border border-white text-white text-sm font-semibold px-6 py-2.5 rounded hover:bg-white hover:text-gray-900 transition">
            Contact us
          </button>
        </div>
      </div>

      {/* Stats bar — 2 cols on mobile, 4 on desktop */}
      <div style={{ backgroundColor: '#0f766e' }} className="py-5 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            { value: '5,000+', label: 'Guards Deployed' },
            { value: '40+', label: 'Years in the Industry' },
            { value: 'SOSIA', label: 'Accredited Training' },
            { value: 'Full-Time', label: 'Positions Available' },
          ].map((stat) => (
            <div key={stat.label} className="py-2 sm:py-0">
              <p className="text-white font-bold text-base sm:text-lg leading-tight">{stat.value}</p>
              <p className="text-teal-200 text-xs uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
