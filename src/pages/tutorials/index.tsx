import { ArticleSummaries } from 'components/summaries/ArticleSummaries'
import { byPublishDate, isFirstInSeries, PublishedArticleMeta } from 'data/articles'
import { extractPublishedMDXMeta } from 'data/extractMdxMeta'
import Layout from 'layouts'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import fs from 'node:fs/promises'
import path from 'node:path'

export const getStaticProps = (async () => {
  const tutorials = (await extractPublishedMDXMeta(fs, path))
    .filter(article => article.category === 'tutorials')
    .filter(isFirstInSeries)
    .toSorted(byPublishDate)

  return { props: { tutorials } }
}) satisfies GetStaticProps<{ tutorials: PublishedArticleMeta[] }>

export default function TutorialIndex({
  tutorials,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout title='Tutorials' description='A collection of tutorials for intermediate programming'>
      <h1>Tutorials</h1>
      <section>
        <p>Below are the tutorials that I've written so far.</p>
        <p>
          These are mostly aimed at intermediate programmers, and often dive deep into nitty gritty
          details or focus on topics that I don't see many other tutorials for. I believe there is
          an abundance of entry-level tutorials but far fewer quality materials for taking the next
          step from beginner to intermediate. I hope to help with that!
        </p>
      </section>
      <section>
        <ArticleSummaries articles={tutorials} />
      </section>
    </Layout>
  )
}
