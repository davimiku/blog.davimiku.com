import React, { ReactNode } from 'react'

import styles from './Badge.module.scss'

export type BadgeProps = {
  children: ReactNode
}

export function Badge({ children }: BadgeProps) {
  return <span className={styles['badge']}>{children}</span>
}
