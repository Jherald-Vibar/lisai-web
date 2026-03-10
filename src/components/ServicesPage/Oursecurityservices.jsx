import { useLang } from '../../i18n/useLang'
import businessSecurity from '../../assets/business-security.png'
import assetLand from '../../assets/asset-land-security.png'
import personalSecurity from '../../assets/personal-security.png'
import corporateProtection from '../../assets/corporate-private-protection.png'

const serviceKeys = [
  { icon: businessSecurity,   titleKey: 'services.our.b1', descKey: 'services.our.b1desc' },
  { icon: assetLand,          titleKey: 'services.our.b2', descKey: 'services.our.b2desc' },
  { icon: personalSecurity,   titleKey: 'services.our.b3', descKey: 'services.our.b3desc' },
  { icon: corporateProtection,titleKey: 'services.our.b4', descKey: 'services.our.b4desc' },
]

export default function OurSecurityServices() {
  const { t } = useLang()

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-gray-500 text-sm mb-1">{t('services.our.label')}</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          {t('services.our.title')} <span className="text-teal-500">{t('services.our.highlight')}</span>
        </h2>
        <p className="text-gray-400 text-sm mb-10 max-w-md">{t('services.our.subtitle')}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceKeys.map((s) => (
            <div key={s.titleKey} className="border border-gray-300 rounded-xl p-6 hover:shadow-md transition-shadow duration-200">
              <img src={s.icon} alt={t(s.titleKey)} className="w-10 h-10 object-contain mb-4" />
              <h3 className="text-teal-500 font-semibold text-base mb-2">{t(s.titleKey)}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{t(s.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
