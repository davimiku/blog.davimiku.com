import { ExternalLink } from 'components/link/ExternalLink'
import { ArticleSummaries } from 'components/summaries/ArticleSummaries'
import { ProjectSummaries } from 'components/summaries/ProjectSummaries'
import { byPublishDate, isFirstInSeries, PublishedArticleMeta } from 'data/articles'
import { extractPublishedMDXMeta } from 'data/extractMdxMeta'
import { projects } from 'data/projects'
import Layout from 'layouts'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import { createReadStream } from 'node:fs'
import fs from 'node:fs/promises'
import path from 'node:path'
import readline from 'node:readline'

export const getStaticProps = (async () => {
  const publishedArticles = (
    await extractPublishedMDXMeta(fs, readline, path, createReadStream)
  ).toSorted(byPublishDate)

  return { props: { publishedArticles } }
}) satisfies GetStaticProps<{ publishedArticles: PublishedArticleMeta[] }>

/**
 * Component for the "home" page server at path '/'
 */
export default function Home({
  publishedArticles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const currentProjects = projects.slice(0, 2)
  const recentArticles = publishedArticles.filter(isFirstInSeries).slice(0, 3)

  return (
    <Layout title="David's Website" description='My Projects'>
      <h1>David's Website</h1>

      <section>
        <p>
          Hello! My name is David and I am a software engineer who focuses on full-stack web
          development. I generally work with Typescript and C#, though I enjoy learning and using
          new languages and tools.
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

        <p>
          I also write articles, tutorials, and essays intended for intermediate programmers and for
          those improving to an intermediate level. I feel there is a lot of quality material for
          the beginner level but comparatively less for intermediate. Check out some of those posts
          below!
        </p>
      </section>

      <hr />
      <section>
        <h2>Recent Articles</h2>
        <ArticleSummaries articles={recentArticles} />
        <h3>
          <Link href='/articles'>See all articles</Link>
        </h3>
      </section>

      <hr />
      <section>
        <h2>Current Projects</h2>
        <ProjectSummaries projects={currentProjects} />
        <h3>
          <Link href='/projects'>See all projects</Link>
        </h3>
      </section>
    </Layout>
  )
}
