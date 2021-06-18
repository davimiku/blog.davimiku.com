import { Card } from 'components/cards/card'
import { GitHubRepository } from 'types/github'
import { ProjectInfo } from 'types/projects'

export type ProjectCardProps = {
  repo: GitHubRepository
  projectInfo: ProjectInfo
}

/*

technologies
topics learned
tagline
*/

export function ProjectCard({ repo, projectInfo }: ProjectCardProps) {
  return (
    <Card>
      <Card.Header>
        <Card.Title title={repo.name} />
      </Card.Header>
      <Card.Body>
        <p>{projectInfo.tagline}</p>
      </Card.Body>
      <Card.Footer>
        <a href={repo.html_url} target='_blank' rel='noreferrer'>
          <span className='fab fa-github'>&nbsp;</span>
          {repo.full_name}
        </a>
      </Card.Footer>
    </Card>
  )
}
