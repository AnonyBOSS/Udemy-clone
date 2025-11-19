import React from 'react'

export default function FooterMega() {
  const cols = [
    { title: 'About', links: ['About us','Careers','Contact us','Blog','Investors'] },
    { title: 'Discover', links: ['Get the app','Teach on Skillwise','Plans and Pricing','Affiliate','Help and Support'] },
    { title: 'Business', links: ['Skillwise Business','Enterprise solutions','Case studies'] },
    { title: 'Legal & Accessibility', links: ['Accessibility statement','Privacy policy','Sitemap','Terms'] }
  ]

  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-page mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-6">
        {cols.map((c, idx) => (
          <div key={idx}>
            <h4 className="text-white font-semibold mb-3">{c.title}</h4>
            <ul className="space-y-2">
              {c.links.map(l => <li key={l}><a className="text-slate-400">{l}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  )
}
