import React from 'react'

export default function Hero({ onSearch }) {
  return (
    <section className="pt-10 pb-8 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-page mx-auto px-5 flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
            Learn the skills to advance your career
          </h1>
          <p className="mt-4 text-slate-600">
            Courses from industry experts — new courses added every week.
          </p>

          <form
            onSubmit={e => {
              e.preventDefault()
              onSearch && onSearch(e.target.query.value)
            }}
            className="mt-6"
          >
            <div className="flex gap-3 max-w-3xl">
              <input
                name="query"
                placeholder='Try "python", "excel", or "design"'
                className="flex-1 px-4 py-4 border rounded-md text-sm"
              />
              <button className="bg-violet-600 text-white px-6 py-4 rounded-md font-medium">
                Search
              </button>
            </div>
          </form>

          <div className="flex gap-6 mt-5 text-sm text-slate-500">
            <div>120,000 online courses</div>
            <div>10M students</div>
            <div>Expert instructors</div>
          </div>
        </div>

        <div className="flex-1 hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=1000&q=60"
            alt="Learning"
            className="banner-hero"
          />
        </div>
      </div>
    </section>
  )
}
