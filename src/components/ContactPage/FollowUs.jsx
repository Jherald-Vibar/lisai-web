import { useLang } from '../../i18n/useLang'

const socials = [
  {
    name: 'Facebook', handle: '@lisai',
    url: 'https://www.facebook.com/lisai86', color: '#1877F2',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram', handle: '@lisai.official',
    url: 'https://www.instagram.com/lisai.official', color: '#E1306C',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    name: 'TikTok', handle: '@libertysecurityph',
    url: 'https://www.tiktok.com/@libertysecurityph', color: '#010101',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn', handle: 'LISAI PH',
    url: 'https://www.linkedin.com/in/lisai-ph/?originalSubdomain=ph', color: '#0A66C2',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="white">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
]

export default function FollowUs() {
  const { t } = useLang()

  return (
    <section className="w-full py-16 sm:py-20 px-4 sm:px-6"
      style={{ background: 'linear-gradient(135deg, #0B2E2A 0%, #0f766e 55%, rgba(61,213,198,0.15) 100%)' }}>
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[#3DD5C6] text-xs font-bold uppercase tracking-[0.25em] mb-4">
          {t('contact.social.label')}
        </p>
        <h2 className="text-white font-extrabold text-3xl sm:text-4xl uppercase tracking-tight mb-3">
          {t('contact.social.title')} <span style={{ color: '#3DD5C6' }}>{t('contact.social.highlight')}</span>
        </h2>
        <p className="text-white/70 text-sm mb-10 max-w-sm mx-auto leading-relaxed">
          {t('contact.social.subtitle')}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {socials.map((s) => (
            <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 py-5 px-3 cursor-pointer no-underline"
              style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(61,213,198,0.15)', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(61,213,198,0.12)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <div className="w-11 h-11 flex items-center justify-center shadow-lg"
                style={{ backgroundColor: s.color, borderRadius: '8px' }}>
                {s.icon}
              </div>
              <p className="text-white font-semibold text-sm">{s.name}</p>
              <p className="text-white/50 text-xs">{s.handle}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
