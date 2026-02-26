import logistics from '../../assets/logistics-transpo.png'
import warehouses from '../../assets/warehouses-stockroom.png'
import residential from '../../assets/residential-subdivisions.png'
import offices from '../../assets/offices-corporate-bldg.png'
import shopping from '../../assets/shopping-malls-retail.png'
import highProfile from '../../assets/high-prof-indi.png'

const industries = [
  { icon: logistics, label: 'Logistics & Transportation' },
  { icon: warehouses, label: 'Warehouses & Stockrooms' },
  { icon: residential, label: 'Residential Subdivisions' },
  { icon: offices, label: 'Offices & Corporate Buildings' },
  { icon: shopping, label: 'Shopping Malls & Retail' },
  { icon: highProfile, label: 'High-Profile Individuals' },
]

export default function IndustriesWeProtect() {
  return (
    <section 
      className="relative py-24 px-6 overflow-hidden"
      /* Applying your specific gradient background */
      style={{ background: 'linear-gradient(180deg,  #50bdb2 35%, #50bdb2 35%, #d9dddd 200%)' }}
    >
      <div className="max-w-6xl mx-auto relative z-10"> 
        {/* Header Section: Colors adjusted for dark-to-light transition */}
        <p className="text-white/80 text-lg font-medium mb-2 uppercase tracking-wider">Who We Serve</p>
        <h2 className="text-4xl md:text-5xl font-[900] text-white mb-4 tracking-tight">
          Industries We Protect
        </h2>
        <p className="text-white/70 text-base mb-12 max-w-xl leading-relaxed">
          Our guards and security personnel are experienced across a wide range of environments and industries, 
          ensuring specialized protection for every sector.
        </p>

        {/* Industry Cards: Styled with glass-morphism to pop against the gradient */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind) => (
            <div 
              key={ind.label} 
              className="flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-5 hover:bg-white/20 transition-all duration-300 group"
            >
              {/* Icon container with a subtle glow */}
              <div className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                <img src={ind.icon} alt={ind.label} className="w-6 h-6 object-contain invert brightness-0" />
              </div>
              <span className="text-white text-[15px] font-bold tracking-tight">{ind.label}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Horizontal divider at the bottom */}
      <div className="max-w-6xl mx-auto mt-20 border-t border-black/5 opacity-10" />
    </section>
  )
}