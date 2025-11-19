import React from 'react'

export default function MegaMenu() {
  const items = [
    ['Development','Web, Mobile, Programming'],
    ['Business','Finance, Entrepreneurship'],
    ['IT & Software','Cloud, Security'],
    ['Design','UX & Graphic Design'],
    ['Marketing','SEO & Social Media'],
    ['Data','AI & Machine Learning'],
    ['Personal Dev','Leadership & Productivity'],
    ['Photography','Photo & Video']
  ]

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-[920px]">
      <div className="grid grid-cols-4 gap-6">
        {items.map(([title, desc]) => (
          <div key={title}>
            <h4 className="font-semibold">{title}</h4>
            <p className="text-sm text-slate-500">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
