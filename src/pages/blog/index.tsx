import Link from 'next/link'

import Layout from 'layouts'
import { frontMatter as jsonParserRust } from './json-parser-rust.mdx'

const pages = [jsonParserRust]

const formatPath = (path: string) => path.replace(/\.mdx$/, '')

export default function BlogIndex() {
  return (
    <Layout title='Blogs' description='Blog Posts'>
      <h1>Blog</h1>
      <ul>
        {pages.map((page) => (
          <li key={page.__resourcePath}>
            <Link href={formatPath(page.__resourcePath)}>
              <a>
                <h2>{page.title}</h2>
                <p>{page.tagline}</p>
              </a>
            </Link>
            <ul>
              {page.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
