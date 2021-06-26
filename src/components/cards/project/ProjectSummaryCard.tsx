import { Card } from 'components/cards/card'
import { Project } from 'types/projects'

export type ProjectSummaryCardProps = {
  project: Project
}

export function ProjectSummaryCard({ project }: ProjectSummaryCardProps) {
  const { repo } = project
  return (
    <Card>
      <Card.Header>
        <Card.Title title={project.name} />
      </Card.Header>
      <Card.Body>
        <p>{project.tagline}</p>
      </Card.Body>
      <Card.Footer>
        <a href={repo.url} target='_blank' rel='noreferrer'>
          <span className='fab fa-github'>&nbsp;</span>
          {repo.name}
          <span className='fas fa-external-link-alt' />
        </a>
      </Card.Footer>
    </Card>
  )
}
