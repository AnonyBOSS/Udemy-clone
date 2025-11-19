import React, { useState, useMemo } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Filters from './components/Filters'
import CoursesGrid from './components/CoursesGrid'
import Instructors from './components/Instructors'
import TrustedCompanies from './components/TrustedCompanies'
import CaseStudies from './components/CaseStudies'
import PopularSkills from './components/PopularSkills'
import ReportCTA from './components/ReportCTA'
import Plans from './components/Plans'
import TrendingCoursesCarousel from './components/TrendingCoursesCarousel'
import CareerAccelerators from './components/CareerAccelerators'
import CertificationPromo from './components/CertificationPromo'
import Testimonials from './components/Testimonials'
import FooterMega from './components/FooterMega'
import Footer from './components/Footer'
import CourseModal from './components/CourseModal'

import {
  courses as initialCourses,
  categories,
  companies,
  instructors,
  caseStudies,
  popularSkills,
  reportCard,
  plans,
  trendingCourses,
  careerAccelerators,
  certPromo,
  testimonials
} from './data/data'

export default function App() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState(null)
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [filters, setFilters] = useState({ category: null, minRating: 0, sort: 'popular' })

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    let arr = initialCourses.filter(c => {
      const matchesQuery =
        !q ||
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.author.toLowerCase().includes(q)
      const matchesCategory =
        !filters.category || c.categoryId === filters.category || activeCategory === c.categoryId
      const matchesRating = !filters.minRating || c.rating >= filters.minRating
      return matchesQuery && matchesCategory && matchesRating
    })

    if (filters.sort === 'newest') {
      arr.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    } else if (filters.sort === 'rating') {
      arr.sort((a, b) => b.rating - a.rating)
    } else if (filters.sort === 'price_low') {
      arr.sort((a, b) => a.price - b.price)
    } else if (filters.sort === 'price_high') {
      arr.sort((a, b) => b.price - a.price)
    } else {
      arr.sort((a, b) => {
        const num = s => Number(String(s).replace(/[^0-9]/g, '')) || 0
        return num(b.students) - num(a.students)
      })
    }
    return arr
  }, [query, filters, activeCategory])

  return (
    <div>
      <Navbar onSearch={q => setQuery(q)} />
      <main>
        <Hero onSearch={q => setQuery(q)} />

        <CaseStudies caseStudies={caseStudies} />

        <PopularSkills data={popularSkills} />

        <ReportCTA card={reportCard} />

        <Plans items={plans} />

        <Filters categories={categories} filters={filters} setFilters={setFilters} />

        <section>
          <div className="max-w-page mx-auto px-5">
            <h2 className="text-2xl font-semibold mb-4">Popular courses</h2>
          </div>
          <CoursesGrid courses={filtered} onOpenCourse={setSelectedCourse} />
        </section>

        <TrendingCoursesCarousel items={trendingCourses} />

        <CareerAccelerators items={careerAccelerators} />

        <CertificationPromo promo={certPromo} />

        <Instructors instructors={instructors} />

        <Testimonials items={testimonials} />

        <TrustedCompanies companies={companies} />

        <FooterMega />

        <Footer />
      </main>

      {selectedCourse && (
        <CourseModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />
      )}
    </div>
  )
}
