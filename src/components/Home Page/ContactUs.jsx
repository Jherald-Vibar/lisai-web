export default function ContactUs() {
  return (
    /* ADJUSTMENT: Added -mt-12 to pull the whole section up. 
       Adjust this value (e.g., -mt-16, -mt-20) to move it further. */
    <section className="bg-white py-16 px-6 -mt-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          {/* ADJUSTMENT: Reduced mb-2 to mb-1 and added -mt-4 to keep label tight to the top */}
          <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1 -mt-4">Contact Us</p>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">
            Let's Secure Your Future, <span className="text-[#009688]">Together.</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto leading-relaxed">
            Reach out to our team for a personalized consultation and get started on protecting what matters most.
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center gap-8 mb-8 text-sm text-gray-700">
          {/* Address */}
          <div className="flex items-start gap-2">
            <svg className="w-5 h-5 text-[#009688] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="text-center sm:text-left">
              Suite 302 Eleongsing Bldg, Grace Park,<br />Caloocan City
            </span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#009688] shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>0917-6381250 | (+632) 83640165</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-[#009688] shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>alibertyinvestigation_inc@yahoo.com</span>
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="w-full h-80 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
          <iframe
            title="Liberty Security Location"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.1!2d120.9822!3d14.6572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b437b0c88a3b%3A0x1234!2s440+Rizal+Ave+Extension%2C+Caloocan%2C+Metro+Manila!5e0!3m2!1sen!2sph!4v1234567890!5m2!1sen!2sph&q=440+Rizal+Ave+Extension,+Grace+Park,+Caloocan+City,+Metro+Manila,+Philippines"
          />
        </div>
      </div>
    </section>
  )
}