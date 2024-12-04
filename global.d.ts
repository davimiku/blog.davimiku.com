declare module '*.mdx' {
  import { ReactNode } from 'react'
  import type { ArticleMeta } from './src/data/articles'

  export const meta: ArticleMeta

  const component: ReactNode
  export default ReactNode
}

/**
 * Typescript definitions not available
 */
declare module '@mapbox/rehype-prism'
