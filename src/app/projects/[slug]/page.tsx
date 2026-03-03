import Banner from '../../components/banner'
import Link from 'next/link'
import Image from 'next/image'
import { getProjectBySlug, projects, semesterShortLabel } from '../DATAprojects'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return projects.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)
  if (!project) return { title: 'DUEN - Project' }
  return {
    title: `DUEN - ${project.title}`,
    description: project.shortDescription,
  }
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2 className="text-duen-purple font-bold text-2xl border-b-2 border-duen-gold-400 pb-2 mb-4">
        {title}
      </h2>
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </section>
  )
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug)
  if (!project) notFound()

  const hasTeam = project.teamMembers?.length || project.teamImagePath
  const hasSoftware = project.softwareUsed?.length
  const hasTimeline = project.timeline?.length
  const hasDesign = project.designProcess?.length
  const hasChallenges = project.challenges?.length
  const hasMaterials = (project.materials?.length || project.cost)
  const hasLinks = project.links?.length
  const hasUserGuide = project.userGuide?.length
  const hasMaintenance = project.maintenance?.length

  const sidebarSections = [
    { id: 'overview', label: 'Overview', show: true },
    { id: 'team', label: 'Team', show: hasTeam },
    { id: 'software', label: 'Software used', show: hasSoftware },
    { id: 'timeline', label: 'Timeline', show: hasTimeline },
    { id: 'design', label: 'Design & manufacturing', show: hasDesign },
    { id: 'challenges', label: 'Challenges & resolutions', show: hasChallenges },
    { id: 'materials', label: 'Materials & cost', show: hasMaterials },
    { id: 'user-guide', label: 'User guide', show: hasUserGuide },
    { id: 'maintenance', label: 'Maintenance', show: hasMaintenance },
    { id: 'links', label: 'Links & documents', show: hasLinks },
  ].filter(s => s.show)

  return (
    <main className="flex flex-col items-center min-h-screen bg-duen-white">
      <Banner word={project.slug.replace(/-/g, ' ')} />

      <div className="w-full flex flex-col lg:flex-row lg:items-start md:px-8 lg:px-20 xl:px-32 py-12 gap-12">
        {/* Sidebar - sticky on large screens */}
        <aside className="lg:w-56 xl:w-64 flex-shrink-0 lg:sticky lg:top-24 order-2 lg:order-1">
          <div className="border border-gray-200 rounded-xl p-4 bg-gray-50/50">
            <Link href="/projects" className="text-duen-gold-500 hover:underline text-sm font-medium inline-flex items-center gap-1 mb-4">
              ← Back to Projects
            </Link>
            <p className="text-duen-purple font-bold text-sm uppercase tracking-wide mb-3">On this page</p>
            <nav className="flex flex-col gap-1">
              {sidebarSections.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="text-gray-600 hover:text-duen-purple text-sm py-1 hover:underline"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <div className="flex-1 min-w-0 order-1 lg:order-2 space-y-14">
          <header>
            <p className="text-duen-gold-500 font-semibold">{project.semester} · {semesterShortLabel(project.semester)}</p>
            <h1 className="text-duen-purple font-bold text-3xl md:text-4xl mt-1">{project.title}</h1>
            {project.cohortName && (
              <p className="text-gray-600 mt-2">Cohort: {project.cohortName}</p>
            )}
          </header>

          <Section id="overview" title="Overview">
            <p className="text-lg">{project.description}</p>
            {project.highlights && project.highlights.length > 0 && (
              <ul className="list-disc list-inside mt-4 space-y-1">
                {project.highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </Section>

          {hasTeam && (
            <Section id="team" title="Team">
              {/* Team photo placeholder / image */}
              <div className="mb-4">
                {project.teamImagePath ? (
                  <div className="relative w-full max-w-xl aspect-video rounded-lg overflow-hidden bg-gray-200">
                    <Image
                      src={project.teamImagePath}
                      alt={`${project.title} team`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 640px"
                    />
                  </div>
                ) : (
                  <div className="w-full max-w-xl aspect-video rounded-lg bg-gray-200 flex items-center justify-center text-gray-400 border-2 border-dashed border-gray-300">
                    <span>Team photo</span>
                  </div>
                )}
              </div>
              {project.teamMembers && project.teamMembers.length > 0 && (
                <p className="text-gray-700">
                  <span className="font-semibold text-duen-purple">Team members: </span>
                  {project.teamMembers.join(', ')}
                </p>
              )}
            </Section>
          )}

          {hasSoftware && (
            <Section id="software" title="Software used">
              <ul className="list-disc list-inside space-y-1">
                {project.softwareUsed!.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </Section>
          )}

          {hasTimeline && (
            <Section id="timeline" title="Timeline">
              <ul className="space-y-3">
                {project.timeline!.map((entry, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="font-semibold text-duen-gold-500 shrink-0">{entry.date}</span>
                    <span>{entry.description}</span>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {hasDesign && (
            <Section id="design" title="Design & manufacturing">
              <ul className="list-disc list-inside space-y-2">
                {project.designProcess!.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </Section>
          )}

          {hasChallenges && (
            <Section id="challenges" title="Challenges & resolutions">
              <ul className="space-y-4">
                {project.challenges!.map((c, i) => (
                  <li key={i} className="pl-4 border-l-2 border-duen-gold-300">
                    <p className="font-medium text-duen-purple">Problem: {c.problem}</p>
                    <p className="mt-1 text-gray-600">Solution: {c.solution}</p>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {hasMaterials && (
            <Section id="materials" title="Materials & cost">
              {project.materials && project.materials.length > 0 && (
                <ul className="list-disc list-inside space-y-1 mb-4">
                  {project.materials.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {project.cost && (
                <p className="font-semibold text-duen-purple">Total cost: {project.cost}</p>
              )}
            </Section>
          )}

          {hasUserGuide && (
            <Section id="user-guide" title="User guide">
              <ul className="list-disc list-inside space-y-2">
                {project.userGuide!.map((step, i) => (
                  <li key={i}>{step}</li>
                ))}
              </ul>
            </Section>
          )}

          {hasMaintenance && (
            <Section id="maintenance" title="Maintenance">
              <ul className="list-disc list-inside space-y-1">
                {project.maintenance!.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </Section>
          )}

          {hasLinks && (
            <Section id="links" title="Links & documents">
              <ul className="space-y-2">
                {project.links!.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.url.startsWith('/') ? encodeURI(link.url) : link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-duen-gold-500 hover:underline inline-flex items-center gap-1"
                    >
                      {link.label}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </a>
                  </li>
                ))}
              </ul>
            </Section>
          )}
        </div>
      </div>
    </main>
  )
}
