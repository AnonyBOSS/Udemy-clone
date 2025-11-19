// src/components/Plans.jsx
import React from 'react'

export default function Plans({ items = [] }) {
  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-page mx-auto px-5">
        <h2 className="text-3xl font-extrabold mb-6">Grow your team's skills and your business</h2>
        <p className="text-slate-600 mb-8">
          Reach goals faster with one of our plans or programs. Try one free today or contact sales to learn more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((plan) => (
            <div key={plan.id} className="bg-white p-6 rounded-lg border">
              {/* top color bar */}
              <div
                className="h-2 rounded-t-lg"
                style={{ background: 'linear-gradient(90deg,#7c3aed,#a78bfa)' }}
              />
              <h3 className="text-xl font-semibold mt-4">{plan.title}</h3>
              <p className="text-sm text-slate-500">{plan.blurb}</p>

              <div className="mt-4">
                <button className="px-4 py-2 border rounded-md text-violet-600">{plan.cta}</button>
              </div>

              <div className="mt-6 font-semibold">{plan.price}</div>

              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {Array.isArray(plan.features) && plan.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-green-600 mt-0.5">✓</span>
                    <span>{f}</span>
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
