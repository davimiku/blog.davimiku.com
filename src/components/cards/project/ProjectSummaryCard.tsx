import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { Card } from 'components/cards/card'
import { Project } from 'types/projects'
import React from 'react'
import { TechnologyBadge } from 'components/badges/technology'
import { ExternalLink } from 'components/link/ExternalLink'

export type ProjectSummaryCardProps = {
  project: Project
}

export function ProjectSummaryCard({ project }: ProjectSummaryCardProps) {
  const { repo } = project
  return (
    <Card>
      <Card.Header>
        <Card.Title
          title={project.name}
          href={`/projects#${project.repo.name}`}
        />
      </Card.Header>
      <Card.Body>
        <p>{project.tagline}</p>
        <p>
          {project.technologies.map((technology) => (
            <TechnologyBadge key={technology} technology={technology} />
          ))}
        </p>
      </Card.Body>
      <Card.Footer>
        <ExternalLink href={repo.url}>
          <FontAwesomeIcon icon={faGithub} />
          &nbsp;
          {repo.name}
        </ExternalLink>
      </Card.Footer>
    </Card>
  )
}
