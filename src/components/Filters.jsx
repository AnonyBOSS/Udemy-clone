import React from 'react'

export default function Filters({ categories, filters, setFilters }) {
  return (
    <div className="max-w-page mx-auto px-5 py-4">
      <div className="flex gap-4 items-center flex-wrap">
        <label className="text-sm text-slate-600">
          Category:
          <select
            value={filters.category || ''}
            onChange={e =>
              setFilters(f => ({ ...f, category: e.target.value ? Number(e.target.value) : null }))
            }
            className="ml-2 border rounded-md px-2 py-1 text-sm"
          >
            <option value="">All</option>
            {categories.map(c => (
              <option key={c.id} value={c.id}>
                {c.title}
              </option>
            ))}
          </select>
        </label>

        <label className="text-sm text-slate-600">
          Min Rating:
          <select
            value={filters.minRating}
            onChange={e => setFilters(f => ({ ...f, minRating: Number(e.target.value) }))}
            className="ml-2 border rounded-md px-2 py-1 text-sm"
          >
            <option value={0}>Any</option>
            <option value={4}>4.0+</option>
            <option value={4.5}>4.5+</option>
          </select>
        </label>

        <label className="text-sm text-slate-600">
          Sort:
          <select
            value={filters.sort}
            onChange={e => setFilters(f => ({ ...f, sort: e.target.value }))}
            className="ml-2 border rounded-md px-2 py-1 text-sm"
          >
            <option value="popular">Popular</option>
            <option value="newest">Newest</option>
            <option value="rating">Highest Rated</option>
            <option value="price_low">Price (low → high)</option>
            <option value="price_high">Price (high → low)</option>
          </select>
        </label>
      </div>
    </div>
  )
}
