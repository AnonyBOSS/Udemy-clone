import React from 'react'

export default function CareerAccelerators({ items }) {
  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-page mx-auto px-5">
        <h2 className="text-3xl font-semibold mb-4">Ready to reimagine your career?</h2>
        <p className="text-slate-600 mb-6">Get the skills and real-world experience employers want with Career Accelerators.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map(i => (
            <div key={i.id} className="bg-white p-4 rounded-lg border">
              <img src={i.image} alt={i.title} className="w-full h-40 object-cover rounded-md mb-4" />
              <h4 className="font-semibold">{i.title}</h4>
              <div className="text-sm text-slate-500 mt-2">{i.meta.ratings} • {i.meta.hours}</div>
            </div>
          ))}
        </div>

        <a className="inline-block text-violet-600 font-semibold mt-6" href="#">All Career Accelerators →</a>
      </div>
    </section>
  )
}
