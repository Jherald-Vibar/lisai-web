import guard1 from '../../assets/guard_1.png'

const positions = [
  {
    image: guard1,
    title: 'Security Guard',
    description: 'Responsible for protecting client premises, conducting patrols, monitoring surveillance equipment, and maintaining order at assigned posts.',
    tags: ['Full-Time', 'Benefits & Bonuses', 'SOSIA Accredited'],
  },
  {
    image: guard1,
    title: 'Security Guard',
    description: 'Responsible for protecting client premises, conducting patrols, monitoring surveillance equipment, and maintaining order at assigned posts.',
    tags: ['Full-Time', 'Benefits & Bonuses', 'SOSIA Accredited'],
  },
  {
    image: guard1,
    title: 'Security Guard',
    description: 'Responsible for protecting client premises, conducting patrols, monitoring surveillance equipment, and maintaining order at assigned posts.',
    tags: ['Full-Time', 'Benefits & Bonuses', 'SOSIA Accredited'],
  },
]

export default function OpenPositions() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm text-gray-500 mb-1">Open Positions</p>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          We're <span className="text-teal-500">Hiring</span>
        </h2>
        <p className="text-gray-500 text-sm max-w-lg mb-10">
          We proudly offer comprehensive training programs to equip individuals who aspire to excel
          in the security industry. No prior experience required for some roles.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {positions.map((pos, i) => (
            <div
              key={i}
              style={{ border: '1px solid #e5e7eb', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', background: 'white' }}
            >
              {/* Red tag bar */}
              <div style={{ width: '100%', height: '32px', backgroundColor: '#fee2e2', borderRadius: '8px', marginBottom: '16px', display: 'flex', alignItems: 'center', paddingLeft: '12px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#f87171', display: 'inline-block' }} />
              </div>

              {/* Image box */}
              <div style={{ width: '64px', height: '64px', borderRadius: '8px', backgroundColor: '#ccfbf1', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <img src={pos.image} alt={pos.title} style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
              </div>

              <h3 style={{ fontWeight: '700', color: '#0f766e', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>{pos.title}</h3>
              <p style={{ color: '#6b7280', fontSize: '12px', lineHeight: '1.6', marginBottom: '16px', flex: 1 }}>{pos.description}</p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                {pos.tags.map((tag) => (
                  <span key={tag} style={{ fontSize: '11px', backgroundColor: '#f3f4f6', color: '#6b7280', padding: '4px 10px', borderRadius: '999px' }}>
                    {tag}
                  </span>
                ))}
              </div>

              <button style={{ color: '#0f766e', fontSize: '12px', fontWeight: '700', textAlign: 'left', letterSpacing: '0.05em', background: 'none', border: 'none', cursor: 'pointer' }}>
                APPLY FOR THIS ROLE →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
