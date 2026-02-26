import businessSecurity from '../../assets/business-security.png'
import assetLand from '../../assets/asset-land-security.png'
import personalSecurity from '../../assets/personal-security.png'
import corporateProtection from '../../assets/corporate-private-protection.png'

const services = [
  {
    icon: businessSecurity,
    title: 'Business Security',
    description: 'Ensuring the safety of facilities and staff through vigilant property patrols, diligent surveillance equipment monitoring, and thorough inspections of buildings and equipment.',
  },
  {
    icon: assetLand,
    title: 'Asset & Land Security',
    description: 'Highly proficient in protecting company assets — including inventories and stocks — and ensuring the security of vacant properties and buildings by preventing unauthorized entry and squatting.',
  },
  {
    icon: personalSecurity,
    title: 'Personal Security',
    description: 'Prominent individuals and corporate entities face various threats, from stalkers to protests. Our personal security packages prioritize your well-being, granting you the freedom to pursue your goals confidently.',
  },
  {
    icon: corporateProtection,
    title: 'Corporate & Private Property Protection',
    description: 'Round-the-clock security for corporate offices, residences, and private estates. We use advanced technology and highly trained personnel to ensure the safety and security of your assets and premises.',
  },
]

export default function OurSecurityServices() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-1xl text-gray-500 mb-1">Our Services</p>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Our Security <span className="text-teal-500">Services</span>
        </h2>
        <p className="text-gray-400 text-sm mb-10 max-w-md">
          Every service is designed with one goal in mind — your safety. We match the right team and approach to your specific situation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="border border-gray-400 rounded-xl p-6 hover:shadow-md transition-shadow duration-200">
              <img src={s.icon} alt={s.title} className="w-10 h-10 object-contain mb-4" />
              <h3 className="text-teal-500 font-semibold text-base mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}