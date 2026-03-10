import { useNavigate } from 'react-router-dom'
import { useLang } from '../../i18n/useLang'

export default function ServicesHero() {
  const navigate = useNavigate()
  const { t } = useLang()

  return (
    <section
      className="relative w-full min-h-[650px] flex items-center overflow-hidden"
      style={{ backgroundColor: '#0B2E2A' }}
    >
      <div className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(170deg, #0B2E2A 0%, #0f766e 50%, #0B2E2A 100%)' }} />
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: '200px 200px',
        }} />
      <div className="absolute right-0 bottom-0 z-0 pointer-events-none select-none"
        style={{ transform: 'translate(25%, 20%)', opacity: 0.06 }}>
        <svg width="600" height="680" viewBox="0 0 24 28" fill="none">
          <path d="M12 2L3 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6L12 2z" fill="#3DD5C6" />
        </svg>
      </div>
      <div className="absolute inset-0 z-0 pointer-events-none"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(61,213,198,0.015) 3px, rgba(61,213,198,0.015) 4px)' }} />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 pt-32 pb-20">
        <p className="text-[#3DD5C6] text-xs font-bold uppercase tracking-[0.25em] mb-5">
          {t('services.hero.label')}
        </p>
        <h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.05] uppercase tracking-tight mb-6">
          {t('services.hero.title')}<br />
          <span style={{ color: '#3DD5C6' }}>{t('services.hero.highlight')}</span>
        </h1>
        <p className="text-white/75 text-sm max-w-md leading-relaxed mb-8">
          {t('services.hero.subtitle')}
        </p>
        <div className="flex flex-row flex-wrap gap-3">
          <button
            onClick={() => navigate('/contact#contact-info')}
            className="bg-transparent hover:bg-white/10 text-white border-2 border-white/40 hover:border-white/70 text-xs font-bold px-8 py-3 uppercase tracking-widest transition-all duration-200"
          >
            {t('services.hero.contact')}
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10"
        style={{ height: '2px', background: 'linear-gradient(to right, #0f766e, #3DD5C6, transparent)' }} />
    </section>
  )
}
