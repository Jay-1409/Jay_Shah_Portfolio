import { HorizontalDivider } from '@/app/components/divider/horizontal'
import { SectionsTitle } from '@/app/components/sections-title'
import { ProjectCard } from './project-card'
import { Link } from '@/app/components/link'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Project } from '@/app/types/projects'
import { Button } from '@/app/components/button'

type HighlightedProjectsProps = {
  projects: Project[]
}

export const HighlightedProjects = ({ projects }: HighlightedProjectsProps) => {
  return (
    <section className="container py-16">
      <SectionsTitle subtitle="highlights" title="Featured Projects" />
      <HorizontalDivider className="mb-16" />

      <div className="space-y-16">
        {projects?.slice(0, 2).map((project, index) => (
          <div key={project.slug} className="space-y-8">
            <ProjectCard project={project} />

            {/* Divider full width but only between projects */}
            {index < projects.slice(0, 2).length - 1 && (
              <div className="w-full">
                <HorizontalDivider />
              </div>
            )}
          </div>
        ))}

        {/* Divider above Interested section */}
        <HorizontalDivider className="mt-8" />

        <p className="flex items-center gap-4">
          <span className="text-gray-400">Interested?</span>
          <Link className="inline-flex" href="/projects">
            <Button className="w-max shadow-button">
              See all
              <HiArrowNarrowRight />
            </Button>
          </Link>
        </p>
      </div>
    </section>
  )
}

