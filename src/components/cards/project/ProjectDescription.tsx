import { FaGithub } from 'react-icons/fa'

import { Project } from 'types/projects'
import { ExternalLink } from 'components/link/ExternalLink'
import { Card } from 'components/cards/card'

import styles from './ProjectDescription.module.scss'

export type ProjectCardProps = {
  project: Project
}

export function ProjectDescription({ project }: ProjectCardProps) {
  return (
    <article className={styles['project-description']}>
      <Card.Header>
        <Card.Title headingLevel='h2' title={project.name} />
      </Card.Header>
      <Card.Body>
        <ProjectDescriptionBody {...project} />
      </Card.Body>
      <Card.Footer>
        <ExternalLink href={project.repo.url}>
          <FaGithub />
          &nbsp;
          {project.repo.name}
        </ExternalLink>
      </Card.Footer>
    </article>
  )
}

function ProjectDescriptionBody(project: Project) {
  return (
    <>
      <p>{project.tagline}</p>
      {project.description ? <p>{project.description}</p> : null}
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
