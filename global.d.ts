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

declare module '*.svg' {
  import { FunctionComponent, SVGAttributes } from 'react'

  const content: FunctionComponent<
    SVGAttributes<SVGElement> | { title: string }
  >
  export default content
}
