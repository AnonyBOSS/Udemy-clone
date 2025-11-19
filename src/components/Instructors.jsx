import React from 'react'

export default function Instructors({ instructors }) {
  function avatarFallback(name) {
    const safe = encodeURIComponent(name || 'User')
    return `https://ui-avatars.com/api/?name=${safe}&background=FFFFFF&color=111827&size=128&bold=true`
  }

  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-page mx-auto px-5">
        <h2 className="text-xl font-semibold mb-6">Top instructors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {instructors.map(i => (
            <div key={i.id} className="bg-white p-6 rounded-lg card-shadow-subtle text-center">
              <img
                src={i.avatar}
                alt={i.name}
                className="w-20 h-20 rounded-full mx-auto object-cover mb-3"
                onError={e => {
                  e.currentTarget.onerror = null
                  e.currentTarget.src = avatarFallback(i.name)
                }}
              />
              <h4 className="font-semibold">{i.name}</h4>
              <p className="text-sm text-slate-500">{i.title}</p>
              <p className="instructor-card-desc">{i.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
