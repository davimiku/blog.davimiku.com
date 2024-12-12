import { FaGithub } from 'react-icons/fa'

import { TechnologyBadge } from 'components/badges/technology'
import { Card } from 'components/cards/card'
import { ExternalLink } from 'components/link/ExternalLink'
import { Project } from 'types/projects'

export type ProjectSummaryCardProps = {
  project: Project
}

export function ProjectSummaryCard({ project }: ProjectSummaryCardProps) {
  const { repo } = project
  return (
    <Card>
      <Card.Header>
        <Card.Title title={project.name} href={`/projects#${project.repo.name}`} />
      </Card.Header>
      <Card.Body>
        <p>{project.tagline}</p>
        <p>
          {project.technologies.map(technology => (
            <TechnologyBadge key={technology} technology={technology} />
          ))}
        </p>
      </Card.Body>
      <Card.Footer>
        <ExternalLink href={repo.url}>
          <FaGithub />
          &nbsp;
          {repo.name}
        </ExternalLink>
      </Card.Footer>
    </Card>
  )
}
