import { useNavigate } from 'react-router-dom'
import { useLang } from '../../i18n/useLang'
import guard1 from '../../assets/guard_1.png'

export default function OpenPositions() {
  const navigate = useNavigate()
  const { t } = useLang()

const positions = [
  {
    image: guard1,
    titleKey: 'jobs.positions.p1title',
    descKey: 'jobs.positions.p1desc',
    tags: [t('jobs.positions.p1tag1'), t('jobs.positions.fullTime'), t('jobs.positions.benefits'), t('jobs.positions.sosia')],
    type: 'guard',
  },
  {
    image: guard1,
    titleKey: 'jobs.positions.p2title',
    descKey: 'jobs.positions.p2desc',
    tags: [t('jobs.positions.fullTime'), t('jobs.positions.p2tag1'), t('jobs.positions.benefits')],
    type: 'guard',
  },
  {
    image: guard1,
    titleKey: 'jobs.positions.p3title',
    descKey: 'jobs.positions.p3desc',
    tags: [t('jobs.positions.fullTime'), t('jobs.positions.p3tag1'), t('jobs.positions.benefits')],
    type: 'guard',
  },
  {
    image: guard1,
    titleKey: 'jobs.positions.p4title',
    descKey: 'jobs.positions.p4desc',
    tags: [t('jobs.positions.p4tag1'), t('jobs.positions.fullTime'), t('jobs.positions.benefits')],
    type: 'backoffice',
  },
]

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm text-gray-500 mb-1">{t('jobs.positions.label')}</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          {t('jobs.positions.title').split(' ').map((w, i) =>
            i === 1 ? <span key={i} className="text-teal-500"> {w}</span> : w + ' '
          )}
        </h2>
        <p className="text-gray-500 text-sm max-w-lg mb-10">{t('jobs.positions.subtitle')}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {positions.map((pos) => {
            const title = t(pos.titleKey)
            return (
              <div key={pos.titleKey}
                style={{ border: '1px solid #e5e7eb', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', background: 'white' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '8px', backgroundColor: '#ccfbf1', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <img src={pos.image} alt={title} style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
                </div>
                <h3 style={{ fontWeight: '700', color: '#0f766e', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>{title}</h3>
                <p style={{ color: '#6b7280', fontSize: '12px', lineHeight: '1.6', marginBottom: '16px', flex: 1 }}>{t(pos.descKey)}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                  {pos.tags.map((tag) => (
                    <span key={tag} style={{ fontSize: '11px', backgroundColor: '#f3f4f6', color: '#6b7280', padding: '4px 10px', borderRadius: '999px' }}>
                      {tag}
                    </span>
                  ))}
                </div>
<button
  onClick={() => navigate(`/apply/${encodeURIComponent(title)}?type=${pos.type}`)}
                  style={{ color: '#0f766e', fontSize: '12px', fontWeight: '700', textAlign: 'left', letterSpacing: '0.05em', background: 'none', border: 'none', cursor: 'pointer' }}
                >
                  {t('jobs.positions.apply')}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
