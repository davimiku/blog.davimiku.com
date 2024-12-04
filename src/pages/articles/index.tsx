import React from 'react'
import type { InferGetStaticPropsType } from 'next'
import fs from 'node:fs/promises'

import Layout from 'layouts'
import { isFirstInSeries, getPublishedArticles } from 'data/articles'
import { ArticleSummaries } from 'components/summaries/ArticleSummaries'

export const getStaticProps = () => getPublishedArticles(fs)

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
