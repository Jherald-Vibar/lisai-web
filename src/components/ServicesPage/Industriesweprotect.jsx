import { useLang } from '../../i18n/useLang'
import logistics from '../../assets/logistics-transpo.png'
import warehouses from '../../assets/warehouses-stockroom.png'
import residential from '../../assets/residential-subdivisions.png'
import offices from '../../assets/offices-corporate-bldg.png'
import shopping from '../../assets/shopping-malls-retail.png'
import highProfile from '../../assets/high-prof-indi.png'

const industryKeys = [
  { icon: logistics,    labelKey: 'services.industries.i1' },
  { icon: warehouses,   labelKey: 'services.industries.i2' },
  { icon: residential,  labelKey: 'services.industries.i3' },
  { icon: offices,      labelKey: 'services.industries.i4' },
  { icon: shopping,     labelKey: 'services.industries.i5' },
  { icon: highProfile,  labelKey: 'services.industries.i6' },
]

export default function IndustriesWeProtect() {
  const { t } = useLang()

  return (
    <section
      className="relative py-16 sm:py-24 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #50bdb2 35%, #50bdb2 35%, #d9dddd 200%)' }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <p className="text-white/80 text-sm sm:text-lg font-medium mb-2 uppercase tracking-wider">
          {t('services.industries.label')}
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-[900] text-white mb-4 tracking-tight">
          {t('services.industries.title')}
        </h2>
        <p className="text-white/70 text-sm sm:text-base mb-10 max-w-xl leading-relaxed">
          {t('services.industries.subtitle')}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {industryKeys.map((ind) => (
            <div
              key={ind.labelKey}
              className="flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-4 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-white/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <img src={ind.icon} alt={t(ind.labelKey)} className="w-6 h-6 object-contain invert brightness-0" />
              </div>
              <span className="text-white text-sm sm:text-[15px] font-bold tracking-tight">{t(ind.labelKey)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
