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
      'Major growth across Metro Manila, incorporating cutting-edge technology and advanced training programs.',
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
    <section
      className="py-1 px-6"
      style={{
        background: 'linear-gradient(180deg, #ffffff 0%, #b2ede6 40%, #7dd8cf 70%, #b2ede6 100%)',
      }}
    >
      <div className="max-w-5xl mx-auto ">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-teal-600 text-3xl font-semibold mb-7">Our Journey</p>
          <h2 className="text-5xl font-bold text-teal-900 mb-4">
            Four Decades of Excellence
          </h2>
          <p className="text-gray-600 text-base">
            Key milestones that shaped Liberty into the industry leader it is today
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          
          {/* Cards */}
          <div className="grid grid-cols-4 gap-6 relative z-10">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex flex-col items-center">
                {/* Dot on the line */}
                <div className="w-3 h-3 rounded-full bg-teal-500 border-2 border-white shadow mb-4" />
                {/* Card */}
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 w-full">
                  <p className="text-teal-500 font-extrabold text-2xl mb-1">{m.year}</p>
                  <p className="font-semibold text-gray-800 text-sm mb-2">{m.title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-7xl mx-auto mt-40 border-t-5 border-[gray] opacity-50" />
        </div>
      </div>
    </section>
    
  )
}