import captPalacio from '../../assets/Capt-Palacio.png'

export default function TheStory() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left */}
        <div className="flex-1">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">The "Story"</p>
          <h2 className="text-2xl font-extrabold text-gray-900 leading-snug mb-6">
            From Humble Beginnings to<br />Industry Leadership
          </h2>
          <div className="w-full max-w-xs">
            <img
              src={captPalacio}
              alt="Capt. Francisco C. Palacio"
              className="w-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex-1 text-gray-600 text-sm leading-relaxed space-y-4">
          <p>
            In 1982, our founder, Francisco C. Palacio, and his wife, Dr. Celesdenia Palacio, MD, embarked on a journey in the security industry by establishing the Magilas Security Agency. Driven by a vision to provide unparalleled protection services, they laid the foundation for what would become one of the Philippines' most trusted security firms.
          </p>
          <p>
            "From Magilas to Liberty – a transformation that marked our commitment to excellence and innovation in security services." Four years later, in 1986, the company underwent a strategic transformation and became Liberty Investigation & Security Agency Inc. This rebranding signified more than a name change — it represented our evolving commitment to comprehensive security solutions and investigative services.
          </p>
          <p>
            Throughout the years, Liberty has experienced remarkable growth, establishing itself as a respected and trusted security firm in the region. This success is a testament to the unwavering dedication of our highly skilled team who tirelessly ensure the safety and well-being of our valued clients.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto mt-16 border-t border-teal-200" />
    </section>
  )
}