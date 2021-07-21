import Link from 'next/link'

import Layout from 'layouts'
import { blogs } from 'data'

const formatPath = (path: string) => path.replace(/\.mdx$/, '')

export default function BlogIndex() {
  return (
    <Layout title='Blogs' description='Blog Posts'>
      <h1>Blog</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.__resourcePath}>
            <Link href={formatPath(blog.__resourcePath)}>
              <a>
                <h2>{blog.title}</h2>
                <p>{blog.tagline}</p>
              </a>
            </Link>
            <ul>
              {blog.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Layout>
  )
}
