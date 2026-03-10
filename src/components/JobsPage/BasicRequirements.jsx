import { useLang } from '../../i18n/useLang'

export default function BasicRequirements() {
  const { t } = useLang()

  const requirements = ['r1','r2','r3','r4','r5','r6'].map(k => t(`jobs.requirements.${k}`))
  const benefits = [
    ['b1Title','b1Desc'], ['b2Title','b2Desc'], ['b3Title','b3Desc'],
    ['b4Title','b4Desc'], ['b5Title','b5Desc'], ['b6Title','b6Desc'],
  ]

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left - Requirements */}
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 uppercase tracking-wide mb-6">
            {t('jobs.requirements.title')}
          </h2>
          <div className="space-y-2">
            {requirements.map((req) => (
              <div key={req}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 0' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#0f766e', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p style={{ color: '#374151', fontSize: '14px' }}>{req}</p>
                </div>
                <div className="border-b border-gray-400" />
              </div>
            ))}
          </div>
        </div>

        {/* Right - Why Join */}
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 uppercase tracking-wide mb-6">
            {t('jobs.requirements.whyTitle')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map(([tk, dk]) => (
              <div key={tk} className="border border-gray-400 rounded-lg p-4 hover:shadow-sm transition">
                <h3 className="font-semibold text-gray-800 text-sm mb-1">{t(`jobs.requirements.${tk}`)}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{t(`jobs.requirements.${dk}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
