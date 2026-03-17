import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useLang } from '../../i18n/useLang'

function FieldError({ message }) {
  if (!message) return null
  return <p className="text-red-500 text-xs mt-1">{message}</p>
}

export default function ApplyForm() {
  const { position } = useParams()
  const navigate = useNavigate()
  const { t } = useLang()
  const decoded = decodeURIComponent(position)

  const positionOptions = [
    { value: 'General Application', label: t('apply.form.posGeneral') },
    { value: 'Security Guard',      label: t('apply.form.posGuard') },
    { value: 'Officer in Charge',   label: t('apply.form.posOIC') },
    { value: 'Shift in Charge',     label: t('apply.form.posSIC') },
  ]

  const [selectedPosition, setSelectedPosition] = useState(decoded)
  const [fileName, setFileName] = useState(null)
  const [fileError, setFileError] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const [fields, setFields] = useState({
    first_name: '', last_name: '', phone: '', email: '',
    experience: '', previous_employer: '', intro: '',
  })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFields((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: null }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (!file) return
    if (file.size > 5 * 1024 * 1024) {
      setFileError(t('apply.form.fileSizeErr'))
      setFileName(null)
      e.target.value = ''
      return
    }
    setFileError(null)
    setFileName(file.name)
  }

  const validate = () => {
    const newErrors = {}
    if (!fields.first_name.trim()) newErrors.first_name = t('apply.form.errFirstName')
    if (!fields.last_name.trim()) newErrors.last_name = t('apply.form.errLastName')
    if (!fields.phone.trim()) {
      newErrors.phone = t('apply.form.errPhone')
    } else if (!/^(09|\+639)\d{9}$/.test(fields.phone.replace(/\s/g, ''))) {
      newErrors.phone = t('apply.form.errPhoneInvalid')
    }
    if (!fields.email.trim()) {
      newErrors.email = t('apply.form.errEmailReq')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      newErrors.email = t('apply.form.errEmail')
    }
    if (!fileName) newErrors.resume = t('apply.form.errResume')
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      const firstErrorKey = Object.keys(newErrors)[0]
      const el = document.querySelector(`[name="${firstErrorKey}"]`)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }
    setSubmitting(true)
    const formEl = e.target
    const data = new FormData(formEl)
    data.set('position', selectedPosition)
    try {
      const res = await fetch('https://formspree.io/f/mwvrvlpy', {
        method: 'POST', body: data, headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        alert(t('apply.form.errGeneric'))
      }
    } catch {
      alert(t('apply.form.errNetwork'))
    } finally {
      setSubmitting(false)
    }
  }

  const inputClass = (name) =>
    `w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 transition ${
      errors[name] ? 'border-red-400 focus:ring-red-400' : 'border-gray-300 focus:ring-teal-600 focus:border-teal-600'
    }`

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full" style={{ backgroundColor: '#ccfbf1' }}>
            <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" style={{ color: '#0f766e' }}>
              <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h2 className="text-2xl font-extrabold text-gray-900 uppercase tracking-tight mb-3">
            {t('apply.form.successTitle')}
          </h2>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            {t('apply.form.successBody').replace('{position}', selectedPosition)}
          </p>
          <button onClick={() => navigate('/jobs')}
            className="text-xs font-bold uppercase tracking-widest text-teal-600 hover:text-teal-800 transition-colors">
            {t('apply.form.backJobs')}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen px-6 py-10" style={{ backgroundColor: '#f9fafb' }}>
      <div className="max-w-2xl mx-auto">
        <button onClick={() => navigate('/jobs')}
          className="flex items-center gap-2 text-xs text-gray-400 hover:text-teal-600 uppercase tracking-widest font-bold mb-10 transition-colors">
          <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
            <path d="M19 12H5M12 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {t('apply.form.exit')}
        </button>

        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-600 mb-2">{t('apply.form.label')}</p>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 uppercase tracking-tight mb-1">
            {selectedPosition}
          </h1>
          <p className="text-gray-400 text-sm">{t('apply.form.subtitle')}</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <form onSubmit={handleSubmit} noValidate encType="multipart/form-data" className="space-y-5">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  {t('apply.form.firstName')} <span className="text-red-400">{t('apply.form.required')}</span>
                </label>
                <input name="first_name" value={fields.first_name} onChange={handleChange}
                  placeholder={t('apply.form.placeholderFirst')} className={inputClass('first_name')} />
                <FieldError message={errors.first_name} />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  {t('apply.form.lastName')} <span className="text-red-400">{t('apply.form.required')}</span>
                </label>
                <input name="last_name" value={fields.last_name} onChange={handleChange}
                  placeholder={t('apply.form.placeholderLast')} className={inputClass('last_name')} />
                <FieldError message={errors.last_name} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  {t('apply.form.phone')} <span className="text-red-400">{t('apply.form.required')}</span>
                </label>
                <input name="phone" type="tel" value={fields.phone} onChange={handleChange}
                  placeholder={t('apply.form.placeholderPhone')} className={inputClass('phone')} />
                <FieldError message={errors.phone} />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  {t('apply.form.email')} <span className="text-red-400">{t('apply.form.required')}</span>
                </label>
                <input name="email" type="email" value={fields.email} onChange={handleChange}
                  placeholder={t('apply.form.placeholderEmail')} className={inputClass('email')} />
                <FieldError message={errors.email} />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                {t('apply.form.position')} <span className="text-red-400">{t('apply.form.required')}</span>
              </label>
              <select name="position" value={selectedPosition} onChange={(e) => setSelectedPosition(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition">
                {positionOptions.map((p) => (
                  <option key={p.value} value={p.value}>{p.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                {t('apply.form.experience')}
              </label>
              <select name="experience" value={fields.experience} onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition">
                <option value="">{t('apply.form.expPlaceholder')}</option>
                <option value="none">{t('apply.form.expNone')}</option>
                <option value="less_than_1">{t('apply.form.expLess1')}</option>
                <option value="1_to_3">{t('apply.form.exp1to3')}</option>
                <option value="3_to_5">{t('apply.form.exp3to5')}</option>
                <option value="5_plus">{t('apply.form.exp5plus')}</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                {t('apply.form.employer')}{' '}
                <span className="text-gray-300 font-normal normal-case tracking-normal">({t('apply.form.optional')})</span>
              </label>
              <input name="previous_employer" value={fields.previous_employer} onChange={handleChange}
                placeholder={t('apply.form.placeholderEmployer')} className={inputClass('previous_employer')} />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                {t('apply.form.intro')}{' '}
                <span className="text-gray-300 font-normal normal-case tracking-normal">({t('apply.form.optional')})</span>
              </label>
              <textarea name="intro" value={fields.intro} onChange={handleChange} rows={4}
                placeholder={t('apply.form.placeholderIntro')}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition" />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                {t('apply.form.resume')} <span className="text-red-400">{t('apply.form.required')}</span>
              </label>
              <label className={`flex items-center justify-center gap-3 w-full border-2 border-dashed rounded-lg px-4 py-6 cursor-pointer transition-colors ${
                errors.resume ? 'border-red-400 bg-red-50' : fileName ? 'border-teal-400' : 'border-gray-300 hover:border-teal-500'
              }`} style={{ backgroundColor: fileName && !errors.resume ? '#f0fdf8' : undefined }}>
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-gray-400 flex-shrink-0">
                  <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M12 12V4m0 0L8 8m4-4l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm text-gray-500">
                  {fileName
                    ? <span className="text-teal-600 font-semibold">{fileName}</span>
                    : <span>{t('apply.form.uploadLabel')} <span className="text-gray-400 text-xs">{t('apply.form.uploadHint')}</span></span>
                  }
                </span>
                <input type="file" name="resume" accept=".pdf,.doc,.docx" className="hidden" onChange={handleFileChange} />
              </label>
              <FieldError message={fileError || errors.resume} />
            </div>

            <button type="submit" disabled={submitting}
              className="w-full bg-[#0f766e] hover:bg-[#0d6460] disabled:opacity-60 disabled:cursor-not-allowed text-white text-xs font-bold py-3.5 uppercase tracking-widest transition-colors duration-200 rounded-lg mt-2">
              {submitting ? t('apply.form.submitting') : t('apply.form.submit')}
            </button>

            <p className="text-center text-gray-400 text-xs">{t('apply.form.consent')}</p>
          </form>
        </div>
      </div>
    </div>
  )
}
