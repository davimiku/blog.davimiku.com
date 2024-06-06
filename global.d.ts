declare module '*.mdx' {
  import { ReactNode } from 'react'
  import { PublishedBlogMeta } from './src/blog'

  export const meta: PublishedBlogMeta

  const component: ReactNode
  export default ReactNode
}

/**
 * Typescript definitions not available
 */
declare module '@mapbox/rehype-prism'
