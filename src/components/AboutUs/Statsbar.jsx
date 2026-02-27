const stats = [
  { value: '5,000', label: 'Successful Projects' },
  { value: '5,000', label: 'Guards on Duty' },
  { value: '5,000', label: 'Happy Customers' },
]

export default function StatsBar() {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-center items-center divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center py-6 sm:py-0 sm:px-12 lg:px-16">
              <span className="text-teal-500 font-extrabold text-3xl">{stat.value}</span>
              <span className="text-gray-500 text-sm mt-1 text-center">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 border-t border-teal-200" />
    </section>
  )
}
