import React from 'react'

export default function CourseModal({ course, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg w-11/12 md:w-4/5 lg:w-3/5 p-6 relative"
        onClick={e => e.stopPropagation()}
      >
        <button className="absolute top-4 right-4 text-xl" onClick={onClose}>
          ✕
        </button>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <img
              src={course.image}
              alt={course.title}
              className="rounded-md w-full h-40 object-cover"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold">{course.title}</h2>
            <p className="text-sm text-slate-500 mt-1">
              by {course.author} • {course.length}
            </p>
            <p className="mt-4 text-slate-700">{course.description}</p>

            <div className="mt-6 flex items-center gap-4">
              <div className="text-lg font-semibold">{course.priceLabel}</div>
              <button className="bg-violet-600 text-white px-4 py-2 rounded-md">
                Enroll now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
