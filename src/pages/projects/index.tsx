import { projects } from 'data'
import { ProjectCard } from 'components/cards/project'
import Layout from 'layouts'

export default function Projects() {
  return (
    <Layout title='Projects' description='My Projects'>
      <h1>Projects</h1>
      {projects.map((project) => (
        <ProjectCard key={project.repo.name} project={project} />
      ))}
    </Layout>
  )
}
