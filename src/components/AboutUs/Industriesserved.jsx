const industries = [
  'Logistics & Transportation',
  'Warehouses',
  'Subdivisions',
  'Offices & Malls',
]

export default function IndustriesServed() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-teal-500 text-xs font-bold uppercase tracking-widest mb-2">Our Portfolio</p>
        <h2 className="text-2xl font-extrabold text-gray-900 mb-1">
          What Industries We <span className="text-teal-500">Serve</span>
        </h2>
        <p className="text-gray-400 text-sm mb-10">The long history of our services and our clients</p>

        <div className="space-y-2">
          {industries.map((industry) => (
            <p key={industry} className="text-gray-800 font-bold text-3xl md:text-4xl leading-tight">
              {industry}
            </p>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 border-t border-gray-200" />
    </section>
  )
}