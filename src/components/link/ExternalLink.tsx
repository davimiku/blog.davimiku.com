import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PropsWithChildren } from 'react'

export type ExternalLinkProps = {
  href: string
}

export function ExternalLink({
  href,
  children,
}: PropsWithChildren<ExternalLinkProps>) {
  return (
    <a href={href} target='_blank' rel='noreferrer'>
      {children}
      &nbsp;
      <FontAwesomeIcon icon={faExternalLinkAlt} />
    </a>
  )
}
