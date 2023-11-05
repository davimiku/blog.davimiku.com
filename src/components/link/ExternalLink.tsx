import { PropsWithChildren } from 'react'

export type ExternalLinkProps = {
  href: string
}

export function ExternalLink({ href, children }: PropsWithChildren<ExternalLinkProps>) {
  const target = href.startsWith('http') ? '_blank' : undefined
  return (
    <a href={href} target={target} rel='noreferrer'>
      {children}
    </a>
  )
}
