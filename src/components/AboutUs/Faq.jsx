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

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-4 text-left"
      >
        <span className={`text-sm font-semibold ${isOpen ? 'text-gray-900' : 'text-gray-700'}`}>
          {faq.question}
        </span>
        <span className={`text-xl font-light transition-transform duration-200 ${isOpen ? 'text-teal-500' : 'text-gray-400'}`}>
          {isOpen ? '▲' : '▼'}
        </span>
      </button>
      {isOpen && (
        <div className="pb-4 text-sm text-gray-500 leading-relaxed">
          {faq.answer}
        </div>
      )}
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left */}
        <div className="flex-1 max-w-xs">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-sm">
            Here are some of LISAI's frequently asked questions.
          </p>
        </div>

        {/* Right: Accordion */}
        <div className="flex-1">
          {/* First item - open with teal bg */}
          <div className="bg-teal-500 rounded-xl p-5 mb-2">
            <div className="flex justify-between items-center">
              <span className="text-white font-semibold text-sm">{faqs[0].question}</span>
              <span className="text-white text-xl">▲</span>
            </div>
            <p className="text-white/90 text-sm mt-3">{faqs[0].answer}</p>
          </div>

          {/* Rest of items */}
          {faqs.slice(1).map((faq, i) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === i + 1}
              onClick={() => setOpenIndex(openIndex === i + 1 ? null : i + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}