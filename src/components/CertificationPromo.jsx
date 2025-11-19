import React from 'react'

export default function CertificationPromo({ promo }) {
  return (
    <section className="py-12 bg-slate-900 text-white">
      <div className="max-w-page mx-auto px-5 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
        <div>
          <h3 className="text-3xl font-extrabold mb-4">{promo.title}</h3>
          <p className="mb-6 text-slate-300">{promo.body}</p>
          <a className="text-white underline" href="#">Explore certifications and vouchers →</a>
        </div>

        <div className="lg:col-span-2 flex gap-6">
          {promo.cards.map(c => (
            <div key={c.id} className="bg-slate-800 p-4 rounded-xl w-full">
              <img src={c.image} alt={c.title} className="w-full h-28 object-cover rounded-md mb-3" />
              <div className="font-semibold">{c.title}</div>
              <div className="text-sm text-slate-300">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
