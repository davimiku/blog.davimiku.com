import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

import { Project } from 'types/projects'
import { Card } from '../card'

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
        <a href={project.repo.url} target='_blank' rel='noreferrer'>
          <FontAwesomeIcon icon={faGithub} />
          &nbsp;
          {project.repo.path}
          &nbsp;
          <FontAwesomeIcon icon={faExternalLinkAlt} />
        </a>
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
