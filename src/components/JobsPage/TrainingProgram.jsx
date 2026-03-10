import { useNavigate } from 'react-router-dom'
import { useLang } from '../../i18n/useLang'
import palacioLogo from '../../assets/palacio-security-logo.jpg'

export default function TrainingProgram() {
  const navigate = useNavigate()
  const { t } = useLang()

  const curriculum = ['c1','c2','c3','c4','c5'].map(k => t(`jobs.training.${k}`))

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs text-gray-400 uppercase tracking-widest mb-6">{t('jobs.training.label')}</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={palacioLogo} alt="Palacio Logo" className="w-10 h-10 object-contain" />
              <div>
                <p className="font-semibold text-gray-800 text-sm">{t('jobs.training.academy')}</p>
                <p className="text-xs text-gray-400">{t('jobs.training.sister')}</p>
              </div>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-teal-600 leading-tight mb-4">
              {t('jobs.training.title')}
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">{t('jobs.training.body')}</p>
            <ul className="space-y-3">
              {curriculum.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-teal-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right - dark card */}
          <div style={{ backgroundColor: '#111827', borderRadius: '12px', padding: '28px', color: 'white' }}>
            <p style={{ color: '#2dd4bf', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>
              {t('jobs.training.enroll')}
            </p>
            <h3 style={{ fontSize: '20px', fontWeight: '800', textTransform: 'uppercase', lineHeight: '1.2', marginBottom: '6px' }}>
              {t('jobs.training.program')}
            </h3>
            <p style={{ color: '#2dd4bf', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', marginBottom: '24px' }}>
              {t('jobs.training.academy')}
            </p>
            <div style={{ marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                ['scheduleLabel', 'scheduleVal'],
                ['locationLabel', 'locationVal'],
                ['certLabel', 'certVal'],
              ].map(([lk, vk]) => (
                <div key={lk}>
                  <p style={{ color: '#9ca3af', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>{t(`jobs.training.${lk}`)}</p>
                  <p style={{ color: '#e5e7eb', fontSize: '13px' }}>{t(`jobs.training.${vk}`)}</p>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="https://www.facebook.com/lisai86" target="_blank" rel="noopener noreferrer"
                style={{ display: 'block', width: '100%', backgroundColor: '#0f766e', color: 'white', fontSize: '13px', fontWeight: '600', padding: '10px', borderRadius: '6px', textAlign: 'center', textDecoration: 'none' }}>
                {t('jobs.training.facebook')}
              </a>
              <button onClick={() => navigate('/apply/General%20Application')}
                style={{ width: '100%', backgroundColor: 'transparent', color: 'white', fontSize: '13px', fontWeight: '600', padding: '10px', borderRadius: '6px', border: '1px solid #6b7280', cursor: 'pointer' }}>
                {t('jobs.training.applyBtn')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
