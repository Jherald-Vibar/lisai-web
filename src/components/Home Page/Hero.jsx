import heroBg from '../../assets/Hero-BG-LISAI-Guard.png'

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
    >
      {/* Aqua Shade Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 via-teal-70/50 to-transparent z-0 max-w-[75%]" />

      <div className="relative z-10 max-w-7xl mx-auto px-3 w-full flex justify-start">
        {/* ADJUSTMENT HERE: 
            Added 'md:ml-20' or 'lg:ml-32' to push the text toward the middle.
            Using 'max-w-3xl' allows the text to breathe more.
        */}
        <div className="max-w-3xl md:ml-16 lg:ml-24 transition-all duration-500">
          <h1 className="text-white font-black text-5xl md:text-6xl leading-[0.95] mb-6 uppercase tracking-tight">
            Securing Trust<br />
            For Over Four<br />
            Decades
          </h1>
          
          <p className="text-white/95 text-lg font-medium mb-10 max-w-md leading-snug">
            Pioneers in the Philippine security industry since 1982. 
            We provide proven, reliable protection.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-[#1591a3] hover:bg-[#0d7a8a] text-white text-sm font-bold px-8 py-3.5 uppercase tracking-widest transition-all">
              Get A Quote
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white border-2 border-[#1591a3] text-sm font-bold px-8 py-3.5 uppercase tracking-widest transition-all">
              Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}