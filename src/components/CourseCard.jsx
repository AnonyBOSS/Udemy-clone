import React from 'react'

export default function CourseCard({ course, onOpen }) {
  return (
    <article
      className="bg-white rounded-lg overflow-hidden card-shadow-subtle cursor-pointer hover:shadow-md transition-shadow"
      onClick={onOpen}
      role="button"
      tabIndex={0}
    >
      <div className="relative group">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-44 object-cover"
        />
        {course.badge && (
          <span
            className={`absolute top-3 left-3 text-xs font-semibold uppercase px-2 py-1 rounded-full ${
              course.badge === 'bestseller'
                ? 'bg-yellow-400 text-slate-800'
                : 'bg-emerald-500 text-white'
            }`}
          >
            {course.badge === 'bestseller' ? 'Bestseller' : 'New'}
          </span>
        )}

        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button className="bg-white text-sm px-3 py-2 rounded-md">Preview</button>
        </div>
      </div>

      <div className="p-4 flex flex-col course-card-body border-t border-slate-100">
        <h3 className="font-semibold text-sm text-slate-900 leading-tight">
          {course.title}
        </h3>
        <p className="text-xs text-slate-500 mt-2">{course.author}</p>
        <div className="mt-auto flex items-center text-xs text-slate-500 gap-3">
          <span>⭐ {course.rating}</span>
          <span>• {course.students} students</span>
          <span className="ml-auto font-semibold text-slate-800">
            {course.priceLabel}
          </span>
        </div>
      </div>
    </article>
  )
}
