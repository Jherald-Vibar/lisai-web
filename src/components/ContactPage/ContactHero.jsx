export default function ContactHero() {
  return (
    <section style={{ background: 'linear-gradient(135deg, #134e4a 0%, #0f766e 40%, #99f6e4 100%)', paddingTop: '160px', paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', marginBottom: '12px' }}>Get in Touch</p>
        <h1 style={{ fontSize: '52px', fontWeight: '800', color: 'white', lineHeight: '1.1', marginBottom: '8px' }}>
          Let's Secure Your
        </h1>
        <h1 style={{ fontSize: '52px', fontWeight: '800', color: '#0f172a', lineHeight: '1.1', marginBottom: '24px' }}>
          Future, Together.
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', maxWidth: '420px', lineHeight: '1.7', marginBottom: '32px' }}>
          From guarding your business premises to protecting high-profile individuals — we offer a full range of professional security services tailored to your needs.
        </p>
        <div style={{ display: 'flex', gap: '16px' }}>
          <button style={{ backgroundColor: '#0f766e', color: 'white', fontWeight: '600', fontSize: '14px', padding: '12px 28px', borderRadius: '6px', border: 'none', cursor: 'pointer' }}>
            Get a free quote
          </button>
          <button style={{ backgroundColor: 'transparent', color: 'white', fontWeight: '600', fontSize: '14px', padding: '12px 28px', borderRadius: '6px', border: '2px solid white', cursor: 'pointer' }}>
            Contact us
          </button>
        </div>
      </div>
    </section>
  )
}
