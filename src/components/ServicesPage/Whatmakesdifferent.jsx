export default function WhatMakesDifferent() {
  return (
    <section 
      className="relative py-24 px-6 overflow-hidden"
      /* Applying the specific brand gradient */
      style={{ background: 'linear-gradient(180deg, #50bdb2 35%, #50bdb2 35%, #d9dddd 200%)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center relative z-10">
        
        {/* Left Section: High-impact typography */}
        <div className="flex-1">
          <p className="text-white/80 text-lg font-medium mb-2 uppercase tracking-wider">
            Why Choose LISAI
          </p>
          <h2 className="text-white font-[500] text-5xl md:text-6xl leading-[1.1] mb-6 tracking-tight">
            What Makes Our<br />Service Different
          </h2>
          <p className="text-white/70 text-lg leading-relaxed max-w-md font-light">
            We don't just post a guard and walk away. Every engagement is backed by structured training, 
            proper supervision, and a commitment to your long-term safety.
          </p>
        </div>

        {/* Right Section: Stats with vertical separation */}
        <div className="flex-shrink-0 flex flex-col sm:flex-row lg:flex-col gap-12 text-center items-center">
          <div className="flex flex-col items-center">
            <p className="text-6xl text-Black leading-none">40+</p>
            <p className="text-white/70 text-sm font-bold uppercase tracking-widest mt-3">
              Years of Proven Experience
            </p>
          </div>

          {/* Horizontal divider for mobile / Vertical-ish gap for desktop */}
          <div className="hidden lg:block w-16 h-[2px] bg-white/20" />

          <div className="flex flex-col items-center">
            <p className="text-5xl text-Black leading-none">SOSIA</p>
            <p className="text-white/70 text-sm font-bold uppercase tracking-widest mt-3">
              Licensed & Accredited
            </p>
          </div>
        </div>
      </div>

      {/* Branded Horizontal Line */}
      <div className="max-w-6xl mx-auto mt-20 border-t-[1.5px] border-black/5 opacity-10" />
    </section>
  )
}