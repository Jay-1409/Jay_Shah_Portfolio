import { Project } from '@/app/types/projects'
import Image from 'next/image'

type ProjectCardProps = {
  project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const technologies = project.technologies.map((technology) => technology.name).join(', ')

  return (
    <div className="rounded-lg flex flex-col bg-gray-800 overflow-hidden border border-gray-700 hover:border-emerald-500 opacity-80 hover:opacity-100 transition-all group max-w-sm">
      {/* Smaller square image */}
      <div className="w-full aspect-square overflow-hidden">
        <Image
          src={project.thumbnail.url}
          alt={`Project Image ${project.title}`}
          width={400}
          height={400}
          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
          unoptimized
        />
      </div>

      {/* Compact text */}
      <div className="flex-1 flex flex-col p-4">
        <strong className="font-medium text-gray-50/90 text-lg group-hover:text-emerald-500 transition-all">
          {project.title}
        </strong>
        <p className="mt-1 text-gray-400 text-sm line-clamp-3">
          {project.shortDescription}
        </p>
        <span className="text-gray-300 text-xs font-medium block mt-auto truncate">
          {technologies}
        </span>
      </div>
    </div>
  )
}
