import { BlogSummaryCard } from 'components/cards/blog'
import { CardGrid } from 'components/cards/card_grid'
import { ProjectSummaryCard } from 'components/cards/project/ProjectSummaryCard'
import { ExternalLink } from 'components/link/ExternalLink'
import { projects, blogsMeta } from 'data'
import Layout from 'layouts'
import { shuffle } from 'utils/shuffle'

/**
 * Component for the "home" page server at path '/'
 */
export default function Home() {
  shuffle(projects)
  const projectCards = projects
    .slice(0, 2)
    .map(project => <ProjectSummaryCard key={project.repo.name} project={project} />)

  const blogCards = blogsMeta.map(meta => <BlogSummaryCard key={meta.slug} meta={meta} />)
  return (
    <Layout title="David's Website" description='My Projects'>
      <h1>David's Website</h1>

      <p>
        Hello! My name is David and I am a software developer who focuses on full-stack web
        development. I frequently work with Typescript, though I enjoy learning and using new tools.
        Besides Typescript, I often work with Python and Rust.
      </p>

      <h2>About Me</h2>
      <p>At my day job, I develop process automation tools for healthcare providers.</p>
      <p>
        I strive for a deep understanding of any topic that I am studying. Recently, I have become
        interested in the topic of <em>compilers and interpreters</em>. The current project that I
        am focusing on is an implementation of{' '}
        <ExternalLink href='https://jsonata.org'>JSONata Query and Transformation</ExternalLink>{' '}
        language in Rust. I have found that studying programming languages has brought me a deeper
        understanding of how software works.
      </p>

      <h2>Projects</h2>
      <CardGrid cards={projectCards} />
      {/* ButtonLink "See more..." */}

      <h2>Blog posts</h2>
      <CardGrid cards={blogCards} />
      {/* ButtonLink "See more..." */}
    </Layout>
  )
}
