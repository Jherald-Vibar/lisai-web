import { useLang } from '../../i18n/useLang'

export default function TalkToTeam() {
  const { t } = useLang()

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-gray-600 text-sm mb-5">{t('services.talk.label')}</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-teal-600 mb-4">
          {t('services.talk.title')}
        </h2>
        <p className="text-gray-500 text-sm max-w-lg mx-auto mb-8 leading-relaxed">
          {t('services.talk.subtitle')}
        </p>
        <a
          href="/contact#contact-info"
          className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold text-sm px-8 py-3 rounded transition-colors duration-300 mb-12"
        >
          {t('services.talk.cta')}
        </a>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="border border-gray-300 rounded-lg p-6 sm:p-8 flex flex-col items-center justify-center">
            <p className="text-[13px] text-[#009688] font-bold uppercase tracking-widest mb-3">{t('services.talk.call')}</p>
            <p className="text-gray-800 text-sm font-semibold text-center">
              0917 638 1250<br />(+632) 8364 0165
            </p>
          </div>
          <div className="border border-gray-300 rounded-lg p-6 sm:p-8 flex flex-col items-center justify-center">
            <p className="text-[13px] text-[#009688] font-bold uppercase tracking-widest mb-3">{t('services.talk.email')}</p>
            <p className="text-gray-800 text-sm font-semibold text-center">
              admin@libertysecurityph.com<br />libertyinvestigation_inc@yahoo.com
            </p>
          </div>
          <div className="border border-gray-300 rounded-lg p-6 sm:p-8 flex flex-col items-center justify-center">
            <p className="text-[13px] text-[#009688] font-bold uppercase tracking-widest mb-3">{t('services.talk.hours')}</p>
            <p className="text-gray-800 text-sm font-semibold text-center">{t('services.talk.hoursVal')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
