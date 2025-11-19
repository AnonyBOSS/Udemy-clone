import React from 'react'

export default function PopularSkills({ data }) {
  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-page mx-auto px-5">
        <h2 className="text-3xl font-extrabold mb-4">Popular Skills</h2>
        <hr className="border-slate-200 mb-6" />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-3">{data.hero.title}</h3>
            <a href={data.hero.ctaLink} className="text-violet-600 font-semibold mb-2 inline-block">{data.hero.ctaLabel} →</a>
            <div className="text-sm text-slate-500 mt-3">{data.hero.blurb}</div>
            <button className="mt-6 px-4 py-3 border rounded-md text-violet-600">Show all trending skills ↗</button>
          </div>

          {data.columns.map((col, i) => (
            <div key={i}>
              <h4 className="text-xl font-bold mb-3">{col.heading}</h4>
              <ul className="space-y-3">
                {col.items.map(it => (
                  <li key={it.title}>
                    <a className="text-violet-600 font-semibold">{it.title} <span className="text-sm text-slate-400 block mt-1">{it.count} learners</span></a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
