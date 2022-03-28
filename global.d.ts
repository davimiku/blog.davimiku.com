declare module '*.mdx' {
  import { ReactNode } from 'react'
  import { Meta } from './src/data/index'

  export const meta: Meta

  const component: ReactNode
  export default ReactNode
}

/**
 * Typescript definitions not available
 */
declare module '@mapbox/rehype-prism'
