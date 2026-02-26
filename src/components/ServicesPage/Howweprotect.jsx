import initialConsultation from '../../assets/initial-consultation.png'
import siteAssessment from '../../assets/site-assessment.png'
import customPlan from '../../assets/custom-security-plan.png'
import deployment from '../../assets/deployment-monitoring.png'

const steps = [
  {
    icon: initialConsultation,
    title: 'Initial Consultation',
    description: 'We discuss your specific security needs, concerns, and requirements  no hassle.',
  },
  {
    icon: siteAssessment,
    title: 'Site Assessment',
    description: 'Our team conducts a thorough evaluation of your location to identify vulnerabilities.',
  },
  {
    icon: customPlan,
    title: 'Custom Security Plan',
    description: 'We design a tailored plan and assign the right personnel and equipment for your needs.',
  },
  {
    icon: deployment,
    title: 'Deployment & Monitoring',
    description: 'Guards are deployed and operations are continuously monitored for your peace of mind.',
  },
]

export default function HowWeProtect() {
  return (
    <section className="bg-gray-50 py-1 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-1xl text-gray-600 mb-3">Our Process</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            How We Get <span className="text-teal-500">You</span> Protected
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            A straightforward process from first contact to full deployment  no guesswork, no delays.
          </p>
        </div>

        {/* Steps with connecting line */}
        <div className="relative">
          <div className="absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-teal-700 z-0" />
          <div className="grid grid-cols-4 gap-6 relative z-10">
            {steps.map((step) => (
              <div key={step.title} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-white border-3 border-teal-700 flex items-center justify-center mb-4 shadow-sm">
                  <img src={step.icon} alt={step.title} className="w-8 h-8 object-contain" />
                </div>
                <h3 className="font-semibold text-gray-800 text-sm mb-2">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
            <div className="max-w-7xl mx-auto mb-10 mt-30 border-t-1 border-[black] opacity-70" />
        </div>
      </div>
    </section>
  )
}