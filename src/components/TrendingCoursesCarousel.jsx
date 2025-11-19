import React, { useRef, useState, useEffect } from 'react'

export default function TrendingCoursesCarousel({ items }) {
  const track = useRef(null)
  const [paused, setPaused] = useState(false)
  const [current, setCurrent] = useState(0)
  const total = items.length

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setCurrent(c => (c+1)%total), 3000)
    return () => clearInterval(id)
  }, [paused, total])

  useEffect(() => {
    if (!track.current) return
    const width = track.current.children[0]?.offsetWidth || 300
    track.current.scrollTo({ left: current * (width + 24), behavior: 'smooth' })
  }, [current])

  return (
    <section className="py-12 bg-white">
      <div className="max-w-page mx-auto px-5">
        <h2 className="text-2xl font-semibold mb-4">Trending courses</h2>
        <div
          ref={track}
          className="flex gap-6 overflow-x-auto py-4"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {items.map(it => (
            <div key={it.id} className="min-w-[280px] bg-white border rounded-lg p-4">
              <img src={it.image} alt={it.title} className="w-full h-40 object-cover rounded-md mb-3" />
              <h4 className="font-semibold">{it.title}</h4>
              <div className="text-sm text-slate-500">{it.author}</div>
              <div className="mt-3 flex items-center gap-2">
                <span className="px-2 py-1 bg-emerald-100 rounded text-emerald-700 text-xs">{it.badge}</span>
                <span className="text-xs text-slate-500">⭐ {it.rating}</span>
              </div>
              <div className="mt-3 font-semibold">{it.priceLabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
