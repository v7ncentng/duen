import Link from 'next/link'
import Image from 'next/image'
import { projects, semesterShortLabel } from './DATAprojects'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DUEN - Projects',
  description: 'DUEN cohort projects by semester',
}

export default function ProjectsPage() {
  return (
    <main className="flex flex-col min-h-screen bg-white">
      {/* Hero - minimal like reference */}
      <section className="w-full px-6 md:px-16 lg:px-32 py-12 md:py-16">
        <h1 className="text-duen-purple font-bold text-4xl md:text-5xl lg:text-6xl">
          Our projects
        </h1>
        <p className="text-gray-600 text-lg mt-3 max-w-xl">
          Hardware and software built by DUEN cohorts each quarter.
        </p>
      </section>

      {/* Carousel - large cards with tagline, name, button, and visual (like Clubly/Moober) */}
      <section className="flex-1 w-full overflow-hidden">
        <div className="overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth flex gap-6 pl-6 pr-12 md:pl-16 md:pr-24 lg:pl-32 lg:pr-32 pb-8 md:gap-8" style={{ scrollbarWidth: 'thin' }}>
          {projects.map((project, index) => {
            const isDark = index % 2 === 0
            return (
              <div
                key={project.slug}
                className="flex-shrink-0 w-[88vw] max-w-4xl snap-center rounded-2xl overflow-hidden"
              >
                <article
                  className={`min-h-[380px] md:min-h-[420px] rounded-2xl flex flex-col md:flex-row relative overflow-hidden ${
                    isDark
                      ? 'bg-gradient-to-br from-duen-purple-400 to-duen-purple-500 text-white'
                      : 'bg-gray-50 text-duen-purple border border-gray-200'
                  }`}
                >
                  {isDark && (
                    <div className="absolute inset-0 pointer-events-none rounded-2xl" style={{ background: 'radial-gradient(ellipse 70% 60% at 85% 50%, rgba(199,170,114,0.12) 0%, transparent 55%)' }} />
                  )}
                  {/* Left: tagline, name, button */}
                  <div className="flex-1 flex flex-col justify-end p-8 md:p-10 relative z-10">
                    <p className={`text-sm font-medium mb-1 ${isDark ? 'text-duen-gold-400' : 'text-duen-gold-500'}`}>
                      {semesterShortLabel(project.semester)}
                    </p>
                    <p className={`text-base mb-3 ${isDark ? 'text-white/90' : 'text-gray-600'}`}>
                      {project.shortDescription}
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                      {project.title}
                    </h2>
                    <Link
                      href={`/projects/${project.slug}`}
                      className={`inline-flex items-center gap-2 w-fit font-semibold px-5 py-2.5 rounded-lg transition ${
                        isDark
                          ? 'bg-white text-duen-purple hover:bg-duen-gold-100'
                          : 'bg-duen-purple-500 text-white hover:bg-duen-purple-400'
                      }`}
                    >
                      Learn more
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                  {/* Right: visual - project image or placeholder */}
                  <div className="w-full md:w-2/5 min-h-[200px] md:min-h-full relative z-10 flex items-center justify-center p-6 md:p-8">
                    {project.imagePath ? (
                      <div className="relative w-full aspect-video md:aspect-square max-w-sm rounded-xl overflow-hidden shadow-lg">
                        <Image
                          src={project.imagePath}
                          alt={project.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 80vw, 320px"
                        />
                      </div>
                    ) : (
                      <div
                        className={`w-full aspect-video md:aspect-square max-w-sm rounded-xl flex items-center justify-center ${
                          isDark
                            ? 'bg-white/10 border border-white/20'
                            : 'bg-duen-purple-100/30 border border-duen-purple-200/50'
                        }`}
                      >
                        <span className={`text-sm ${isDark ? 'text-white/60' : 'text-duen-purple-200'}`}>
                          {semesterShortLabel(project.semester)}
                        </span>
                      </div>
                    )}
                  </div>
                </article>
              </div>
            )
          })}
          {/* Scroll hint - arrow */}
          <div className="flex-shrink-0 w-12 flex items-center justify-center self-center opacity-50" aria-hidden>
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
        <p className="text-center text-gray-500 text-sm mt-2 px-4">Scroll or swipe for more</p>
      </section>

      {/* Bottom - two smaller cards like reference */}
      <section className="w-full px-6 md:px-16 lg:px-32 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
          <Link
            href="/join"
            className="group rounded-2xl overflow-hidden border border-gray-200 bg-duen-purple-500 text-white hover:border-duen-gold-400 hover:shadow-lg transition"
          >
            <div className="p-8">
              <h2 className="text-xl md:text-2xl font-bold text-duen-gold-200">Have a project idea?</h2>
              <p className="mt-2 text-white/90">Join a cohort and build with us. Recruitment every Fall and Spring.</p>
              <span className="inline-flex items-center gap-2 mt-4 font-semibold text-duen-gold-300 group-hover:gap-3 transition">
                Join DUEN
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </span>
            </div>
          </Link>
          <div className="rounded-2xl overflow-hidden border border-gray-200 bg-gray-100 flex items-center justify-center min-h-[180px]">
            <div className="text-center p-8">
              <p className="text-duen-purple font-bold text-lg">Building for Davis</p>
              <p className="text-gray-500 text-sm mt-1">Cohort projects since Spring 2023</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
