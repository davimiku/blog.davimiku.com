// @ts-check

import createMDX from '@next/mdx'
import rehypePrism from '@mapbox/rehype-prism'

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypePrism],
    providerImportSource: '@mdx-js/react',
  },
})

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

export default withMDX(nextConfig)
