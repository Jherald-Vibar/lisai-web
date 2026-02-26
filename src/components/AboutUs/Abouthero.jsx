import logo from '../../assets/lisai-logo.png'

export default function AboutHero() {
  return (
    <section
      className="relative w-full min-h-[700px] flex items-center overflow-hidden"
      style={{ backgroundColor: '#050A14' }}
    >
      {/* Hill-shaped teal glow from bottom center */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 140% 80% at 50% 85%, #3DD5C6 0%, #1a7a70 22%, #0a3d3a 42%, #050A14 65%)',
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-16 pt-32 pb-20 flex flex-row items-center justify-between gap-16">
        {/* Left: Text */}
        <div className="flex-1">
          <h1 className="text-white font-extrabold text-6xl leading-tight mb-6">
            Built on Integrity,<br />Bound by Trust.
          </h1>
          <p className="text-white/70 text-sm max-w-xs leading-relaxed">
            Over 40 years of protecting lives and assets across Metro Manila. Highly trained professionals delivering world-class security services.
          </p>
        </div>

        {/* Right: Logo card */}
        <div className="flex-shrink-0">
          <div
            className="w-64 h-64 rounded-2xl flex items-center justify-center"
            style={{
              background: 'rgba(255,255,255,0.07)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.12)',
            }}
          >
            <img src={logo} alt="LISAI Logo" className="w-52 h-52 object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}