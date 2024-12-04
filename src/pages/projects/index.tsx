import { projects } from 'data/projects'
import Layout from 'layouts'
import { ProjectSummaries } from 'components/summaries/ProjectSummaries'

export default function Projects() {
  return (
    <Layout title='Projects' description='My Projects'>
      <h1>Projects</h1>
      <ProjectSummaries projects={projects} />
    </Layout>
  )
}
