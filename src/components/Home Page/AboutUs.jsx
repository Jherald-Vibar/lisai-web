import guardPhoto from '../../assets/Guard-Element-Home.png'

const stats = [
  { value: '5,000', label: 'Successful Projects' },
  { value: '5,000', label: 'Guards on Duty' },
  { value: '5,000', label: 'Happy Customers' },
]

export default function AboutUs() {
  return (
    <section className="bg-white py-24 px-10 overflow-hidden">
      {/* Container aligned to pull content toward the center */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
        
        {/* Left Half: Content */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="max-w-md w-full">
            {/* ADJUSTMENT: 
                - Changed mb-7 to mb-2 to close the gap with the heading.
                - Added -mt-6 to pull the "About Us" label higher up.
            */}
            <p className="text-[17px] font-black uppercase tracking-[0.2em] text-[#1a202c] mb-2 -mt-6 -ml-5">
              About Us
            </p>
            
            <h2 className="text-5xl md:text-6xl font-[900] text-[#2d3748] leading-[1.1] mb-6 tracking-tight">
              Built on <span className="text-[#009688]">Integrity,</span><br />
              Bound by <span className="text-[#009688]">Trust.</span>
            </h2>
            
            <p className="text-[#4a5568] text-base mb-10 leading-relaxed opacity-90">
              Over four decades of unmatched dedication to safeguarding your lives and assets.
            </p>

            {/* Stats: Vertical dividers */}
            <div className="flex gap-8 mb-10">
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex gap-4 items-center">
                  <div className="flex flex-col">
                    <span className="text-[#009688] font-black text-2xl md:text-3xl leading-none">
                      {stat.value}
                    </span>
                    <span className="text-[#718096] text-[10px] font-bold uppercase tracking-wider mt-2 leading-tight w-20">
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
              href="#"
              className="inline-block bg-[#223a3d] hover:bg-[#1a202c] text-white text-[11px] font-black uppercase tracking-[0.2em] px-12 py-4 transition-all duration-300 shadow-md"
            >
              Read More
            </a>
          </div>
        </div>

        {/* Right Half: Guard Image */}
        <div className="flex-1 flex justify-center lg:justify-start ml-10">
          <div className="relative w-full aspect-square max-w-[500px] bg-[#009688] rounded-[2rem] flex items-end justify-center shadow-xl">
            <img
              src={guardPhoto}
              alt="Liberty Security Guard"
              className="h-[100%] w-auto object-contain object-bottom transform scale-100 drop-shadow-2xl ml-15 -mb-5"
            />
          </div>
        </div>
      </div>

      {/* Footer Branding Line */}
       <div className="max-w-7xl mx-auto mt-25 border-t-7 border-[#009688] opacity-40" />
    </section>
  )
}