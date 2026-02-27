const infoCards = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0f766e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Head Office',
    lines: ['Suite 302 Blessingking Bldg,', '440 Rizal Ave Ext, Bet. 9th & 10th Ave,', 'East Grace Park, Caloocan, Metro Manila'],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0f766e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.59 3.47 2 2 0 0 1 3.56 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.64a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    title: 'Phone',
    lines: ['0917-6381250', '(+632) 83040195', '(+632) 73667875'],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0f766e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    title: 'Email',
    lines: ['alibertylnvestigation_inc@yahoo.com', 'libertyinvestigation_inc@yahoo.com'],
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0f766e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Office Hours',
    lines: ['Monday – Friday: 8:00 AM – 5:00 PM', 'Saturday: 9:00 AM – 5:00 PM', 'Sunday & Holidays: Closed'],
  },
]

const topics = [
  'Select a Topic',
  'Security Guard Services',
  'Personal Protection',
  'Event Security',
  'Training Programs',
  'General Inquiry',
]

export default function ContactInfo() {
  return (
    <section style={{ backgroundColor: 'white', padding: '80px 24px' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <p style={{ color: '#6b7280', fontSize: '13px', marginBottom: '6px' }}>Contact Information</p>
        <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#0f766e', marginBottom: '8px' }}>
          Start with a Free Consultation
        </h2>
        <p style={{ color: '#6b7280', fontSize: '14px', maxWidth: '440px', lineHeight: '1.7', marginBottom: '40px' }}>
          No obligation, no runaround. Whether you're looking to hire security for your business, need personal protection, or just want to know your options — we're happy to talk it through.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
          {/* Left */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
              {infoCards.map((card) => (
                <div key={card.title} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '16px' }}>
                  <div style={{ width: '44px', height: '44px', backgroundColor: '#f0fdfa', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {card.icon}
                  </div>
                  <div>
                    <p style={{ fontWeight: '600', color: '#111827', fontSize: '14px', marginBottom: '4px' }}>{card.title}</p>
                    {card.lines.map((line, i) => (
                      <p key={i} style={{ color: '#6b7280', fontSize: '13px', lineHeight: '1.6' }}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Google Map */}
            <div style={{ borderRadius: '10px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
              <iframe
                title="LISAI Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.4!2d120.9833!3d14.6566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b40e2f123456%3A0xabcdef!2s440+Rizal+Ave+Ext%2C+Caloocan!5e0!3m2!1sen!2sph!4v1"
                width="100%"
                height="220"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right - Form */}
          <div style={{ border: '1px solid #e5e7eb', borderRadius: '12px', padding: '32px' }}>
            <p style={{ color: '#6b7280', fontSize: '13px', marginBottom: '4px' }}>Send Us a Message</p>
            <h3 style={{ fontSize: '22px', fontWeight: '700', color: '#111827', marginBottom: '8px' }}>
              We'll Get Back to You Shortly
            </h3>
            <p style={{ color: '#9ca3af', fontSize: '13px', marginBottom: '24px' }}>
              Fill out the form below and one of our team members will respond within 1 business day.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ fontSize: '12px', color: '#374151', fontWeight: '500', display: 'block', marginBottom: '6px' }}>First Name</label>
                  <input placeholder="Juan" style={{ width: '100%', border: '1px solid #d1d5db', borderRadius: '6px', padding: '10px 12px', fontSize: '13px', outline: 'none', boxSizing: 'border-box' }} />
                </div>
                <div>
                  <label style={{ fontSize: '12px', color: '#374151', fontWeight: '500', display: 'block', marginBottom: '6px' }}>Last Name</label>
                  <input placeholder="Dela Cruz" style={{ width: '100%', border: '1px solid #d1d5db', borderRadius: '6px', padding: '10px 12px', fontSize: '13px', outline: 'none', boxSizing: 'border-box' }} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ fontSize: '12px', color: '#374151', fontWeight: '500', display: 'block', marginBottom: '6px' }}>Email Address</label>
                  <input placeholder="juan@email.com" style={{ width: '100%', border: '1px solid #d1d5db', borderRadius: '6px', padding: '10px 12px', fontSize: '13px', outline: 'none', boxSizing: 'border-box' }} />
                </div>
                <div>
                  <label style={{ fontSize: '12px', color: '#374151', fontWeight: '500', display: 'block', marginBottom: '6px' }}>Mobile Number</label>
                  <input placeholder="09XX-XXX-XXXX" style={{ width: '100%', border: '1px solid #d1d5db', borderRadius: '6px', padding: '10px 12px', fontSize: '13px', outline: 'none', boxSizing: 'border-box' }} />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '12px', color: '#374151', fontWeight: '500', display: 'block', marginBottom: '6px' }}>Topic / Service</label>
                <select style={{ width: '100%', border: '1px solid #d1d5db', borderRadius: '6px', padding: '10px 12px', fontSize: '13px', outline: 'none', color: '#6b7280', boxSizing: 'border-box' }}>
                  {topics.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>

              <div>
                <label style={{ fontSize: '12px', color: '#374151', fontWeight: '500', display: 'block', marginBottom: '6px' }}>Company / Organization <span style={{ color: '#9ca3af' }}>(Optional)</span></label>
                <input placeholder="Your company name" style={{ width: '100%', border: '1px solid #d1d5db', borderRadius: '6px', padding: '10px 12px', fontSize: '13px', outline: 'none', boxSizing: 'border-box' }} />
              </div>

              <div>
                <label style={{ fontSize: '12px', color: '#374151', fontWeight: '500', display: 'block', marginBottom: '6px' }}>Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your security needs, location, number of guards needed, or any other details..."
                  style={{ width: '100%', border: '1px solid #d1d5db', borderRadius: '6px', padding: '10px 12px', fontSize: '13px', outline: 'none', resize: 'none', boxSizing: 'border-box' }}
                />
              </div>

              <button style={{ backgroundColor: '#0f766e', color: 'white', fontWeight: '700', fontSize: '14px', padding: '14px', borderRadius: '6px', border: 'none', cursor: 'pointer', letterSpacing: '0.05em' }}>
                SEND MESSAGE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
