declare module '*.mdx' {
  import { ReactNode } from 'react'

  export const frontMatter: {
    title: string
    description: string
    timestamp: number
    __resourcePath: string
    // type additional properties below
  }

  const component: ReactNode
  export default ReactNode
}
