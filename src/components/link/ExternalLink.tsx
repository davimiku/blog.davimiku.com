import { FaExternalLinkAlt } from 'react-icons/fa'
import { PropsWithChildren } from 'react'

export type ExternalLinkProps = {
  href?: string
}

export function ExternalLink({ href, children }: PropsWithChildren<ExternalLinkProps>) {
  return (
    <a href={href} target='_blank' rel='noreferrer'>
      {children}
      &nbsp;
      <FaExternalLinkAlt />
      &nbsp;
    </a>
  )
}
