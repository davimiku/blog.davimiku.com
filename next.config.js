const withPlugins = require('next-compose-plugins')
const withSvgr = require('next-plugin-svgr')
const rehypePrism = require('@mapbox/rehype-prism')

const mdx = require('next-mdx-enhanced')({
  layoutPath: 'layouts/blog',
  defaultLayout: true,
  fileExtensions: ['mdx', 'md'],
  rehypePlugins: [rehypePrism],
})

// you may tweak other base Next options in this object
// we are using it to tell Next to also handle .md and .mdx files
const nextConfig = { pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx', 'md'] }

module.exports = withPlugins(
  [
    mdx,
    withSvgr,
    // you may add more plugins, and their configs, to this array
  ],
  nextConfig
)
