const milestones = [
  {
    year: '1982',
    title: 'The Beginning',
    description:
      'Francisco C. Palacio and Dr. Celesdenia Palacio established Magilas Security Agency, marking the start of our legacy.',
  },
  {
    year: '1986',
    title: 'Transformation',
    description:
      'Rebranded to Liberty Investigation & Security Agency Inc., expanding our services and vision.',
  },
  {
    year: '2000s',
    title: 'Expansion Era',
    description:
      'Major growth across Metro Manila, incorporating modern technologies and advanced training programs.',
  },
  {
    year: '2025',
    title: 'Industry Leader',
    description:
      'Serving 5,000+ clients with a team of highly trained professionals across the Philippines.',
  },
]

export default function OurJourney() {
  return (
    <section className="py-16 px-6" style={{ background: 'linear-gradient(180deg, #f0fdfb 0%, #e6f7f5 100%)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-teal-500 text-sm font-semibold uppercase tracking-widest mb-2">Our Journey</p>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Four Decades of <span className="text-teal-500">Excellence</span>
          </h2>
          <p className="text-gray-500 text-sm mt-3">
            Key milestones that shaped Liberty into the industry leader it is today
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((m) => (
            <div key={m.year} className="bg-white rounded-2xl p-6 shadow-sm border border-teal-100">
              <p className="text-teal-500 font-extrabold text-2xl mb-1">{m.year}</p>
              <p className="font-bold text-gray-800 text-sm mb-2">{m.title}</p>
              <p className="text-gray-500 text-xs leading-relaxed">{m.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}