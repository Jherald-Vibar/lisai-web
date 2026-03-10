import { useLang } from '../../i18n/useLang'
import guardIcon from '../../assets/guard_1.png'
import researchIcon from '../../assets/research_1.png'
import consultationIcon from '../../assets/consultation_1.png'
import vipIcon from '../../assets/personal-data_1.png'

const serviceKeys = [
  { icon: guardIcon,        titleKey: 'home.services.business',  descKey: 'home.services.businessDesc' },
  { icon: researchIcon,     titleKey: 'home.services.asset',     descKey: 'home.services.assetDesc' },
  { icon: consultationIcon, titleKey: 'home.services.personal',  descKey: 'home.services.personalDesc' },
  { icon: vipIcon,          titleKey: 'home.services.corporate', descKey: 'home.services.corporateDesc' },
]

export default function ServiceHighlights() {
  const { t } = useLang()

  return (
    <>
      <div className="w-full h-6 bg-[#0a201d]" />
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold text-[#2d3748] mb-12 tracking-tight">
            {t('home.services.label')} <span className="text-[#009688]">{t('home.services.title')}</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {serviceKeys.map((s) => (
              <div key={s.titleKey} className="flex flex-col items-center text-center group">
                <div className="w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 rounded-full bg-[#e6f4f1] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105 border border-[#d1e9e5]">
                  <img src={s.icon} alt={t(s.titleKey)} className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain" />
                </div>
                <h3 className="font-[900] text-[15px] uppercase tracking-[0.1em] text-[#1a202c] mb-3">
                  {t(s.titleKey)}
                </h3>
                <p className="text-[#4a5568] text-sm leading-relaxed max-w-[260px]">
                  {t(s.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 border-t-2 border-[#009688] opacity-40" />
      </section>
    </>
  )
}
