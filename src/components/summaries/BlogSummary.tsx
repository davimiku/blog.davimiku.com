import Link from 'next/link'

export type BlogSummaryProps = {
  title: string
  category: string
  type: string
  slug: string
  tagline: string
  tags: string[]
  publishedOn: string
}

export function BlogSummary({
  title,
  category,
  type,
  slug,
  tagline,
  tags,
  publishedOn,
}: BlogSummaryProps) {
  const href = `/${category}/${slug}`
  return (
    <li>
      <header>
        <h2>
          <Link href={href}>{title}</Link>
        </h2>
        <p className='subtitle'>Published: {publishedOn}</p>
      </header>
      <p>{tagline}</p>
    </li>
  )
}
