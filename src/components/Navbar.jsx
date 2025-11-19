import React, { useState } from 'react'
import MegaMenu from './MegaMenu'
import SearchBar from './SearchBar'

export default function Navbar({ onSearch }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white border-b sticky top-0 z-40">
      <div className="max-w-page mx-auto px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="text-2xl font-extrabold text-violet-600">Skillwise</div>

          <div className="relative">
            <button
              className="text-sm font-medium"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              Categories ▾
            </button>
            {open && (
              <div
                className="absolute top-8 left-0 z-50"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                <MegaMenu />
              </div>
            )}
          </div>

          <a className="hidden md:inline text-sm text-slate-600" href="#">Business</a>
          <a className="hidden md:inline text-sm text-slate-600" href="#">Teach</a>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <SearchBar onSearch={onSearch} />
          </div>
          <a className="text-sm text-slate-600" href="#">Log in</a>
          <button className="bg-violet-600 text-white px-4 py-2 rounded-md text-sm">Sign up</button>
        </div>
      </div>
    </header>
  )
}
