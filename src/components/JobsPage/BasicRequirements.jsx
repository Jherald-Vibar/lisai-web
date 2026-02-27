const requirements = [
  'Filipino citizen, male or female, 21–45 years old',
  'At least high school graduate (Senior High preferred)',
  'Physically and mentally fit; no criminal record',
  'Willing to undergo SOSIA-accredited training',
  'Must be able to work in shifting schedules',
  'Valid NBI Clearance and Barangay Clearance',
]

const benefits = [
  { title: 'Competitive Pay', description: 'Salary aligned with DOLE standards and industry rates' },
  { title: 'Paid Training', description: 'SOSIA-accredited courses through Palacio Training Academy' },
  { title: 'Benefits Package', description: 'SSS, PhilHealth, Pag-IBIG, and 13th-month pay' },
  { title: 'Stable Employment', description: '40+ years of company stability with 5,000+ active guards' },
  { title: 'Career Growth', description: 'Clear path from guard to supervisor and senior roles' },
  { title: 'Flexible Posting', description: 'Assignments across Metro Manila in diverse industries' },
]

export default function BasicRequirements() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Left - Requirements */}
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 uppercase tracking-wide mb-6">
            Basic Requirements
          </h2>
          <div className="space-y-2">
            {requirements.map((req) => (
              <div key={req}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 0' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: '#0f766e', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p style={{ color: '#374151', fontSize: '14px' }}>{req}</p>
                </div>
                <div className="border-b border-gray-200" />
              </div>
            ))}
          </div>
        </div>

        {/* Right - Why Join */}
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 uppercase tracking-wide mb-6">
            Why Join LISAI
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition">
                <h3 className="font-semibold text-gray-800 text-sm mb-1">{benefit.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
