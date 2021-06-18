const withPlugins = require('next-compose-plugins')
const withSvgr = require('next-plugin-svgr')
const rehypePrism = require('@mapbox/rehype-prism')

const mdx = require('next-mdx-enhanced')({
  layoutPath: 'layouts/blog',
  defaultLayout: true,
  fileExtensions: ['mdx', 'md'],
  rehypePlugins: [rehypePrism],
})

const nextConfig = {
  // TODO: Upgrade to Webpack 5 (handle breaking changes)
  webpack5: false,

  /** Added .mdx and .md for static HTML generation from Markdown */
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx', 'md'],
}

module.exports = withPlugins(
  [
    mdx,
    withSvgr,
    // more plugins go here
  ],
  nextConfig
)
