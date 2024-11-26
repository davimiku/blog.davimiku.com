import { HTMLAttributeAnchorTarget, PropsWithChildren } from 'react'

import { IoArrowForward } from 'react-icons/io5'
import styles from './ButtonLink.module.scss'

export type ButtonLink = {
  href: string
  target?: HTMLAttributeAnchorTarget
}

export function ButtonLink({ href, target = '_self', children }: PropsWithChildren<ButtonLink>) {
  return (
    <div className={styles['button-link']}>
      <a href={href} target={target} rel='noreferrer'>
        {children}
        &nbsp;
        <IoArrowForward />
      </a>
    </div>
  )
}
