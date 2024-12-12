import { Header } from 'components/header/Header'
import { type ArticleMeta } from 'data/articles'
import { NextSeo, type NextSeoProps } from 'next-seo'
import { type PropsWithChildren } from 'react'

export type LayoutProps = {
  title: string
  description: string
  meta?: ArticleMeta
}

// TODO: investigate using pages/_document.tsx for anything common across all pages
// https://nextjs.org/docs/advanced-features/custom-document

export default function Layout({
  children,
  title,
  description,
  meta,
}: PropsWithChildren<LayoutProps>) {
  const { category, slug, publishedOn, updatedOn, ogImageUrl, tags } = meta ?? {}
  const imageUrl =
    ogImageUrl && category && slug
      ? `https://blog.davimiku.com/images/blog/${category}/${slug}/${ogImageUrl}`
      : ''
  const seoProps: NextSeoProps = {
    title: title + " | David's Software",
    description,

    openGraph: {
      site_name: "David's Software",
      type: 'website',
      title,
      description,
      article: {
        authors: ['davimiku'],
        publishedTime: publishedOn,
        modifiedTime: updatedOn,
        tags,
      },
      images: [
        {
          url: imageUrl,
        },
      ],
    },
  }
  return (
    <>
      <NextSeo {...seoProps} />
      <Header />
      <main>{children}</main>
      <footer></footer>
    </>
  )
}
