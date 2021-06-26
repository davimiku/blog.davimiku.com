import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import { Project } from 'types/projects'
import { ExternalLink } from 'components/link/ExternalLink'
import { Card } from 'components/cards/card'

export type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card id={project.repo.name}>
      <Card.Header>
        <Card.Title title={project.name} />
      </Card.Header>
      <Card.Body>
        <ProjectCardBody {...project} />
      </Card.Body>
      <Card.Footer>
        <ExternalLink href={project.repo.url}>
          <FontAwesomeIcon icon={faGithub} />
          &nbsp;
          {project.repo.name}
        </ExternalLink>
      </Card.Footer>
    </Card>
  )
}

function ProjectCardBody(project: Project) {
  return (
    <>
      <p>{project.tagline}</p>
      <p>Technologies used:</p>
      <ul>
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
      <p>Topics explored:</p>
      <ul>
        {project.topics.map((topic) => (
          <li key={topic}>{topic}</li>
        ))}
      </ul>
    </>
  )
}
