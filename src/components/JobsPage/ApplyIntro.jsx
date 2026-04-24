import { useParams, useNavigate, useSearchParams } from 'react-router-dom'
import { useLang } from '../../i18n/useLang'

export default function ApplyIntro() {
const { position } = useParams()
const navigate = useNavigate()
const [searchParams] = useSearchParams()
const { t } = useLang()
const decoded = decodeURIComponent(position)
const posType = searchParams.get('type') ?? 'guard'

  const expects = ['e1','e2','e3','e4'].map(k => t(`apply.intro.${k}`))

  return (
    <div className="relative min-h-screen flex flex-col px-6 py-10" style={{ backgroundColor: '#0B2E2A' }}>
      <div className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: 'linear-gradient(160deg, #0B2E2A 0%, #0f766e 55%, #0B2E2A 100%)' }} />
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: '200px 200px',
        }} />

      <div className="relative z-10">
        <button onClick={() => navigate('/jobs')}
          className="flex items-center gap-2 text-white/60 hover:text-white text-xs uppercase tracking-widest font-bold transition-colors">
          <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
            <path d="M19 12H5M12 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {t('apply.intro.exit')}
        </button>
      </div>

      <div className="relative z-10 flex-1 flex items-center justify-center">
        <div className="max-w-lg w-full text-center">
          <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center"
            style={{ background: 'rgba(61,213,198,0.1)', border: '1px solid rgba(61,213,198,0.3)' }}>
            <svg viewBox="0 0 24 24" fill="none" className="w-9 h-9" style={{ color: '#3DD5C6' }}>
              <path d="M12 2L3 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <p className="text-[#3DD5C6] text-xs font-bold uppercase tracking-[0.25em] mb-4">
            {t('apply.intro.label')}
          </p>
          <h1 className="text-white font-extrabold text-3xl sm:text-4xl uppercase tracking-tight leading-tight mb-3">
            {t('apply.intro.applying')}
          </h1>
          <h2 className="font-extrabold text-3xl sm:text-4xl uppercase tracking-tight leading-tight mb-8"
            style={{ color: '#3DD5C6' }}>
            {decoded}
          </h2>

          <div className="text-left mb-10 p-6 space-y-4"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(61,213,198,0.15)' }}>
            <p className="text-white/50 text-xs uppercase tracking-widest mb-4">{t('apply.intro.expectLabel')}</p>
            {expects.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center mt-0.5"
                  style={{ background: 'rgba(61,213,198,0.15)', color: '#3DD5C6' }}>
                  <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-white/75 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => navigate(`/apply/${encodeURIComponent(decoded)}/form?type=${posType}`)}
            className="w-full bg-[#0f766e] hover:bg-[#0d6460] text-white text-xs font-bold py-3 uppercase tracking-widest transition-colors duration-200"
          >
            {t('apply.intro.proceed')}
          </button>
        </div>
      </div>
    </div>
  )
}
