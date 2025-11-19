import React, { useState } from 'react'

export default function CaseStudies({ caseStudies }) {
  const [index, setIndex] = useState(0)
  const current = caseStudies[index]
  return (
    <section className="py-12 bg-white">
      <div className="max-w-page mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <div className="text-sm text-slate-500 mb-2">{current.company}</div>
          <h2 className="text-3xl font-extrabold mb-6">{current.title}</h2>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <div className="text-4xl font-bold">{current.statA.value}</div>
              <div className="text-sm text-slate-500 mt-2">{current.statA.label}</div>
            </div>
            <div>
              <div className="text-4xl font-bold">{current.statB.value}</div>
              <div className="text-sm text-slate-500 mt-2">{current.statB.label}</div>
            </div>
          </div>

          <a className="inline-block bg-violet-600 text-white px-4 py-2 rounded-md" href={current.link}>Read full story →</a>

          <div className="flex items-center gap-3 mt-8">
            <button onClick={() => setIndex(i => Math.max(0, i-1))} className="w-10 h-10 rounded-full bg-white shadow">◀</button>
            <div className="flex gap-2 items-center">
              {caseStudies.map((_, i) => <button key={i} onClick={() => setIndex(i)} className={`w-3 h-3 rounded-full ${i===index ? 'bg-violet-600' : 'bg-slate-300'}`} />)}
            </div>
            <button onClick={() => setIndex(i => Math.min(caseStudies.length - 1, i+1))} className="w-10 h-10 rounded-full bg-white shadow">▶</button>
          </div>
        </div>

        <div>
          <img src={current.image} alt={current.title} className="w-full rounded-lg shadow-lg object-cover" />
        </div>
      </div>
    </section>
  )
}
