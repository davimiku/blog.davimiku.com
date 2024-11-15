import Link from 'next/link'

export type ArticleSummaryProps = {
  title: string
  category: string
  type: string
  slug: string
  tagline: string
  tags: string[]
  publishedOn: string
}

export function ArticleSummary({
  title,
  category,
  type,
  slug,
  tagline,
  tags,
  publishedOn,
}: ArticleSummaryProps) {
  const href = `/${category}/${slug}`
  return (
    <li>
      <header>
        <h2>
          <Link href={href} legacyBehavior>
            {title}
          </Link>
        </h2>
        <p className='subtitle'>Published: {publishedOn}</p>
      </header>
      <p>{tagline}</p>
    </li>
  )
}
