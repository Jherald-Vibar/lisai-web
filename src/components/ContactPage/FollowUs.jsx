const socials = [
  {
    name: 'Facebook',
    handle: '@lisai95',
    color: '#1877F2',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    handle: '@lisai.official',
    color: '#E1306C',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    name: 'TikTok',
    handle: '@libertysecurityph',
    color: '#010101',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    handle: 'LISAI PH',
    color: '#0A66C2',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
]

export default function FollowUs() {
  return (
    <section style={{ background: 'linear-gradient(135deg, #134e4a 0%, #0f766e 40%, #99f6e4 100%)', padding: '80px 24px' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '13px', marginBottom: '8px' }}>Stay Connected</p>
        <h2 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '12px' }}>
          <span style={{ color: '#0f766e' }}>Follow Us</span>{' '}
          <span style={{ color: 'white' }}>Online</span>
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', marginBottom: '40px' }}>
          Stay up to date with news, security tips, and updates from our team.
        </p>

        <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '24px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
          {socials.map((s) => (
            <div key={s.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', padding: '20px 12px', borderRadius: '10px', border: '1px solid #f3f4f6', cursor: 'pointer' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: s.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {s.icon}
              </div>
              <p style={{ fontWeight: '600', color: '#111827', fontSize: '14px' }}>{s.name}</p>
              <p style={{ color: '#6b7280', fontSize: '12px' }}>{s.handle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
