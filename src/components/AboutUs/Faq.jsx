import { useState } from 'react'

const faqs = [
  {
    question: 'What is LISAI?',
    answer: 'It stands for Liberty Investigation & Security Agency, Inc.',
  },
  {
    question: 'What services does LISAI offer?',
    answer: 'LISAI offers manned guarding, investigation, security consultancy, and VIP protection services.',
  },
  {
    question: 'How long has LISAI been in operation?',
    answer: 'LISAI has been in the security industry since 1982, with over four decades of experience.',
  },
  {
    question: 'Where is LISAI located?',
    answer: 'We are located at Suite 302 Eleongsing Bldg., 440 Rizal Ave. Extension, Grace Park, Caloocan City.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-16 sm:py-20 px-6" style={{ background: 'linear-gradient(180deg, #b2ede6 0%, #7dd8cf 50%, #3DD5C6 100%)' }}>
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">

        {/* Left */}
        <div className="lg:w-72 flex-shrink-0 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-base">
            Here are some of LISAI's frequently asked questions.
          </p>
        </div>

        {/* Right: Accordion */}
        <div className="flex-1 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={faq.question}
                className="rounded-xl overflow-hidden border border-white/40"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={`w-full flex justify-between items-center px-5 sm:px-6 py-4 sm:py-5 text-left transition-all duration-300 ${
                    isOpen ? 'bg-teal-500 text-white' : 'bg-white/60 hover:bg-white/80 text-gray-800'
                  }`}
                >
                  <span className="text-sm sm:text-base font-semibold pr-4">{faq.question}</span>
                  <span className={`text-lg flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : 'text-gray-400'}`}>
                    ▼
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="bg-teal-500 px-5 sm:px-6 pb-5 text-sm text-white/90 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
