declare module '*.mdx' {
  import { ReactNode } from 'react'

  export type FrontMatter = {
    title: string
    tagline: string
    publishedAt: Date
    tags?: string[]
    __resourcePath: string
  }

  export type ParsedFrontMatter = {
    title: string
    tagline: string
    publishedAt: string
    tags?: string[]
    __resourcePath: string
  }

  export const frontMatter: FrontMatter

  const component: ReactNode
  export default ReactNode
}

/**
 * Typescript definitions not available
 */
declare module 'next-mdx-enhanced'

/**
 * Typescript definitions not available
 */
declare module '@mapbox/rehype-prism'

/**
 * Typescript definitions not available
 */
declare module 'next-plugin-svgr'
