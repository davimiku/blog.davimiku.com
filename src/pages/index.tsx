import { BlogSummaryCard } from 'components/cards/blog'
import { CardGrid } from 'components/cards/card_grid'
import { ProjectSummaryCard } from 'components/cards/project/ProjectSummaryCard'
import { ButtonLink } from 'components/link/ButtonLink'
import { ExternalLink } from 'components/link/ExternalLink'
import { projects } from 'data'
import Layout from 'layouts'
import React from 'react'
import { blogsMeta } from './blog'

/**
 * Component for the "home" page server at path '/'
 */
export default function Home() {
  const projectCards = projects
    .slice(0, 2)
    .map(project => <ProjectSummaryCard key={project.repo.name} project={project} />)

  const blogCards = blogsMeta.map(meta => <BlogSummaryCard key={meta.slug} meta={meta} />)
  return (
    <Layout title="David's Website" description='My Projects'>
      <h1>David's Website</h1>

      <p>
        Hello! My name is David and I am a software engineer who focuses on full-stack web
        development. I generally work with Typescript and C#, though I enjoy learning and using new
        languages and tools.
      </p>

      <h2>About Me</h2>

      <p>
        At my day job, I work on a population health management platform for healthcare providers,
        payors, and pharmacies.
      </p>

      <p>
        I strive for a deep understanding of any topic that I am studying. Recently, I have become
        interested in the topic of <em>compilers and interpreters</em>. The current project that I
        am focusing on is an implementation of a{' '}
        <ExternalLink href='https://github.com/davimiku/unknown-lang'>
          statically-typed imperative programming language
        </ExternalLink>{' '}
        language in Rust. I have found that studying programming languages has brought me a deeper
        understanding of how all software works.
      </p>

      <h2>Projects</h2>
      <CardGrid cards={projectCards} />
      <ButtonLink href='/projects'>See all projects</ButtonLink>

      <h2>Blog posts</h2>
      <CardGrid cards={blogCards} />
      <ButtonLink href='/blog'>See all blog posts</ButtonLink>
    </Layout>
  )
}
