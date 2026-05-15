export default function CohortBar() {
  const items = [
    { label: 'Next Cohort', value: 'May 20' },
    { label: 'Spots Available', value: '10' },
    { label: 'Investment', value: 'SGD 1,499' },
    { label: 'Success Rate', value: '85%' },
  ]

  return (
    <section className="bg-navy text-white py-8 px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-aisg-red/15 via-transparent to-aisg-red-light/10" />
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-8 md:gap-12 max-w-5xl mx-auto">
        {items.map((item, i) => (
          <div key={item.label} className="flex items-center gap-8 md:gap-12">
            <div className="text-center">
              <div className="text-xs uppercase tracking-wider opacity-70 mb-1">{item.label}</div>
              <div className="font-space text-2xl font-bold">{item.value}</div>
            </div>
            {i < items.length - 1 && (
              <div className="hidden md:block w-px h-10 bg-white/20" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
