import React from 'react'
export default function Footer(){
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-page mx-auto px-5 py-6 flex flex-col md:flex-row justify-between text-sm text-slate-600 gap-4">
        <div>© {new Date().getFullYear()} Skillwise</div>
        <div>Terms • Privacy • Contact</div>
      </div>
    </footer>
  )
}
