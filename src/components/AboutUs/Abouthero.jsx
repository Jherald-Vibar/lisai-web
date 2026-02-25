import logo from '../../assets/lisai-logo.png'

export default function AboutHero() {
  return (
    <section
      className="relative w-full min-h-[340px] flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f2027 0%, #1a3a3a 60%, #0d3333 100%)',
      }}
    >
      {/* Teal glow */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(ellipse at 80% 50%, #2dd4bf 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16 w-full flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text */}
        <div className="flex-1">
          <h1 className="text-white font-extrabold text-5xl leading-tight mb-4">
            Built on Integrity,<br />Bound by Trust.
          </h1>
          <p className="text-white/70 text-sm max-w-sm">
            Over 40 years of protecting lives and assets across Metro Manila. Highly trained professionals delivering world-class security services.
          </p>
        </div>

        {/* Logo card */}
        <div className="flex-shrink-0">
          <div className="w-48 h-48 rounded-2xl bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center">
            <img src={logo} alt="LISAI Logo" className="w-36 h-36 object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}