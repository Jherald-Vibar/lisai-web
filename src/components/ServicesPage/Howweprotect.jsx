import { useLang } from '../../i18n/useLang'
import initialConsultation from '../../assets/initial-consultation.png'
import siteAssessment from '../../assets/site-assessment.png'
import customPlan from '../../assets/custom-security-plan.png'
import deployment from '../../assets/deployment-monitoring.png'

export default function HowWeProtect() {
  const { t } = useLang()

  const steps = [
    { icon: initialConsultation, titleKey: 'services.how.s1title', descKey: 'services.how.s1desc' },
    { icon: siteAssessment,      titleKey: 'services.how.s2title', descKey: 'services.how.s2desc' },
    { icon: customPlan,          titleKey: 'services.how.s3title', descKey: 'services.how.s3desc' },
    { icon: deployment,          titleKey: 'services.how.s4title', descKey: 'services.how.s4desc' },
  ]

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-gray-600 text-sm mb-3">{t('services.how.label')}</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
            {t('services.how.title')} <span className="text-teal-500">{t('services.how.highlight')}</span> {t('services.how.titleEnd')}
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">{t('services.how.subtitle')}</p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-teal-700 z-0" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step) => (
              <div key={step.titleKey} className="flex flex-col items-center text-center">
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'white', border: '2px solid #0f766e', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                  <img src={step.icon} alt={t(step.titleKey)} className="w-8 h-8 object-contain" />
                </div>
                <h3 className="font-semibold text-gray-800 text-sm mb-2">{t(step.titleKey)}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{t(step.descKey)}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 border-t border-gray-200 opacity-70" />
        </div>
      </div>
    </section>
  )
}
