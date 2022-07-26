import { useColorSchemeClass } from 'hooks/useColorScheme'
import { HTMLAttributeAnchorTarget, PropsWithChildren } from 'react'

import { IoArrowForward } from 'react-icons/io5'
import styles from './ButtonLink.module.scss'

export type ButtonLink = {
  href: string
  target?: HTMLAttributeAnchorTarget
}

export function ButtonLink({ href, target = '_self', children }: PropsWithChildren<ButtonLink>) {
  const className = useColorSchemeClass(styles, 'button-link')
  return (
    <div className={className}>
      <a href={href} target={target} rel='noreferrer'>
        {children}
        &nbsp;
        <IoArrowForward />
      </a>
    </div>
  )
}
