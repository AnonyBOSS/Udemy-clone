import React, { useState, useEffect } from 'react'
import CourseCard from './CourseCard'

export default function CoursesGrid({ courses, onOpenCourse }) {
  const [page, setPage] = useState(1)
  const per = 6 // 3 columns * 2 rows
  const totalPages = Math.max(1, Math.ceil(courses.length / per))
  const slice = courses.slice((page - 1) * per, page * per)

  useEffect(() => setPage(1), [courses])

  return (
    <div className="max-w-page mx-auto px-5 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {slice.map(c => (
          <CourseCard key={c.id} course={c} onOpen={() => onOpenCourse(c)} />
        ))}
      </div>

      <div className="pagination-center">
        <button
          className="page-btn"
          disabled={page === 1}
          onClick={() => setPage(p => p - 1)}
        >
          Prev
        </button>
        <div className="text-sm text-slate-600">
          Page {page} of {totalPages}
        </div>
        <button
          className="page-btn"
          disabled={page === totalPages}
          onClick={() => setPage(p => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  )
}
