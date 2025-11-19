import React, { useState } from 'react'

export default function SearchBar({ onSearch }) {
  const [q, setQ] = useState('')

  function submit(e) {
    e.preventDefault()
    onSearch && onSearch(q)
  }

  return (
    <form onSubmit={submit} className="flex items-center gap-2">
      <input
        value={q}
        onChange={e => setQ(e.target.value)}
        placeholder="Search for anything"
        className="w-96 px-3 py-2 border rounded-md text-sm"
      />
      <button className="px-3 py-2 bg-slate-100 rounded-md text-sm">Search</button>
    </form>
  )
}
