// @ts-check

import rehypePrism from '@mapbox/rehype-prism'
import createMDX from '@next/mdx'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  // Append the default value with md extensions
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    unoptimized: true,
  },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [rehypePrism],
    providerImportSource: '@mdx-js/react',
  },
})

export default withMDX(nextConfig)
