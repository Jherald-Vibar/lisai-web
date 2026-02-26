import guardIcon from '../../assets/guard_1.png'
import researchIcon from '../../assets/research_1.png'
import consultationIcon from '../../assets/consultation_1.png'
import vipIcon from '../../assets/personal-data_1.png'

const services = [
  {
    icon: guardIcon,
    title: 'Manned Guarding',
    description: 'Professional, uniformed guards for malls, offices and subdivisions, providing visible deterrence and rapid response.',
  },
  {
    icon: researchIcon,
    title: 'Investigation',
    description: 'Comprehensive background checks, surveillance and private investigation services for individuals and businesses.',
  },
  {
    icon: consultationIcon,
    title: 'Security Consultancy',
    description: 'Expert risk assessment, safety audits and tailored security planning to mitigate vulnerabilities.',
  },
  {
    icon: vipIcon,
    title: 'VIP Protection',
    description: 'Discreet, highly-trained escort services and close-in security for executives and high-profile individuals.',
  },
]

export default function ServiceHighlights() {
  return (
    <>
      {/* 1. SOLID GREEN TRANSITION BAR 
          Based on the reference, this bar creates a clean break from the Hero section.
      */}
      <div className="w-full h-6 bg-[#0a201d]" /> 

      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* 2. SECTION TITLE 
              Matching the large, bold font style of the brand.
          */}
          <h2 className="text-center text-4xl md:text-5xl font-bold text-[#2d3748] mb-16 tracking-tight">
            Service <span className="text-[#009688]">Highlights</span>
          </h2>

          {/* 3. CARDS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {services.map((service) => (
              <div key={service.title} className="flex flex-col items-center text-center group">
                {/* Icon circle: Using the soft aqua background from the reference */}
                <div className="w-36 h-36 rounded-full bg-[#e6f4f1] flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105 border border-[#d1e9e5]">
                  <img 
                    src={service.icon} 
                    alt={service.title} 
                    className="w-16 h-16 object-contain" 
                  />
                </div>
                
                {/* Card Title: font-black for that heavy authority look */}
                <h3 className="font-[900] text-[16px] uppercase tracking-[0.1em] text-[#1a202c] mb-3">
                  {service.title}
                </h3>
                
                {/* Card Description */}
                <p className="text-[#4a5568] text-sm leading-relaxed max-w-[260px]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. FOOTER DIVIDER */}
        <div className="max-w-7xl mx-auto mt-25 border-t-7 border-[#009688] opacity-40" />
      </section>
    </>
  )
}