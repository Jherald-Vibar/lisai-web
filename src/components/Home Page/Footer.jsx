import { Link } from 'react-router-dom'
import { useLang } from '../../i18n/useLang'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer
      style={{
        background: 'linear-gradient(to right, #0d1b2a 0%, #0d2d35 40%, #0a4a45 70%, #0d6b5e 100%)',
        fontFamily: "'Poppins', sans-serif",
        fontWeight: 300,
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;600;700&display=swap');
        .footer-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 48px 24px;
          display: flex;
          flex-direction: column;
          gap: 40px;
        }
        .footer-left { width: 100%; }
        .footer-columns {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }
        @media (min-width: 768px) {
          .footer-inner {
            flex-direction: row;
            align-items: flex-start;
            padding: 64px 48px;
            gap: 64px;
          }
          .footer-left { min-width: 240px; flex: 1; }
          .footer-columns {
            grid-template-columns: repeat(4, 1fr);
            flex: 1.6;
          }
        }
      `}</style>

      <div className="footer-inner">
        {/* Left */}
        <div className="footer-left">
          <h3 style={{ color: 'white', fontSize: 'clamp(26px, 3.5vw, 46px)', fontWeight: 300, lineHeight: 1.2, marginBottom: '36px' }}>
            {t('footer.tagline')}
          </h3>
          <Link to="/contact" style={{ display: 'inline-block', backgroundColor: '#2a7a9b', color: 'white', fontSize: '14px', fontWeight: 300, padding: '12px 28px', textDecoration: 'none' }}>
            {t('nav.contact')}
          </Link>
        </div>

        {/* Right columns */}
        <div className="footer-columns">

          {/* Office Hours */}
          <div>
            <p style={{ color: 'white', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>Office Hours</p>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', lineHeight: 2, fontWeight: 300 }}>
              Monday to Friday<br />8:00 AM - 5:00PM<br /><br />
              Saturday<br />9:00 AM - 5:00PM<br /><br />
              Sunday & Holidays<br />Closed
            </p>
          </div>

          {/* Company */}
          <div>
            <p style={{ color: 'white', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>{t('footer.company')}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { labelKey: 'nav.about',    path: '/about' },
                { labelKey: 'nav.services', path: '/services' },
                { labelKey: 'nav.jobs',     path: '/jobs' },
                { labelKey: 'nav.contact',  path: '/contact' },
              ].map((link) => (
                <Link key={link.path} to={link.path} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', fontWeight: 300, textDecoration: 'none' }}>
                  {t(link.labelKey)}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={{ color: 'white', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>{t('nav.contact')}</p>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', lineHeight: 2, fontWeight: 300 }}>
              Suite 302 Eleongsing Bldg<br />440 Rizal Ave Ext,<br />Caloocan City<br /><br />
              Mobile: 0917-6381250<br />Land: (+632) 83640165<br /><br />
              <a href="mailto:admin@libertysecurityph.com" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'underline', fontWeight: 300, wordBreak: 'break-all' }}>
                admin@libertysecurityph.com
              </a>
            </p>
          </div>

          {/* Follow Us */}
          <div>
            <p style={{ color: 'white', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>Follow Us</p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {[
                <svg key="fb" width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>,
                <svg key="ig" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>,
                <svg key="tt" width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.77.61 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-6.13 8.45 6.34 6.34 0 0011.44-3.77V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/></svg>,
              ].map((icon, i) => (
                <a key={i} href="#" style={{ width: '34px', height: '34px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.75)', flexShrink: 0 }}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}
