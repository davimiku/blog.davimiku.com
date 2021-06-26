import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import { Card } from 'components/cards/card'
import { Project } from 'types/projects'
import React from 'react'
import { TechnologyBadge } from 'components/badges/technology'

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
        <a href={repo.url} target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faGithub} />
          &nbsp;
          {repo.name}
          &nbsp;
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </a>
      </Card.Footer>
    </Card>
  )
}
