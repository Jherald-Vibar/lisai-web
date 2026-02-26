import captPalacio from '../../assets/Capt-Palacio.png'

const stats = [
  { value: '5,000', label: 'Successful Projects' },
  { value: '5,000', label: 'Guards on Duty' },
  { value: '5,000', label: 'Happy Customers' },
]

export default function TheStory() {
  return (
    <section className="bg-white py-24 px-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Title + Image */}
          <div>
            <p className="text-[17px] font-black uppercase tracking-[0.2em] text-[#1a202c] mb-2 -mt-2">
              The Story
            </p>
            <h2 className="text-4xl md:text-5xl font-[900] text-[#2d3748] leading-[1.1] mb-8 tracking-tight">
              From Humble Beginnings<br />
              to Industry Leadership
            </h2>
            <img
              src={captPalacio}
              alt="Capt. Francisco C. Palacio"
              className="w-full object-contain drop-shadow-xl"
            />
          </div>

          {/* Right: Paragraphs */}
          <div className="text-sm leading-relaxed space-y-6 lg:pt-16">
            {/* Horizontal accent line specifically above description */}
            <div className="w-full h-[4px] bg-[#009688] opacity-40 mb-8" />
            
            <p className="text-[#2d3748] font-bold text-base leading-relaxed">
              In 1982, our founder, Francisco C. Palacio, and his wife, Dr. Celesdenia Palacio, MD, embarked on a journey in the security industry by establishing the Magilas Security Agency. 
            </p>
            <p className="text-[#4a5568] opacity-90">
              "From Magilas to Liberty – a transformation that marked our commitment to excellence and innovation in security services." Four years later, in 1986, the company underwent a strategic transformation and became Liberty Investigation & Security Agency Inc.
            </p>
            <p className="text-[#4a5568] opacity-90">
              Throughout the years, Liberty has experienced remarkable growth, establishing itself as a respected and trusted security firm in the region. This success is a testament to the unwavering dedication of our highly skilled team.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        {/* STANDALONE LINE: Replaces container border for a clean standalone look */}
        <div className="w-full mt-22 mb-12 border-t-[4px] border-[#009688] opacity-50" />

        <div className="pt-0">
          <div className="flex flex-col sm:flex-row justify-center items-center">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center">
                <div className="flex flex-col items-center py-6 sm:py-0 sm:px-16">
                  <span className="text-[#009688] font-black text-4xl md:text-5xl leading-none">
                    {stat.value}
                  </span>
                  <span className="text-[#Black] text-[13px] font-bold uppercase tracking-wider mt-3">
                    {stat.label}
                  </span>
                </div>

                {/* Dark, thick vertical divider based on design reference */}
                {i < stats.length - 1 && (
                  <div className="hidden sm:block h-20 w-[6px] bg-[#718096] mx-4 opacity-100" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}