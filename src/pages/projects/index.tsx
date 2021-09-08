import { projects } from 'data'
import Layout from 'layouts'
import { ProjectDescription } from 'components/cards/project/ProjectDescription'

export default function Projects() {
  return (
    <Layout title='Projects' description='My Projects'>
      <h1>Projects</h1>
      {projects.map((project) => (
        <ProjectDescription key={project.repo.name} project={project} />
      ))}
    </Layout>
  )
}
