import { useRef, useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useLang } from '../../i18n/useLang'

function FieldError({ message }) {
  if (!message) return null
  return <p className="text-red-500 text-xs mt-1">{message}</p>
}

export default function ContactInfo() {
  const { hash } = useLocation()
  const { t } = useLang()
  const [status, setStatus] = useState("idle")

  const [fields, setFields] = useState({
    full_name: '', email: '', phone: '', company: '', message: '',
  })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (hash === '#contact-info') {
      const element = document.getElementById('contact-info')
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    }
  }, [hash])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: null }))
  }

  const validate = () => {
    const newErrors = {}
    if (!fields.full_name.trim()) newErrors.full_name = t('contact.info.errName')
    if (!fields.email.trim()) {
      newErrors.email = t('contact.info.errEmailReq')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      newErrors.email = t('contact.info.errEmailInvalid')
    }
    if (!fields.phone.trim()) {
      newErrors.phone = t('contact.info.errPhoneReq')
    } else if (!/^(09|\+639|\+632|0[2-9])\d{7,9}$/.test(fields.phone.replace(/[\s\-]/g, ''))) {
      newErrors.phone = t('contact.info.errPhoneInvalid')
    }
    if (!fields.message.trim()) newErrors.message = t('contact.info.errMessage')
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      const firstKey = Object.keys(newErrors)[0]
      const el = document.querySelector(`[name="${firstKey}"]`)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }

    setStatus("sending")

    const data = new FormData()
    data.append('access_key', '8ae2e836-fbd0-4362-b2aa-b5cb13aa46d9')
    data.append('subject', `Contact Form — ${fields.full_name}`)
    data.append('full_name', fields.full_name)
    data.append('email', fields.email)
    data.append('phone', fields.phone)
    data.append('company', fields.company || 'None provided')
    data.append('message', fields.message)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST', body: data, headers: { Accept: 'application/json' },
      })
      const json = await res.json()
      if (res.ok && json.success) {
        setStatus("success")
        setFields({ full_name: '', email: '', phone: '', company: '', message: '' })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  const inputClass = (name) =>
    `w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 transition ${
      errors[name] ? 'border-red-400 focus:ring-red-400' : 'border-gray-300 focus:ring-teal-600 focus:border-teal-600'
    }`

  const infoCards = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0f766e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      title: t('contact.info.card1title'),
      lines: [t('contact.info.card1l1'), t('contact.info.card1l2'), t('contact.info.card1l3')],
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0f766e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.59 3.47 2 2 0 0 1 3.56 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.64a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
      title: t('contact.info.card2title'),
      lines: [t('contact.info.card2l1'), t('contact.info.card2l2')],
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0f766e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      title: t('contact.info.card3title'),
      lines: [t('contact.info.card3l1'), t('contact.info.card3l2')],
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0f766e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      title: t('contact.info.card4title'),
      lines: [t('contact.info.card4l1'), t('contact.info.card4l2'), t('contact.info.card4l3')],
    },
  ]

  return (
    <section id="contact-info" className="bg-white py-16 sm:py-20 px-4 sm:px-6 scroll-mt-0">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-sm text-gray-500 mb-2">{t('contact.info.sectionLabel')}</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-teal-700 mb-3">
            {t('contact.info.sectionTitle')}
          </h2>
          <p className="text-gray-500 max-w-lg leading-relaxed text-sm">
            {t('contact.info.sectionSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT: info cards + map */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoCards.map((card) => (
                <div key={card.title} className="flex gap-3 border border-gray-200 rounded-xl p-4">
                  <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center shrink-0">
                    {card.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 text-sm mb-1">{card.title}</p>
                    {card.lines.map((line, i) => (
                      <p key={i} className="text-gray-500 text-xs leading-relaxed break-words">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-xl overflow-hidden border border-gray-200 w-full">
              <iframe
                title="LISAI Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.260650299751!2d120.9813362746562!3d14.650715285841597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b5d6e6b2f15b%3A0xe2b1f86be5230a4d!2sLiberty%20Investigation%20%26%20Security%20Agency%2C%20Inc.!5e0!3m2!1sen!2sph!4v1772504465827!5m2!1sen!2sph"
                className="w-full h-52 sm:h-64 block"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* RIGHT: form */}
          <div className="border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm bg-white">
            <p className="text-sm text-gray-500 mb-1">{t('contact.info.formLabel')}</p>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              {t('contact.info.formTitle')}
            </h3>
            <p className="text-gray-400 text-sm mb-6">{t('contact.info.formSubtitle')}</p>

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.info.fieldName')} <span className="text-red-400">{t('contact.info.required')}</span>
                </label>
                <input name="full_name" value={fields.full_name} onChange={handleChange}
                  placeholder={t('contact.info.placeholderName')} className={inputClass('full_name')} />
                <FieldError message={errors.full_name} />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.info.fieldEmail')} <span className="text-red-400">{t('contact.info.required')}</span>
                </label>
                <input name="email" type="email" value={fields.email} onChange={handleChange}
                  placeholder={t('contact.info.placeholderEmail')} className={inputClass('email')} />
                <FieldError message={errors.email} />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.info.fieldPhone')} <span className="text-red-400">{t('contact.info.required')}</span>
                </label>
                <input name="phone" type="tel" value={fields.phone} onChange={handleChange}
                  placeholder={t('contact.info.placeholderPhone')} className={inputClass('phone')} />
                <FieldError message={errors.phone} />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.info.fieldCompany')}{' '}
                  <span className="text-gray-300 text-xs font-normal">({t('contact.info.optional')})</span>
                </label>
                <input name="company" value={fields.company} onChange={handleChange}
                  placeholder={t('contact.info.placeholderCompany')} className={inputClass('company')} />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.info.fieldMessage')} <span className="text-red-400">{t('contact.info.required')}</span>
                </label>
                <textarea name="message" value={fields.message} onChange={handleChange} rows={4}
                  placeholder={t('contact.info.placeholderMessage')}
                  className={`${inputClass('message')} resize-none`} />
                <FieldError message={errors.message} />
              </div>

              <button type="submit" disabled={status === "sending"}
                className={`w-full py-3 rounded-lg font-semibold text-sm tracking-wide transition ${
                  status === "sending" ? "bg-teal-500 cursor-not-allowed" : "bg-teal-700 hover:bg-teal-800"
                } text-white`}>
                {status === "sending" ? t('contact.info.sending') : t('contact.info.submit')}
              </button>
            </form>

            {status === "success" && (
              <div className="mt-5 p-4 rounded-lg bg-green-50 text-green-700 text-sm">
                {t('contact.info.successMsg')}
              </div>
            )}
            {status === "error" && (
              <div className="mt-5 p-4 rounded-lg bg-red-50 text-red-700 text-sm">
                {t('contact.info.errorMsg')}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}