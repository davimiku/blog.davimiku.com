import { ArticleSummaries } from 'components/summaries/ArticleSummaries'
import { byPublishDate, isFirstInSeries, PublishedArticleMeta } from 'data/articles'
import { extractPublishedMDXMeta } from 'data/extractMdxMeta'
import Layout from 'layouts'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
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

export default function ArticleIndex({
  publishedArticles,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const articles = publishedArticles.filter(isFirstInSeries)

  return (
    <Layout title='Blogs' description='Blog Posts'>
      <h1>Articles</h1>
      <section>
        <p>
          Below are the articles in my blog. I enjoy technical writing in general, and I mostly
          write about Software Engineering and Programming Languages.
        </p>
        <p>
          I also write tutorials aimed at intermediate programmers, I believe there is an abundance
          of entry-level tutorials but far fewer quality materials for taking the next step from
          beginner to intermediate. I hope to help with that!
        </p>
      </section>
      <section>
        <ArticleSummaries articles={articles} />
      </section>
    </Layout>
  )
}
