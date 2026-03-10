import { useLang } from '../../i18n/useLang'

export default function WhatMakesDifferent() {
  const { t } = useLang()

  return (
    <section
      className="relative py-16 sm:py-24 px-6 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #50bdb2 35%, #50bdb2 35%, #d9dddd 200%)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-center relative z-10">
        <div className="flex-1 text-center lg:text-left">
          <p className="text-white/80 text-sm font-medium mb-2 uppercase tracking-wider">
            {t('services.different.label')}
          </p>
          <h2 className="text-white font-[500] text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6 tracking-tight">
            {t('services.different.title')}
          </h2>
          <p className="text-white/70 text-base leading-relaxed max-w-md font-light mx-auto lg:mx-0">
            {t('services.different.subtitle')}
          </p>
        </div>

        <div className="flex-shrink-0 flex flex-row lg:flex-col gap-10 lg:gap-12 text-center items-center justify-center">
          <div className="flex flex-col items-center">
            <p className="text-5xl sm:text-6xl text-white font-bold leading-none">{t('services.different.stat1val')}</p>
            <p className="text-white/70 text-xs sm:text-sm font-bold uppercase tracking-widest mt-3">
              {t('services.different.stat1label')}
            </p>
          </div>
          <div className="hidden lg:block w-16 h-[2px] bg-white/20" />
          <div className="flex flex-col items-center">
            <p className="text-4xl sm:text-5xl text-white font-bold leading-none">{t('services.different.stat2val')}</p>
            <p className="text-white/70 text-xs sm:text-sm font-bold uppercase tracking-widest mt-3">
              {t('services.different.stat2label')}
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-16 border-t border-black/10" />
    </section>
  )
}
