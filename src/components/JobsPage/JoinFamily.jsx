import { useNavigate } from 'react-router-dom'

export default function JoinFamily() {
  const navigate = useNavigate()

  return (
    <section className="bg-white py-16 sm:py-20 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
          Join the LISAI Family{' '}
          <span className="text-teal-500">Today</span>
        </h2>
        <p className="text-gray-500 text-sm mb-8">
          Be part of a team that has protected lives and assets across Metro Manila for over four decades.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://www.facebook.com/lisai86"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-block', backgroundColor: '#0f766e', color: 'white', fontSize: '14px', fontWeight: '600', padding: '14px 28px', borderRadius: '6px', textDecoration: 'none', cursor: 'pointer' }}
          >
            Learn More on Facebook
          </a>
          <button
            onClick={() => navigate('/apply/General%20Application')}
            style={{ backgroundColor: 'transparent', color: '#374151', fontSize: '14px', fontWeight: '600', padding: '14px 28px', borderRadius: '6px', border: '1px solid #d1d5db', cursor: 'pointer' }}
          >
            Apply for a Position
          </button>
        </div>
      </div>
    </section>
  )
}