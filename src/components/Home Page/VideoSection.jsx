import { useLang } from '../../i18n/useLang'
import video from '../../assets/Liberty-Security (1).mp4'

export default function VideoSection() {
  const { t } = useLang()

  return (
    <section style={{ backgroundColor: '#0a201d', padding: '80px 24px' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ color: '#2dd4bf', fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '12px' }}>
          {t('home.about.label')}
        </p>
        <h2 style={{ color: 'white', fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: '900', marginBottom: '16px', lineHeight: '1.1' }}>
          {t('home.about.title')}
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', maxWidth: '520px', margin: '0 auto 40px', lineHeight: '1.7' }}>
          {t('home.about.body')}
        </p>
        <div style={{
          position: 'relative', borderRadius: '16px', overflow: 'hidden',
          border: '2px solid rgba(45, 212, 191, 0.3)',
          boxShadow: '0 0 60px rgba(45, 212, 191, 0.15)',
        }}>
          <video controls style={{ width: '100%', display: 'block', maxHeight: '500px', objectFit: 'cover' }}>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '13px', marginTop: '24px' }}>
          {t('home.about.cta')}
        </p>
      </div>
    </section>
  )
}
