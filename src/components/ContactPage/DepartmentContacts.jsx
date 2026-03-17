import { useLang } from '../../i18n/useLang'

const departments = [
  {
    titleKey: 'contact.departments.d1title',
    descKey:  'contact.departments.d1desc',
    email:    'lisai.officialhrdept@gmail.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0f766e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    titleKey: 'contact.departments.d2title',
    descKey:  'contact.departments.d2desc',
    email:    'lisai.officialacctdept@gmail.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0f766e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
  },
  {
    titleKey: 'contact.departments.d3title',
    descKey:  'contact.departments.d3desc',
    email:    'lisai.officialopdept@gmail.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0f766e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L3 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6L12 2z"/>
      </svg>
    ),
  },
]

export default function DepartmentContacts() {
  const { t } = useLang()

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <p className="text-sm text-gray-500 mb-2">{t('contact.departments.label')}</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-teal-700">
            {t('contact.departments.subtitle')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {departments.map((dept) => (
            <div key={dept.email} className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow duration-200">
              <div className="w-11 h-11 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                {dept.icon}
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{t(dept.titleKey)}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{t(dept.descKey)}</p>
              </div>
              <a
                href={`mailto:${dept.email}`}
                className="mt-auto text-xs font-semibold text-teal-600 hover:text-teal-800 break-all transition-colors duration-200"
              >
                {dept.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
