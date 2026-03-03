import guardPhoto from '../../assets/Guard-Element-Home.png'

const stats = [
  { value: '146', label: 'Active Clients' },
  { value: '300+', label: 'Former Clients' },
  { value: '600+', label: 'Security Officers' },
]

export default function AboutUs() {
  return (
    <section className="bg-white py-16 sm:py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* Left: Content */}
        <div className="flex-1 w-full text-center lg:text-left">
          <p className="text-[15px] font-black uppercase tracking-[0.2em] text-[#1a202c] mb-2">
            About Us
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-[900] text-[#2d3748] leading-[1.1] mb-6 tracking-tight">
            Built on <span className="text-[#009688]">Integrity,</span><br />
            Bound by <span className="text-[#009688]">Trust.</span>
          </h2>

          <p className="text-[#4a5568] text-base mb-8 leading-relaxed opacity-90 max-w-md mx-auto lg:mx-0">
            Over four decades of unmatched dedication to safeguarding your lives and assets.
          </p>

          {/* Stats */}
          <div className="flex justify-center lg:justify-start gap-6 sm:gap-8 mb-10 flex-wrap">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex gap-6 sm:gap-8 items-center">
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-[#009688] font-black text-2xl sm:text-3xl leading-none">
                    {stat.value}
                  </span>
                  <span className="text-[#718096] text-[10px] font-bold uppercase tracking-wider mt-2 leading-tight w-20 text-center lg:text-left">
                    {stat.label}
                  </span>
                </div>
                {i < stats.length - 1 && (
                  <div className="h-10 w-[1.5px] bg-[#009688] opacity-20" />
                )}
              </div>
            ))}
          </div>

          <a
            href="services"
            className="inline-block bg-[#223a3d] hover:bg-[#1a202c] text-white text-[11px] font-black uppercase tracking-[0.2em] px-10 py-4 transition-all duration-300 shadow-md"
          >
            Read More
          </a>
        </div>

        {/* Right: Guard Image */}
        <div className="flex-1 flex justify-center w-full">
          <div className="relative w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[500px] aspect-square bg-[#009688] rounded-[2rem] flex items-end justify-center shadow-xl overflow-hidden">
            <img
              src={guardPhoto}
              alt="Liberty Security Guard"
              className="h-[100%] w-auto object-contain object-bottom drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 border-t-2 border-[#009688] opacity-40" />
    </section>
  )
}