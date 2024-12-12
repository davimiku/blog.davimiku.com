import { ProjectSummaries } from 'components/summaries/ProjectSummaries'
import { projects } from 'data/projects'
import Layout from 'layouts'

export default function Projects() {
  return (
    <Layout title='Projects' description='My current projects'>
      <h1>Projects</h1>
      <ProjectSummaries projects={projects} />
    </Layout>
  )
}
