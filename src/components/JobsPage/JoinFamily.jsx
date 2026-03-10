import { useNavigate } from 'react-router-dom'
import { useLang } from '../../i18n/useLang'

export default function JoinFamily() {
  const navigate = useNavigate()
  const { t } = useLang()

  return (
    <section className="bg-white py-16 sm:py-20 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
          {t('jobs.join.title')}{' '}
          <span className="text-teal-500">{t('jobs.join.highlight')}</span>
        </h2>
        <p className="text-gray-500 text-sm mb-8">{t('jobs.join.subtitle')}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://www.facebook.com/lisai86"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-block', backgroundColor: '#0f766e', color: 'white', fontSize: '14px', fontWeight: '600', padding: '14px 28px', borderRadius: '6px', textDecoration: 'none', cursor: 'pointer' }}
          >
            {t('jobs.join.facebook')}
          </a>
          <button
            onClick={() => navigate('/apply/General%20Application')}
            style={{ backgroundColor: 'transparent', color: '#374151', fontSize: '14px', fontWeight: '600', padding: '14px 28px', borderRadius: '6px', border: '1px solid #d1d5db', cursor: 'pointer' }}
          >
            {t('jobs.join.apply')}
          </button>
        </div>
      </div>
    </section>
  )
}
