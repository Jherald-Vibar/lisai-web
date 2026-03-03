import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const positionOptions = [
  'Security Guard',
  'Officer in Charge',
  'Shift in Charge',
]

export default function ApplyForm() {
  const { position } = useParams()
  const navigate = useNavigate()
  const decoded = decodeURIComponent(position)

  const [selectedPosition, setSelectedPosition] = useState(decoded)
  const [fileName, setFileName] = useState(null)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) setFileName(file.name)
  }

  return (
    <div className="min-h-screen px-6 py-10" style={{ backgroundColor: '#f9fafb' }}>
      <div className="max-w-2xl mx-auto">

        {/* Exit button */}
        <button
          onClick={() => navigate('/jobs')}
          className="flex items-center gap-2 text-xs text-gray-400 hover:text-teal-600 uppercase tracking-widest font-bold mb-10 transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
            <path d="M19 12H5M12 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Exit
        </button>

        {/* Header */}
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-600 mb-2">Job Application</p>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 uppercase tracking-tight mb-1">
            {selectedPosition}
          </h1>
          <p className="text-gray-400 text-sm">
            Fill out all fields below. Our HR team will be in touch within 3–5 business days.
          </p>
        </div>

        {/* Form card */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <form className="space-y-5">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  First Name <span className="text-red-400">*</span>
                </label>
                <input name="first_name" required placeholder="Juan"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Last Name <span className="text-red-400">*</span>
                </label>
                <input name="last_name" required placeholder="Dela Cruz"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Phone Number <span className="text-red-400">*</span>
                </label>
                <input name="phone" type="tel" required placeholder="09XX XXX XXXX"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Email Address
                </label>
                <input name="email" type="email" placeholder="juan@email.com"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition" />
              </div>
            </div>

            {/* Position — pre-selected but changeable */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Position Applying For <span className="text-red-400">*</span>
              </label>
              <select
                name="position"
                value={selectedPosition}
                onChange={(e) => setSelectedPosition(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition"
              >
                {positionOptions.map((p) => (
                  <option key={p} value={p}>{p}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Years of Experience
              </label>
              <select name="experience"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition">
                <option value="">Select experience level</option>
                <option value="none">No experience — willing to train</option>
                <option value="less_than_1">Less than 1 year</option>
                <option value="1_to_3">1 – 3 years</option>
                <option value="3_to_5">3 – 5 years</option>
                <option value="5_plus">5+ years</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Previous Employer <span className="text-gray-300 font-normal normal-case tracking-normal">(optional)</span>
              </label>
              <input name="previous_employer" placeholder="Company name or N/A"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition" />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Brief Introduction <span className="text-gray-300 font-normal normal-case tracking-normal">(optional)</span>
              </label>
              <textarea name="intro" rows={4} placeholder="Tell us a bit about yourself and why you want to join LISAI..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600 transition" />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Resume / CV <span className="text-red-400">*</span>
              </label>
              <label
                className="flex items-center justify-center gap-3 w-full border-2 border-dashed border-gray-300 rounded-lg px-4 py-6 cursor-pointer hover:border-teal-500 transition-colors"
                style={{ backgroundColor: fileName ? '#f0fdf8' : '#fafafa' }}
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-gray-400 flex-shrink-0">
                  <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M12 12V4m0 0L8 8m4-4l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm text-gray-500">
                  {fileName
                    ? <span className="text-teal-600 font-semibold">{fileName}</span>
                    : <span>Click to upload <span className="text-gray-400 text-xs">PDF, DOC, DOCX (max 5MB)</span></span>
                  }
                </span>
                <input type="file" name="resume" accept=".pdf,.doc,.docx" className="hidden" onChange={handleFileChange} />
              </label>
            </div>

            <button type="submit"
              className="w-full bg-[#0f766e] hover:bg-[#0d6460] text-white text-xs font-bold py-3.5 uppercase tracking-widest transition-colors duration-200 rounded-lg mt-2">
              Submit Application
            </button>

            <p className="text-center text-gray-400 text-xs">
              By submitting, you agree to have your information reviewed by the LISAI HR team.
            </p>

          </form>
        </div>
      </div>
    </div>
  )
}