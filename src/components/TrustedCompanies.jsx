import React, { useEffect, useRef, useState } from 'react'

export default function TrustedCompanies({ companies, interval = 3000 }) {
  const trackRef = useRef(null)
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = companies.length
  const itemWidthRef = useRef(0)

  useEffect(() => {
    function compute() {
      const track = trackRef.current
      if (!track || !track.children.length) return
      const first = track.children[0]
      const gap = parseInt(getComputedStyle(track).gap || 16, 10)
      itemWidthRef.current = first.offsetWidth + gap
    }
    compute()
    window.addEventListener('resize', compute)
    return () => window.removeEventListener('resize', compute)
  }, [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      setCurrent(c => (c + 1) % total)
    }, interval)
    return () => clearInterval(id)
  }, [paused, total, interval])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const width = itemWidthRef.current || (track.children[0]?.offsetWidth || 0)
    track.scrollTo({ left: current * width, behavior: 'smooth' })
  }, [current])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const handler = e => {
      if (e.key === 'ArrowRight') setCurrent(c => Math.min(c + 1, total - 1))
      if (e.key === 'ArrowLeft') setCurrent(c => Math.max(c - 1, 0))
    }
    el.addEventListener('keydown', handler)
    return () => el.removeEventListener('keydown', handler)
  }, [total])

  return (
    <section className="py-10 bg-white">
      <div className="max-w-page mx-auto px-5">
        <h2 className="text-xl font-semibold mb-4">Trusted by teams worldwide</h2>

        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto py-3"
          role="list"
          tabIndex={0}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {companies.map((c, idx) => (
            <div
              key={c.id}
              className="min-w-[150px] bg-white rounded-md p-3 flex items-center justify-center card-shadow-subtle"
              role="listitem"
              aria-current={current === idx}
            >
              <img
                src={c.logo}
                alt={c.name}
                className="max-h-10 object-contain"
                onError={e => {
                  e.currentTarget.style.display = 'none'
                  if (!e.currentTarget.parentElement.querySelector('.company-fallback')) {
                    const fallback = document.createElement('div')
                    fallback.className = 'company-fallback text-slate-700 font-semibold'
                    fallback.textContent = c.name
                    e.currentTarget.parentElement.appendChild(fallback)
                  }
                }}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {companies.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === current ? 'bg-slate-800' : 'bg-slate-300'
              }`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
