import { Project } from 'types/projects'
import styles from './Summaries.module.scss'

export type ProjectSummariesProps = {
  projects: Project[]
}

export function ProjectSummaries({ projects }: ProjectSummariesProps) {
  return (
    <ol className={styles['summary-list']}>
      {projects.map(project => (
        <li key={project.name} className={styles['summary']}>
          <header>
            <h2>
              <a href={project.repo.url}>{project.name}</a>
            </h2>
            {/* <p className='subtitle'>Published: {publishedOn}</p> */}
          </header>
          <p>{project.tagline}</p>
        </li>
      ))}
    </ol>
  )
}
