import { Link } from 'react-router-dom'

export default function Footer() {
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
          padding: 36px 24px;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        .footer-left { width: 100%; }
        .footer-columns {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        @media (min-width: 768px) {
          .footer-inner {
            flex-direction: row;
            align-items: flex-start;
            padding: 48px 48px;
            gap: 48px;
          }
          .footer-left { min-width: 200px; flex: 1; }
          .footer-columns {
            grid-template-columns: repeat(4, 1fr);
            flex: 1.6;
          }
        }
      `}</style>

      <div className="footer-inner">
        {/* Left */}
        <div className="footer-left">
          <h3 style={{ color: 'white', fontSize: 'clamp(20px, 2.8vw, 36px)', fontWeight: 300, lineHeight: 1.2, marginBottom: '24px' }}>
            Let's safeguard your<br />assets, together.
          </h3>
          <Link to="/contact" style={{ display: 'inline-block', backgroundColor: '#2a7a9b', color: 'white', fontSize: '13px', fontWeight: 300, padding: '10px 22px', textDecoration: 'none' }}>
            Contact us
          </Link>
        </div>

        {/* Right columns */}
        <div className="footer-columns">
          <div>
            <p style={{ color: 'white', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Office Hours</p>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', lineHeight: 1.8, fontWeight: 300 }}>
              Monday to Friday<br />8:00 AM - 5:00PM<br /><br />
              Saturday<br />9:00 AM - 5:00PM<br /><br />
              Sunday & Holidays<br />Closed
            </p>
          </div>

          <div>
            <p style={{ color: 'white', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Company</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
              {[{ label: 'About Us', path: '/about' }, { label: 'Services', path: '/services' }, { label: 'Jobs', path: '/jobs' }, { label: 'Contact Us', path: '/contact' }].map((link) => (
                <Link key={link.label} to={link.path} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', fontWeight: 300, textDecoration: 'none' }}>{link.label}</Link>
              ))}
            </div>
          </div>

          <div>
            <p style={{ color: 'white', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Contact</p>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', lineHeight: 1.8, fontWeight: 300 }}>
              Suite 302 Eleongsing Bldg<br />440 Rizal Ave Ext,<br />Caloocan City<br /><br />
              Mobile: 0917 638 1250<br />Land: (+632) 8364 0165<br /><br />
              <a href="mailto:admin@libertysecurityph.com" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'underline', fontWeight: 300, wordBreak: 'break-all' }}>
                admin@libertysecurityph.com
              </a>
            </p>
          </div>

          <div>
            <p style={{ color: 'white', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Follow Us</p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {[
                { id: 'fb', url: 'https://www.facebook.com/lisai86', icon: <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg> },
                { id: 'ig', url: 'https://www.instagram.com/lisai.official', icon: <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg> },
                { id: 'tt', url: 'https://www.tiktok.com/@libertysecurityph', icon: <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.77.61 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-6.13 8.45 6.34 6.34 0 0011.44-3.77V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/></svg> },
                { id: 'li', url: 'https://www.linkedin.com/in/lisai-ph/', icon: <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> },
              ].map((item) => (
                <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer"
                  style={{ width: '30px', height: '30px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.75)', flexShrink: 0, textDecoration: 'none' }}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}