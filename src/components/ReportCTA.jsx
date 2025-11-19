import React from 'react'


export default function ReportCTA(props) {
  const card = props && props.card ? props.card : {}

  const title = card.title || 'Report title'
  const body = card.body || 'Short description about the report.'
  const image = card.image || 'https://images.unsplash.com/photo-1557800636-894a64c1696f?w=1200&q=60'
  const cta = (card.cta && card.cta.label) ? card.cta : { label: 'Download now', link: '#' }

  return (
    <section className="py-12 bg-white">
      <div className="max-w-page mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-3xl font-extrabold mb-4">{title}</h3>
          <p className="text-slate-600 mb-6">{body}</p>
          <a
            className="inline-block border border-violet-600 text-violet-600 px-4 py-2 rounded-md"
            href={cta.link || '#'}
            onClick={(e) => {
              if (!cta.link || cta.link === '#') {
                e.preventDefault()

              }
            }}
          >
            {cta.label} →
          </a>
        </div>

        <div>
          <img src={image} alt={title} className="rounded-lg shadow-lg object-cover w-full" />
        </div>
      </div>
    </section>
  )
}
