import logo from '../../assets/lisai-logo.png'

export default function AboutHero() {
  return (
    <section
      className="relative w-full min-h-[600px] flex items-center overflow-hidden"
      style={{ backgroundColor: '#050A14' }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 140% 80% at 50% 85%, #3DD5C6 0%, #1a7a70 22%, #0a3d3a 42%, #050A14 65%)',
        }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 pt-28 pb-16 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left: Text */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
            Built on Integrity,<br />Bound by Trust.
          </h1>
          <p className="text-white/70 text-sm max-w-xs leading-relaxed mx-auto lg:mx-0">
            Over 40 years of protecting lives and assets across Metro Manila. Highly trained professionals delivering world-class security services.
          </p>
        </div>

        {/* Right: Logo card */}
        <div className="flex-shrink-0">
          <div
            className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-2xl flex items-center justify-center"
            style={{
              background: 'rgba(255,255,255,0.07)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.12)',
            }}
          >
            <img src={logo} alt="LISAI Logo" className="w-36 h-36 sm:w-44 sm:h-44 lg:w-52 lg:h-52 object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}
