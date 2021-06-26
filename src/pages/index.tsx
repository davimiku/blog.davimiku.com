import { CardGrid } from 'components/cards/card_grid'
import { ProjectSummaryCard } from 'components/cards/project/ProjectSummaryCard'
import { projects } from 'data'
import Layout from 'layouts'

/**
 * Component for the "home" page server at path '/'
 */
export default function Home() {
  return (
    <Layout title="David's Website" description='My Projects'>
      <h1>David's Portfolio</h1>

      <h2>About Me</h2>

      <h2>Projects</h2>
      <CardGrid
        cards={projects.map((project) => (
          <ProjectSummaryCard key={project.repo.name} project={project} />
        ))}
      />

      <h2>Blog posts</h2>
      <CardGrid cards={[]} />
    </Layout>
  )
}
