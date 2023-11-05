import React, { ReactNode } from 'react'

import { useColorSchemeClass } from 'hooks/useColorScheme'
import styles from './Badge.module.scss'

export type BadgeProps = {
  children: ReactNode
}

export function Badge({ children }: BadgeProps) {
  const className = useColorSchemeClass(styles, 'badge')
  return <span className={className}>{children}</span>
}
