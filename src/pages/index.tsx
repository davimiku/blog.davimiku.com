import React from 'react'
import Link from 'next/link'

import { projects } from 'data'
import Layout from 'layouts'
import { ExternalLink } from 'components/link/ExternalLink'
import { ArticleSummary } from 'components/summaries/ArticleSummary'
import { ProjectSummary } from 'components/summaries/ProjectSummary'
import { articlesMeta } from './articles'

/**
 * Component for the "home" page server at path '/'
 */
export default function Home() {
  const currentProjects = projects
    .slice(0, 2)
    .map(project => <ProjectSummary key={project.repo.name} project={project} />)

  const recentArticles = articlesMeta
    .slice(0, 3)
    .sort((a, b) => b.publishedOn.localeCompare(a.publishedOn))
    .map(meta => <ArticleSummary key={meta.slug} {...meta} />)
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

      <hr />
      <h2>Recent Posts</h2>
      <ol>{recentArticles}</ol>
      <h3>
        <Link href='/articles'>See all posts</Link>
      </h3>

      <hr />
      <h2>Current Projects</h2>
      <ol>{currentProjects}</ol>
      <h3>
        <Link href='/projects'>See all projects</Link>
      </h3>
    </Layout>
  )
}
