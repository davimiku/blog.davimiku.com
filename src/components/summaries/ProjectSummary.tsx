import { Project } from 'types/projects'

export type ProjectSummaryProps = {
  project: Project
}

export function ProjectSummary({ project }: ProjectSummaryProps) {
  return (
    <li>
      <header>
        <h2>
          <a href={project.repo.url}>{project.name}</a>
        </h2>
        {/* <p className='subtitle'>Published: {publishedOn}</p> */}
      </header>
      <p>{project.tagline}</p>
    </li>
  )
}
