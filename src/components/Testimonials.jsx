import React from 'react'

export default function Testimonials({ items }) {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-page mx-auto px-5">
        <h2 className="text-3xl font-semibold mb-6">Join others transforming their lives through learning</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {items.map(t => (
            <div key={t.id} className="bg-white border rounded-lg p-6 shadow-sm">
              <div className="text-4xl">“</div>
              <p className="text-slate-700 my-4">{t.quote}</p>
              {t.author && <div className="flex items-center gap-3 mt-4">
                <img src={`https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=60`} alt={t.author} className="w-10 h-10 rounded-full object-cover"/>
                <div>
                  <div className="font-semibold">{t.author}</div>
                  <div className="text-sm text-slate-500">{t.title}</div>
                </div>
              </div>}
              <a className="text-violet-600 mt-4 inline-block">{t.linkLabel} →</a>
            </div>
          ))}
        </div>
        <a className="text-violet-600 block mt-6">View all stories →</a>
      </div>
    </section>
  )
}
