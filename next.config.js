// @ts-check

const withPlugins = require('next-compose-plugins')
const withSvgr = require('next-plugin-svgr')

const withMDX = require('@next/mdx')({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = withPlugins(
  [
    withSvgr,
    withMDX({
      // Append the default value with md extensions
      pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    }),
  ],
  {
    experimental: {
      images: {
        unoptimized: true,
      },
    },
  }
)

module.exports = nextConfig
