import { useParams, useNavigate, useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import { useLang } from '../../i18n/useLang'

function FieldError({ message }) {
  if (!message) return null
  return <p className="text-red-500 text-xs mt-1">{message}</p>
}

const STEP_FORM    = 'form'
const STEP_RESUME  = 'resume'
const STEP_PREVIEW = 'preview'

export default function ApplyForm() {
  const { position } = useParams()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { t } = useLang()
  const decoded = decodeURIComponent(position)
  const posType = searchParams.get('type') ?? 'guard'

  // Shorthand for apply.form.* keys
  const f = (key) => t(`apply.form.${key}`)

  const positionOptions = posType === 'backoffice'
    ? [
        { value: 'Human Resources', label: f('posBO_HR') },
        { value: 'Operations',      label: f('posBO_Ops') },
        { value: 'Marketing',       label: f('posBO_Mktg') },
        { value: 'Accounting',      label: f('posBO_Acct') },
      ]
    : [
        { value: 'General Application', label: f('posGeneral') },
        { value: 'Security Guard',      label: f('posGuard') },
        { value: 'Officer in Charge',   label: f('posOIC') },
        { value: 'Shift in Charge',     label: f('posSIC') },
      ]

  const [step, setStep] = useState(STEP_FORM)
  const [selectedPosition, setSelectedPosition] = useState(
    posType === 'backoffice' ? 'Human Resources' : decoded
  )
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  // --- Personal fields ---
  const [fields, setFields] = useState({
    first_name: '', last_name: '', phone: '', email: '',
    experience: '', previous_employer: '', intro: '',
  })
  const [errors, setErrors] = useState({})

  // --- Resume fields ---
  const [skillInput, setSkillInput] = useState('')
  const [skills, setSkills] = useState([])
  const [education, setEducation] = useState([{ school: '', course: '', year: '' }])
  const [workExp, setWorkExp] = useState([{ company: '', role: '', duration: '' }])
  const [certifications, setCertifications] = useState('')
  const [resumeErrors, setResumeErrors] = useState({})

  // ── Handlers: personal ──
  const handleChange = (e) => {
    const { name, value } = e.target
    setFields(prev => ({ ...prev, [name]: value }))
    setErrors(prev => ({ ...prev, [name]: null }))
  }

  // ── Handlers: skills ──
  const addSkill = () => {
    const trimmed = skillInput.trim()
    if (trimmed && !skills.includes(trimmed)) {
      setSkills(prev => [...prev, trimmed])
    }
    setSkillInput('')
  }
  const removeSkill = (s) => setSkills(prev => prev.filter(x => x !== s))
  const handleSkillKey = (e) => {
    if (e.key === 'Enter' || e.key === ',') { e.preventDefault(); addSkill() }
  }

  // ── Handlers: education ──
  const updateEducation = (i, field, value) => {
    setEducation(prev => prev.map((row, idx) => idx === i ? { ...row, [field]: value } : row))
    setResumeErrors(prev => ({ ...prev, education: null }))
  }
  const addEducation = () => setEducation(prev => [...prev, { school: '', course: '', year: '' }])
  const removeEducation = (i) => setEducation(prev => prev.filter((_, idx) => idx !== i))

  // ── Handlers: work experience ──
  const updateWork = (i, field, value) => {
    setWorkExp(prev => prev.map((row, idx) => idx === i ? { ...row, [field]: value } : row))
  }
  const addWork = () => setWorkExp(prev => [...prev, { company: '', role: '', duration: '' }])
  const removeWork = (i) => setWorkExp(prev => prev.filter((_, idx) => idx !== i))

  // ── Validation: step 1 ──
  const validatePersonal = () => {
    const e = {}
    if (!fields.first_name.trim()) e.first_name = f('errFirstName')
    if (!fields.last_name.trim())  e.last_name  = f('errLastName')
    if (!fields.phone.trim()) {
      e.phone = f('errPhone')
    } else if (!/^(09|\+639)\d{9}$/.test(fields.phone.replace(/\s/g, ''))) {
      e.phone = f('errPhoneInvalid')
    }
    if (!fields.email.trim()) {
      e.email = f('errEmailReq')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      e.email = f('errEmail')
    }
    return e
  }

  // ── Validation: step 2 ──
  const validateResume = () => {
    const e = {}
    if (skills.length === 0) e.skills = f('errSkills')
    const hasValidEdu = education.some(r => r.school.trim() && r.course.trim())
    if (!hasValidEdu) e.education = f('errEducation')
    return e
  }

  // ── Step navigation ──
  const handleNextToResume = () => {
    const e = validatePersonal()
    if (Object.keys(e).length > 0) {
      setErrors(e)
      const first = Object.keys(e)[0]
      document.querySelector(`[name="${first}"]`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }
    setStep(STEP_RESUME)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNextToPreview = () => {
    const e = validateResume()
    if (Object.keys(e).length > 0) { setResumeErrors(e); return }
    setStep(STEP_PREVIEW)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleBack = () => {
    if (step === STEP_RESUME)  { setStep(STEP_FORM);   window.scrollTo({ top: 0, behavior: 'smooth' }) }
    if (step === STEP_PREVIEW) { setStep(STEP_RESUME); window.scrollTo({ top: 0, behavior: 'smooth' }) }
  }

  // ── Submit ──
  const handleSubmit = async () => {
    setSubmitting(true)

    const workLines = workExp
      .filter(w => w.company.trim())
      .map(w => `${w.role} at ${w.company} (${w.duration})`)
      .join(' | ')

    const eduLines = education
      .filter(e => e.school.trim())
      .map(e => `${e.course} — ${e.school} (${e.year})`)
      .join(' | ')

    const data = new FormData()
    data.append('access_key', '8ae2e836-fbd0-4362-b2aa-b5cb13aa46d9')
    data.append('subject', `Job Application — ${selectedPosition} — ${fields.first_name} ${fields.last_name}`)
    data.append('position', selectedPosition)
    data.append('first_name', fields.first_name)
    data.append('last_name', fields.last_name)
    data.append('phone', fields.phone)
    data.append('email', fields.email)
    data.append('experience', fields.experience)
    data.append('previous_employer', fields.previous_employer)
    data.append('intro', fields.intro)
    data.append('skills', skills.join(', '))
    data.append('education', eduLines)
    data.append('work_experience', workLines || 'None provided')
    data.append('certifications', certifications || 'None provided')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST', body: data, headers: { Accept: 'application/json' },
      })
      const json = await res.json()
      if (res.ok && json.success) {
        setSubmitted(true)
      } else {
        alert(f('errGeneric'))
      }
    } catch {
      alert(f('errNetwork'))
    } finally {
      setSubmitting(false)
    }
  }

  // ── Shared styles ──
  const inputClass = (name) =>
    `w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 transition ${
      errors[name]
        ? 'border-red-400 focus:ring-red-400'
        : 'border-gray-300 focus:ring-teal-600 focus:border-teal-600'
    }`

  const miniInputClass =
    'w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition'

  // ── Progress ──
  const stepIndex = { [STEP_FORM]: 1, [STEP_RESUME]: 2, [STEP_PREVIEW]: 3 }
  const currentStep = stepIndex[step]
  const stepLabels = [f('stepPersonal'), f('stepResume'), f('stepPreview')]

  // ── Success screen ──
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
            {f('successTitle')}
          </h2>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            {f('successBody').replace('{position}', selectedPosition)}
          </p>
          <button onClick={() => navigate('/jobs')}
            className="text-xs font-bold uppercase tracking-widest text-teal-600 hover:text-teal-800 transition-colors">
            {f('backJobs')}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen px-6 py-10" style={{ backgroundColor: '#f9fafb' }}>
      <div className="max-w-2xl mx-auto">

        {/* Back / Exit */}
        <button
          onClick={step === STEP_FORM ? () => navigate('/jobs') : handleBack}
          className="flex items-center gap-2 text-xs text-gray-400 hover:text-teal-600 uppercase tracking-widest font-bold mb-8 transition-colors">
          <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
            <path d="M19 12H5M12 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {step === STEP_FORM ? f('exit') : f('back')}
        </button>

        {/* Progress bar */}
        <div className="flex items-center gap-2 mb-8">
          {stepLabels.map((label, i) => {
            const n = i + 1
            const active = currentStep === n
            const done   = currentStep > n
            return (
              <div key={label} className="flex items-center gap-2 flex-1">
                <div className="flex items-center gap-2 flex-shrink-0">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                    done || active ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-400'
                  }`}>
                    {done
                      ? <svg viewBox="0 0 24 24" fill="none" className="w-3 h-3"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      : n
                    }
                  </div>
                  <span className={`text-xs font-bold uppercase tracking-wider hidden sm:block ${
                    active ? 'text-teal-600' : done ? 'text-gray-400' : 'text-gray-300'
                  }`}>
                    {label}
                  </span>
                </div>
                {i < 2 && <div className={`flex-1 h-px ${currentStep > n ? 'bg-teal-600' : 'bg-gray-200'}`} />}
              </div>
            )
          })}
        </div>

        {/* Header */}
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-600 mb-2">{f('label')}</p>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 uppercase tracking-tight mb-1">
            {step === STEP_FORM    ? f('stepPersonal')
             : step === STEP_RESUME ? f('stepResume')
             : f('stepPreview')}
          </h1>
          <p className="text-gray-400 text-sm">
            {step === STEP_FORM    ? f('subtitle')
             : step === STEP_RESUME ? f('resumeSubtitle')
             : f('previewSubtitle')}
          </p>
        </div>

        {/* ── STEP 1: Personal Info ── */}
        {step === STEP_FORM && (
          <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-5">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  {f('firstName')} <span className="text-red-400">*</span>
                </label>
                <input name="first_name" value={fields.first_name} onChange={handleChange}
                  placeholder={f('placeholderFirst')} className={inputClass('first_name')} />
                <FieldError message={errors.first_name} />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  {f('lastName')} <span className="text-red-400">*</span>
                </label>
                <input name="last_name" value={fields.last_name} onChange={handleChange}
                  placeholder={f('placeholderLast')} className={inputClass('last_name')} />
                <FieldError message={errors.last_name} />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  {f('phone')} <span className="text-red-400">*</span>
                </label>
                <input name="phone" type="tel" value={fields.phone} onChange={handleChange}
                  placeholder={f('placeholderPhone')} className={inputClass('phone')} />
                <FieldError message={errors.phone} />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  {f('email')} <span className="text-red-400">*</span>
                </label>
                <input name="email" type="email" value={fields.email} onChange={handleChange}
                  placeholder={f('placeholderEmail')} className={inputClass('email')} />
                <FieldError message={errors.email} />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                {f('position')} <span className="text-red-400">*</span>
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
                {f('experience')}
              </label>
              <select name="experience" value={fields.experience} onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition">
                <option value="">{f('expPlaceholder')}</option>
                <option value="No experience — willing to train">{f('expNone')}</option>
                <option value="Less than 1 year">{f('expLess1')}</option>
                <option value="1 – 3 years">{f('exp1to3')}</option>
                <option value="3 – 5 years">{f('exp3to5')}</option>
                <option value="5+ years">{f('exp5plus')}</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                {f('employer')}{' '}
                <span className="text-gray-300 font-normal normal-case tracking-normal">({f('optional')})</span>
              </label>
              <input name="previous_employer" value={fields.previous_employer} onChange={handleChange}
                placeholder={f('placeholderEmployer')} className={inputClass('previous_employer')} />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                {f('intro')}{' '}
                <span className="text-gray-300 font-normal normal-case tracking-normal">({f('optional')})</span>
              </label>
              <textarea name="intro" value={fields.intro} onChange={handleChange} rows={4}
                placeholder={f('placeholderIntro')}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition" />
            </div>

            <button type="button" onClick={handleNextToResume}
              className="w-full bg-[#0f766e] hover:bg-[#0d6460] text-white text-xs font-bold py-3.5 uppercase tracking-widest transition-colors duration-200 rounded-lg mt-2">
              {f('continueToResume')}
            </button>
          </div>
        )}

        {/* ── STEP 2: Resume Builder ── */}
        {step === STEP_RESUME && (
          <div className="space-y-6">

            {/* Skills */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-700 mb-4">
                {f('sectionSkills')} <span className="text-red-400">*</span>
              </h3>
              <div className="flex gap-2 mb-3">
                <input
                  value={skillInput}
                  onChange={e => setSkillInput(e.target.value)}
                  onKeyDown={handleSkillKey}
                  placeholder={f('skillPlaceholder')}
                  className={miniInputClass}
                />
                <button type="button" onClick={addSkill}
                  className="flex-shrink-0 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold px-4 rounded-lg transition-colors">
                  {f('skillAdd')}
                </button>
              </div>
              {skills.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {skills.map(s => (
                    <span key={s} className="flex items-center gap-1.5 bg-teal-50 text-teal-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-teal-200">
                      {s}
                      <button type="button" onClick={() => removeSkill(s)} className="text-teal-400 hover:text-teal-700 leading-none">×</button>
                    </span>
                  ))}
                </div>
              )}
              <FieldError message={resumeErrors.skills} />
            </div>

            {/* Education */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-700 mb-4">
                {f('sectionEducation')} <span className="text-red-400">*</span>
              </h3>
              <div className="space-y-4">
                {education.map((row, i) => (
                  <div key={i} className="grid grid-cols-1 sm:grid-cols-3 gap-3 relative">
                    <input value={row.school} onChange={e => updateEducation(i, 'school', e.target.value)}
                      placeholder={f('eduSchool')} className={miniInputClass} />
                    <input value={row.course} onChange={e => updateEducation(i, 'course', e.target.value)}
                      placeholder={f('eduCourse')} className={miniInputClass} />
                    <div className="flex gap-2">
                      <input value={row.year} onChange={e => updateEducation(i, 'year', e.target.value)}
                        placeholder={f('eduYear')} className={miniInputClass} />
                      {education.length > 1 && (
                        <button type="button" onClick={() => removeEducation(i)}
                          className="flex-shrink-0 text-gray-300 hover:text-red-400 text-lg leading-none transition-colors">×</button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <FieldError message={resumeErrors.education} />
              <button type="button" onClick={addEducation}
                className="mt-3 text-xs text-teal-600 hover:text-teal-800 font-bold uppercase tracking-wider transition-colors">
                {f('skillAddAnother')}
              </button>
            </div>

            {/* Work Experience */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-700 mb-1">{f('sectionWorkExp')}</h3>
              <p className="text-gray-400 text-xs mb-4">{f('workOptionalNote')}</p>
              <div className="space-y-4">
                {workExp.map((row, i) => (
                  <div key={i} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <input value={row.company} onChange={e => updateWork(i, 'company', e.target.value)}
                      placeholder={f('workCompany')} className={miniInputClass} />
                    <input value={row.role} onChange={e => updateWork(i, 'role', e.target.value)}
                      placeholder={f('workRole')} className={miniInputClass} />
                    <div className="flex gap-2">
                      <input value={row.duration} onChange={e => updateWork(i, 'duration', e.target.value)}
                        placeholder={f('workDuration')} className={miniInputClass} />
                      {workExp.length > 1 && (
                        <button type="button" onClick={() => removeWork(i)}
                          className="flex-shrink-0 text-gray-300 hover:text-red-400 text-lg leading-none transition-colors">×</button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <button type="button" onClick={addWork}
                className="mt-3 text-xs text-teal-600 hover:text-teal-800 font-bold uppercase tracking-wider transition-colors">
                {f('skillAddAnother')}
              </button>
            </div>

            {/* Certifications */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-700 mb-1">{f('sectionCerts')}</h3>
              <p className="text-gray-400 text-xs mb-4">{f('certsOptionalNote')}</p>
              <textarea value={certifications} onChange={e => setCertifications(e.target.value)} rows={3}
                placeholder={f('certPlaceholder')}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition" />
            </div>

            <button type="button" onClick={handleNextToPreview}
              className="w-full bg-[#0f766e] hover:bg-[#0d6460] text-white text-xs font-bold py-3.5 uppercase tracking-widest transition-colors duration-200 rounded-lg">
              {f('continueToPreview')}
            </button>
          </div>
        )}

        {/* ── STEP 3: Preview ── */}
        {step === STEP_PREVIEW && (
          <div className="space-y-6">

            {/* Resume Card */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">

              {/* Header */}
              <div style={{ backgroundColor: '#0f766e' }} className="px-8 py-6">
                <h2 className="text-white text-2xl font-extrabold uppercase tracking-tight">
                  {fields.first_name} {fields.last_name}
                </h2>
                <p className="text-teal-200 text-sm mt-1">{selectedPosition}</p>
                <div className="flex flex-wrap gap-4 mt-3 text-teal-100 text-xs">
                  <span>📞 {fields.phone}</span>
                  <span>✉️ {fields.email}</span>
                </div>
              </div>

              <div className="p-8 space-y-6">

                {/* About */}
                {fields.intro && (
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-2 pb-1 border-b border-gray-100">{f('previewAbout')}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{fields.intro}</p>
                  </div>
                )}

                {/* Skills */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-2 pb-1 border-b border-gray-100">{f('sectionSkills')}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map(s => (
                      <span key={s} className="bg-teal-50 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full border border-teal-100">{s}</span>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-2 pb-1 border-b border-gray-100">{f('sectionEducation')}</h3>
                  <div className="space-y-2">
                    {education.filter(e => e.school.trim()).map((e, i) => (
                      <div key={i} className="flex justify-between items-start">
                        <div>
                          <p className="text-sm font-semibold text-gray-800">{e.course}</p>
                          <p className="text-xs text-gray-500">{e.school}</p>
                        </div>
                        <span className="text-xs text-gray-400 flex-shrink-0 ml-4">{e.year}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Work Experience */}
                {workExp.some(w => w.company.trim()) && (
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-2 pb-1 border-b border-gray-100">{f('sectionWorkExp')}</h3>
                    <div className="space-y-2">
                      {workExp.filter(w => w.company.trim()).map((w, i) => (
                        <div key={i} className="flex justify-between items-start">
                          <div>
                            <p className="text-sm font-semibold text-gray-800">{w.role}</p>
                            <p className="text-xs text-gray-500">{w.company}</p>
                          </div>
                          <span className="text-xs text-gray-400 flex-shrink-0 ml-4">{w.duration}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Certifications */}
                {certifications.trim() && (
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-2 pb-1 border-b border-gray-100">{f('sectionCerts')}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{certifications}</p>
                  </div>
                )}

                {/* Experience Level */}
                {fields.experience && (
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-2 pb-1 border-b border-gray-100">{f('experience')}</h3>
                    <p className="text-gray-600 text-sm">{fields.experience}</p>
                  </div>
                )}

                {/* Previous Employer */}
                {fields.previous_employer && (
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-teal-600 mb-2 pb-1 border-b border-gray-100">{f('employer')}</h3>
                    <p className="text-gray-600 text-sm">{fields.previous_employer}</p>
                  </div>
                )}

              </div>
            </div>

            {/* Submit */}
            <button type="button" onClick={handleSubmit} disabled={submitting}
              className="w-full bg-[#0f766e] hover:bg-[#0d6460] disabled:opacity-60 disabled:cursor-not-allowed text-white text-xs font-bold py-3.5 uppercase tracking-widest transition-colors duration-200 rounded-lg">
              {submitting ? f('submitting') : f('submit')}
            </button>

            <p className="text-center text-gray-400 text-xs">{f('consent')}</p>
          </div>
        )}

      </div>
    </div>
  )
}